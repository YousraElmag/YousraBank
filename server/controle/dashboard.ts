import { Request, Response } from "express";

import { supabase } from "../lib/supabase";
export default async function handler(req: any, res: any) {
  const token = req.headers.authorization?.split(" ")[1];

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser(token);
  const { receverAccount, amount } = req.body;

  if (error || !user) {
    return res.status(401).json({ error: "Unauthorized" });
  }


  const { error: transferError } = await supabase.rpc("transfer_money", {
    sender_id: user.id,
    receiver_account: receverAccount,
    amount,
  });

  if (transferError) {
    return res.status(400).json({ error: transferError.message });
  }

  res.json({ success: true, message: "Transfer completed successfully" });
}
