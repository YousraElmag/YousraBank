"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabase";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("code");

        if (!code) {
          console.error("No auth code found in URL");
          router.push("/login");
          return;
        }

        const { data, error } =
          await supabase.auth.exchangeCodeForSession(code);

        if (error) {
          console.error("Auth callback error:", error.message);
          router.push("/login");
          return;
        }

        if (data.session) {
          router.push("/restpassword");
        } else {
          router.push("/login");
        }
      } catch (err) {
        console.error("Unexpected error:", err);
        router.push("/login");
      }
    };

    handleAuth();
  }, [router]);

  return <p>Processing authentication...</p>;
}
