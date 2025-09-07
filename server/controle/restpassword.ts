import { config } from "dotenv";
config(); //

import { Request, Response } from "express";
import { supabase } from "../lib/supabase";

export async function resetPassword(req: Request, res: Response) {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email is required" });
const { error } = await supabase.auth.resetPasswordForEmail(email, {
  redirectTo: "https://yousra-bank.vercel.app/callback",
});

  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: "Password reset email sent" });
}
