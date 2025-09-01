import { supabase } from "../lib/supabase";
import { Request, Response } from "express";

export async function Register(req: Request, res: Response) {
  const { email, password ,firstname, lastname} = req.body;

  const { data, error } = await supabase.auth.signUp({ email, password,
      options: {
      data: {
        firstname,
        lastname,
      },
    },
  });

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(200).json({ user: data.user });
}
