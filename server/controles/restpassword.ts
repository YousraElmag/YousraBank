import { supabase } from "../lib/supabase";
import { Request, Response } from "express";

export async function resetPassword(req: Request, res: Response) {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email is required" });

  const { error } = await supabase.auth.resetPasswordForEmail(email,{ redirectTo: "http://localhost:3000/updatepassword" });

  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: "Password reset email sent" });
}
