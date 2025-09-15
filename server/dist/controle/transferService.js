"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transferMoney = void 0;
const uuid_1 = require("uuid");
const prisma_1 = __importDefault(require("../prisma"));
const supabase_1 = require("../lib/supabase");
const transferMoney = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token)
            return res.status(401).json({ error: "No token provided" });
        const { receverAccount, receverEmail, amount, idempotencyKey } = req.body;
        if ((!receverAccount && !receverEmail) || !amount || amount <= 0) {
            return res.status(400).json({ error: "Invalid input" });
        }
        if (!idempotencyKey)
            return res.status(400).json({ error: "Idempotency key required" });
        const { data: { user }, error: userError } = await supabase_1.supabase.auth.getUser(token);
        if (userError || !user)
            return res.status(401).json({ error: "Unauthorized" });
        const senderId = user.id;
        const existingKey = await prisma_1.default.idempotency_keys.findUnique({
            where: { key: idempotencyKey },
        });
        if (existingKey)
            return res.json(existingKey.response);
        const result = await prisma_1.default.$transaction(async (tx) => {
            const sender = await tx.users.findUnique({ where: { id: senderId } });
            if (!sender)
                throw new Error("Sender not found");
            if ((sender.balance?.toNumber() || 0) < amount)
                throw new Error("Insufficient funds");
            const receiver = await tx.users.findFirst({
                where: {
                    OR: [
                        { bank_account: receverAccount },
                        { email: receverEmail },
                    ],
                },
            });
            if (!receiver)
                throw new Error("Receiver not found");
            const newSenderBalance = (sender.balance?.toNumber() || 0) - amount;
            const newReceiverBalance = (receiver.balance?.toNumber() || 0) + amount;
            await tx.users.update({ where: { id: sender.id }, data: { balance: newSenderBalance } });
            await tx.users.update({ where: { id: receiver.id }, data: { balance: newReceiverBalance } });
            const transactionId = (0, uuid_1.v4)();
            await tx.payments.create({
                data: {
                    sender_id: sender.id,
                    recipient_id: receiver.id,
                    amount,
                    currency: "EUR",
                    transaction_id: transactionId,
                },
            });
            const transferResult = {
                transactionId,
                senderBalance: newSenderBalance,
                success: true,
                message: "Transfer completed successfully",
            };
            await tx.idempotency_keys.create({ data: { key: idempotencyKey, response: transferResult } });
            return transferResult;
        });
        res.json(result);
    }
    catch (err) {
        console.error("Transfer error:", err.message);
        res.status(500).json({ error: err.message });
    }
};
exports.transferMoney = transferMoney;
