"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabase";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      const hash = window.location.hash.substring(1); 
      const params = new URLSearchParams(hash);

      const access_token = params.get("access_token");
      const refresh_token = params.get("refresh_token");
      const type = params.get("type");
      if (!access_token || !refresh_token) {
        console.error("Missing access_token or refresh_token");
        router.push("/login");
        return;
      }

      const { error } = await supabase.auth.setSession({
        access_token,
        refresh_token, 
      });

      if (error) {
        console.error("Supabase setSession error:", error.message);
        router.push("/login");
        return;
      }

      if (type === "recovery") {
        router.push("/updatepassword"); 
      } else {
        router.push("/userdash");
      }
    };

    handleAuth();
  }, [router]);

  return (
    <main className="auth-wrap">
      <div className="card auth-card" style={{ textAlign: "center" }}>
        <h1>One moment...</h1>
        <p className="subtitle">We are signing you in.</p>
      </div>
    </main>
  );
}
