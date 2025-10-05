import { supabase } from "../lib/supabase";
import { v4 as uuidv4 } from "uuid";

interface TransferData {
  receverEmail?: string;
  receverAccount?: string;
  amount: number;
}

export async function transferMoney({ receverEmail, receverAccount, amount }: TransferData) {
  const session = await supabase.auth.getSession();
  const token = session.data.session?.access_token;
  if (!token) throw new Error("User not logged in");

  const idempotencyKey = uuidv4();

  const res = await fetch("http://localhost:5000/api/auth/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ receverEmail, receverAccount, amount, idempotencyKey }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Transfer failed");

  return data; 
}
