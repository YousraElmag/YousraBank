"use client";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login"); // رجّع اليوزر لصفحة login
  };

  return <button onClick={handleLogout}>Logout</button>;
}
