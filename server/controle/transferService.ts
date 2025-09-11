import { Pool } from "pg";
import { createClient } from "@supabase/supabase-js";
import { Request, Response } from "express";
import * as dotenv from "dotenv";

dotenv.config();


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});


const getSupabaseServerClient = (token: string) => {
  return createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!, 
    {
      global: {
        headers: { Authorization: `Bearer ${token}` },
      },
    }
  );
};

export const transferMoney = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "No token provided" });

    const { receverAccount, receverEmail, amount } = req.body;
    if ((!receverAccount && !receverEmail) || !amount || amount <= 0) {
      return res.status(400).json({ error: "Invalid input" });
    }

    const supabase = getSupabaseServerClient(token);
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) return res.status(401).json({ error: "Unauthorized" });

    const client = await pool.connect();

    try {
      await client.query("BEGIN");

     
      const senderRes = await client.query(
        "SELECT balance FROM users WHERE id = $1 FOR UPDATE",
        [user.id]
      );
      if (!senderRes.rowCount) throw new Error("Sender not found");

      const senderBalance = senderRes.rows[0].balance;
      if (senderBalance < amount) throw new Error("Insufficient funds");

    
      const receiverRes = await client.query(
        "SELECT id, first_name, balance FROM users WHERE bank_account = $1 OR email = $2 FOR UPDATE",
        [receverAccount, receverEmail]
      );
      if (!receiverRes.rowCount) throw new Error("Receiver not found");

      const receiverId = receiverRes.rows[0].id;
      const receiverName = receiverRes.rows[0].first_name;

   
      await client.query(
        "UPDATE users SET balance = balance - $1 WHERE id = $2",
        [amount, user.id]
      );

   
      await client.query(
        "UPDATE users SET balance = balance + $1 WHERE id = $2",
        [amount, receiverId]
      );

   
      await client.query(
        "INSERT INTO payments (user_id, sender_id, recipient_id, recipient_name, amount, currency) VALUES ($1,$2,$3,$4,$5,$6)",
        [user.id, user.id, receiverId, receiverName, amount, "EUR"]
      );

      await client.query("COMMIT");

      res.json({
        success: true,
        message: "Transfer completed successfully",
        senderBalance: senderBalance - amount
      });

    } catch (err: any) {
      await client.query("ROLLBACK");
      console.error(err);
      res.status(400).json({ error: err.message });
    } finally {
      client.release();
    }

  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
