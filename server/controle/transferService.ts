import { Request, Response } from "express";
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "../lib/supabase";

export const transferMoney = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "No token provided" });

    const { receverAccount, receverEmail, amount, idempotencyKey } = req.body;
    if ((!receverAccount && !receverEmail) || !amount || amount <= 0) {
      return res.status(400).json({ error: "Invalid input" });
    }
    if (!idempotencyKey) {
      return res.status(400).json({ error: "Idempotency key required" });
    }
    const { data: existingKey } = await supabase
      .from("idempotency_keys")
      .select("response")
      .eq("key", idempotencyKey)
      .single();

    if (existingKey) {
      return res.json(existingKey.response); 
    }


    const { data: { user }, error: userError } = await supabase.auth.getUser(token);
    if (userError || !user) return res.status(401).json({ error: "Unauthorized" });


    const { data: senderData, error: senderError } = await supabase
      .from("users")
      .select("id, balance")
      .eq("id", user.id)
      .single();

    if (senderError || !senderData) throw new Error("Sender not found");
    if (senderData.balance < amount) throw new Error("Insufficient funds");

  
    const { data: receiverData, error: receiverError } = await supabase
      .from("users")
      .select("id, first_name, balance")
      .or(`bank_account.eq.${receverAccount},email.eq.${receverEmail}`)
      .single();

    if (receiverError || !receiverData) throw new Error("Receiver not found");

    const newSenderBalance = senderData.balance - amount;
    const newReceiverBalance = receiverData.balance + amount;

    await supabase.from("users").update({ balance: newSenderBalance }).eq("id", user.id);
    await supabase.from("users").update({ balance: newReceiverBalance }).eq("id", receiverData.id);

  
    const transferResult = {
      transactionId: uuidv4(),
      senderBalance: newSenderBalance,
      success: true,
      message: "Transfer completed successfully",
    };

    await supabase.from("payments").insert({
      user_id: user.id,
      sender_id: user.id,
      recipient_id: receiverData.id,
      recipient_name: receiverData.first_name,
      amount,
      currency: "EUR",
      transaction_id: transferResult.transactionId,
    });

  
    await supabase.from("idempotency_keys").insert({
      key: idempotencyKey,
      response: transferResult,
    });

    res.json(transferResult);
  } catch (err: any) {
    console.error("Error in transferMoney:", err.message);
    res.status(500).json({ error: err.message });
  }
};

