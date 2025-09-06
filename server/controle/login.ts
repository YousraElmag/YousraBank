import { config } from "dotenv";
config();

import { Request, Response } from "express";
import { supabase } from "../lib/supabase";

export async function Login(req: Request, res: Response) {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(200).json({ user: data.user });
}
