import { Pool } from "pg";
import { supabase } from "../lib/supabase"; 
import { config } from "dotenv";
import { Request, Response } from "express"



const pool = new Pool({
  connectionString:process.env.DATABASE_URL,
});

export const transferMoney = async (req:Request, res:Response) => {
  const token = req.headers.authorization?.split(" ")[1];
  const { receverAccount, amount,receverEmail } = req.body;


  const { data: { user }, error } = await supabase.auth.getUser(token);
  if (error || !user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const client = await pool.connect();

  try {
    await client.query("BEGIN");


    const senderRes = await client.query(
      "SELECT balance FROM users WHERE id = $1 FOR UPDATE",
      [user.id]
    );
    if (senderRes.rowCount === 0) throw new Error("Sender not found");

    const senderBalance = senderRes.rows[0].balance;
    if (senderBalance < amount) throw new Error("Insufficient funds");

  
    const receiverRes = await client.query(
      "SELECT id, first_name, balance FROM users WHERE bank_account = $1 or email=$2 FOR UPDATE",
      [receverAccount,receverEmail]
    );
    if (receiverRes.rowCount === 0 ) throw new Error("Receiver not found");

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
      `INSERT INTO payments (
        user_id, sender_id, recipient_id, recipient_name, amount, currency
      ) VALUES ($1, $2, $3, $4, $5, $6)`,
      [user.id, user.id, receiverId, receiverName, amount, "EUR"]
    );

    await client.query("COMMIT");
    res.json({ success: true, message: "Transfer completed successfully" });
  } catch (err:any) {
    await client.query("ROLLBACK");
    res.status(400).json({ error: err.message });
  } finally {
    client.release();
  }
};
