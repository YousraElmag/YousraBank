import request from "supertest";
import express, { Request, Response } from "express";
import { transferMoney } from"../controle/transferService"
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
  idempotency_keys: {
    findUnique: jest.fn(),
    create: jest.fn(),
  },
  users: {
    findUnique: jest.fn(),
    findFirst: jest.fn(),
    update: jest.fn(),
  },
  payments: {
    create: jest.fn(),
  },
  $transaction: jest.fn(),
}));

const app = express();
app.use(express.json());
app.post("/api/transfer", transferMoney);

describe("POST /api/transfer", () => {
  const token = "mock-token";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should transfer money successfully", async () => {
    (supabase.auth.getUser as any).mockResolvedValue({
      data: { user: { id: "senderId" } },
      error: null,
    });

    (prisma.idempotency_keys.findUnique as any).mockResolvedValue(null);

    (prisma.$transaction as any).mockImplementation(async (cb: any) => {
      return cb({
        users: {
          findUnique: jest.fn().mockResolvedValue({ id: "senderId", balance: { toNumber: () => 200 } }),
          findFirst: jest.fn().mockResolvedValue({ id: "receiverId", balance: { toNumber: () => 50 } }),
          update: jest.fn(),
        },
        payments: { create: jest.fn() },
        idempotency_keys: { create: jest.fn() },
      });
    });

    const response = await request(app)
      .post("/api/transfer")
      .set("Authorization", `Bearer ${token}`)
      .send({
        receverAccount: "ACC123",
        amount: 100,
        idempotencyKey: "key123",
      });

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.transactionId).toBeDefined();
    expect(response.body.senderBalance).toBe(100);
  });

  it("should fail if no token provided", async () => {
    const response = await request(app)
      .post("/api/transfer")
      .send({
        receverAccount: "ACC123",
        amount: 100,
        idempotencyKey: "key123",
      });

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("error", "No token provided");
  });

  it("should fail if insufficient funds", async () => {
    (supabase.auth.getUser as any).mockResolvedValue({
      data: { user: { id: "senderId" } },
      error: null,
    });
    (prisma.idempotency_keys.findUnique as any).mockResolvedValue(null);

    (prisma.$transaction as any).mockImplementation(async (cb: any) => {
      return cb({
        users: {
          findUnique: jest.fn().mockResolvedValue({ id: "senderId", balance: { toNumber: () => 50 } }),
          findFirst: jest.fn().mockResolvedValue({ id: "receiverId", balance: { toNumber: () => 50 } }),
          update: jest.fn(),
        },
        payments: { create: jest.fn() },
        idempotency_keys: { create: jest.fn() },
      });
    });

    const response = await request(app)
      .post("/api/transfer")
      .set("Authorization", `Bearer ${token}`)
      .send({
        receverAccount: "ACC123",
        amount: 100,
        idempotencyKey: "key123",
      });

    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty("error", "Insufficient funds");
  });
});
