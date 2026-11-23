import request from "supertest";
import express from "express";
import { transferMoney } from "../controle/transferService";
import { supabase } from "../lib/supabase";
import prisma from "../prisma";

jest.mock("../lib/supabase", () => ({
  supabase: {
    auth: {
      getUser: jest.fn(),
    },
  },
}));

jest.mock("../prisma", () => ({
  __esModule: true,
  default: {
    idempotency_keys: { findUnique: jest.fn() },
    $transaction: jest.fn(),
  },
}));

const app = express();
app.use(express.json());
app.post("/api/transfer", transferMoney);

// Builds a fake Prisma transaction client.
function mockTx({ senderBalance, receiverId = "receiverId", enoughMoney = true }: {
  senderBalance: number;
  receiverId?: string;
  enoughMoney?: boolean;
}) {
  return {
    users: {
      findFirst: jest.fn().mockResolvedValue({ id: receiverId }),
      findUnique: jest.fn().mockResolvedValue({ id: "senderId", balance: { toNumber: () => senderBalance } }),
      updateMany: jest.fn().mockResolvedValue({ count: enoughMoney ? 1 : 0 }),
      update: jest.fn(),
    },
    payments: { create: jest.fn() },
    idempotency_keys: { create: jest.fn() },
  };
}

describe("POST /api/transfer", () => {
  const token = "mock-token";

  beforeEach(() => {
    jest.clearAllMocks();
    (supabase.auth.getUser as jest.Mock).mockResolvedValue({
      data: { user: { id: "senderId" } },
      error: null,
    });
    (prisma.idempotency_keys.findUnique as jest.Mock).mockResolvedValue(null);
  });

  it("should transfer money successfully", async () => {
    const tx = mockTx({ senderBalance: 100 });
    (prisma.$transaction as jest.Mock).mockImplementation(async (cb: any) => cb(tx));

    const response = await request(app)
      .post("/api/transfer")
      .set("Authorization", `Bearer ${token}`)
      .send({ receverAccount: "ACC123", amount: 100, idempotencyKey: "key123" });

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.transactionId).toBeDefined();
    expect(response.body.senderBalance).toBe(100);
    // Only the filled-in field is used to find the receiver
    expect(tx.users.findFirst).toHaveBeenCalledWith({ where: { OR: [{ bank_account: "ACC123" }] } });
  });

  it("should fail if no token provided", async () => {
    const response = await request(app)
      .post("/api/transfer")
      .send({ receverAccount: "ACC123", amount: 100, idempotencyKey: "key123" });

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("error", "No token provided");
  });

  it("should fail if insufficient funds", async () => {
    const tx = mockTx({ senderBalance: 50, enoughMoney: false });
    (prisma.$transaction as jest.Mock).mockImplementation(async (cb: any) => cb(tx));

    const response = await request(app)
      .post("/api/transfer")
      .set("Authorization", `Bearer ${token}`)
      .send({ receverAccount: "ACC123", amount: 100, idempotencyKey: "key123" });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error", "Insufficient funds");
    expect(tx.users.update).not.toHaveBeenCalled();
  });

  it("should reject an amount sent as a string", async () => {
    const response = await request(app)
      .post("/api/transfer")
      .set("Authorization", `Bearer ${token}`)
      .send({ receverAccount: "ACC123", amount: "100", idempotencyKey: "key123" });

    expect(response.status).toBe(400);
  });

  it("should not allow sending money to yourself", async () => {
    const tx = mockTx({ senderBalance: 100, receiverId: "senderId" });
    (prisma.$transaction as jest.Mock).mockImplementation(async (cb: any) => cb(tx));

    const response = await request(app)
      .post("/api/transfer")
      .set("Authorization", `Bearer ${token}`)
      .send({ receverEmail: "me@example.com", amount: 10, idempotencyKey: "key456" });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("You cannot send money to yourself");
    expect(tx.users.updateMany).not.toHaveBeenCalled();
  });
});
