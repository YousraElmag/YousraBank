import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import prisma from "../prisma";
import { supabase } from "../lib/supabase";
import { Prisma } from "@prisma/client";

// Errors we expect (bad input, not enough money...). These return 400/404, not 500.
class TransferError extends Error {
  constructor(message: string, public status: number = 400) {
    super(message);
  }
}

export const transferMoney = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "No token provided" });

    const { receverAccount, receverEmail, amount, idempotencyKey } = req.body;

    // Amount must be a real positive number (a string like "100" would break the maths).
    if (typeof amount !== "number" || !Number.isFinite(amount) || amount <= 0) {
      return res.status(400).json({ error: "Invalid input" });
    }
    if (!receverAccount && !receverEmail) {
      return res.status(400).json({ error: "Invalid input" });
    }
    if (!idempotencyKey) return res.status(400).json({ error: "Idempotency key required" });

    const value = Math.round(amount * 100) / 100; // max 2 decimals (cents)

    const { data: { user }, error: userError } = await supabase.auth.getUser(token);
    if (userError || !user) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const senderId = user.id;

    const existingKey = await prisma.idempotency_keys.findUnique({
      where: { key: idempotencyKey },
    });
    if (existingKey) return res.json(existingKey.response);

    // Only search on the fields the user really filled in.
    // (An empty/undefined field in an OR would match the wrong user.)
    const receiverFilters: Prisma.usersWhereInput[] = [];
    if (receverAccount) receiverFilters.push({ bank_account: String(receverAccount) });
    if (receverEmail) receiverFilters.push({ email: String(receverEmail) });

    const result = await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      const receiver = await tx.users.findFirst({ where: { OR: receiverFilters } });
      if (!receiver) throw new TransferError("Receiver not found", 404);
      if (receiver.id === senderId) throw new TransferError("You cannot send money to yourself");

      // Atomic update: only takes the money if the balance is high enough.
      // This also prevents double spending when two requests arrive at the same time.
      const debit = await tx.users.updateMany({
        where: { id: senderId, balance: { gte: value } },
        data: { balance: { decrement: value } },
      });
      if (debit.count === 0) {
        const exists = await tx.users.findUnique({ where: { id: senderId } });
        if (!exists) throw new TransferError("Sender not found", 404);
        throw new TransferError("Insufficient funds");
      }

      await tx.users.update({
        where: { id: receiver.id },
        data: { balance: { increment: value } },
      });

      const transactionId = uuidv4();
      await tx.payments.create({
        data: {
          sender_id: senderId,
          recipient_id: receiver.id,
          amount: value,
          currency: "EUR",
          status: "completed",
          transaction_id: transactionId,
        },
      });

      const sender = await tx.users.findUnique({ where: { id: senderId } });

      const transferResult = {
        transactionId,
        senderBalance: sender?.balance?.toNumber() ?? 0,
        success: true,
        message: "Transfer completed successfully",
      };

      await tx.idempotency_keys.create({ data: { key: idempotencyKey, response: transferResult } });

      return transferResult;
    });

    res.json(result);
  } catch (err: any) {
    if (err instanceof TransferError) {
      return res.status(err.status).json({ error: err.message });
    }
    console.error("Transfer error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
