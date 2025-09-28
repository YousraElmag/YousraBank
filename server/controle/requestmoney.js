"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestMoney = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const supabase_1 = require("../lib/supabase");
const requestMoney = async (req, res) => {
    try {
        const { receiverEmail, amount } = req.body;
        if (!receiverEmail || !amount) {
            return res.status(400).json({ error: "All fields required" });
        }
        const token = req.headers.authorization?.split(" ")[1];
        const { data: { user } } = await supabase_1.supabase.auth.getUser(token);
        if (!user?.email)
            return res.status(401).json({ error: "Unauthorized" });
        const sender = await prisma_1.default.users.findUnique({ where: { email: user.email } });
        if (!sender)
            return res.status(404).json({ error: "Sender not found" });
        const receiver = await prisma_1.default.users.findUnique({ where: { email: receiverEmail } });
        if (!receiver)
            return res.status(404).json({ error: "Receiver not found" });
        const request = await prisma_1.default.transaction.create({
            data: {
                senderId: sender.id,
                sender_name: sender.first_name ?? "unknown",
                receiverId: receiver.id,
                receiver_name: receiver.first_name ?? 'unknown',
                amount,
                status: "pending",
            },
        });
        return res.status(201).json({
            message: "Request sent successfully",
            transaction: request,
        });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
};
exports.requestMoney = requestMoney;
