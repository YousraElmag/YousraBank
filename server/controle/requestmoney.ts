import { Request, Response } from "express";
import prisma from "../prisma";
import { supabase } from "../lib/supabase";

export const requestMoney = async (req: Request, res: Response) => {
  try {
    const { receiverEmail, amount } = req.body;

    if (!receiverEmail || !amount) {
      return res.status(400).json({ error: "All fields required" });
    }

    const token = req.headers.authorization?.split(" ")[1]; 
    const { data: { user } } = await supabase.auth.getUser(token);

    if (!user?.email) return res.status(401).json({ error: "Unauthorized" });

    const sender = await prisma.users.findUnique({ where: { email: user.email } });
    if (!sender) return res.status(404).json({ error: "Sender not found" });

    const receiver = await prisma.users.findUnique({ where: { email: receiverEmail } });
    if (!receiver) return res.status(404).json({ error: "Receiver not found" });

    const request = await prisma.transaction.create({
      data: {
  
    senderid: sender.id,           
    sender_name: sender.first_name ?? "unknown",
    receiverid: receiver.id,         
    receiver_name: receiver.first_name ?? 'unknown',
    amount,
    status: "pending",
 
      },
    });

    return res.status(201).json({
      message: "Request sent successfully",
      transaction: request,
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
