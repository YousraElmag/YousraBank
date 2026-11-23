"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar/Navbar";
import { supabase } from "../lib/supabase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setError(error.message);
        return;
      }
      if (data.user) router.push("/userdash");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="auth-wrap">
        <div className="card auth-card">
          <h1>Welcome back</h1>
          <p className="subtitle">Log in to your YousraBank account.</p>

          <form onSubmit={handleLogin} className="form">
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" className="input" type="email" placeholder="you@example.com"
                value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <input id="password" className="input" type="password" placeholder="••••••••"
                value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="current-password" />
              <Link href="/restpassword" className="hint" style={{ alignSelf: "flex-end" }}>Forgot password?</Link>
            </div>

            {error && <div className="alert alert-error">{error}</div>}

            <button type="submit" disabled={loading} className="btn btn-primary btn-block">
              {loading ? "Logging in..." : "Log in"}
            </button>
          </form>

          <p className="auth-footer">
            New to YousraBank? <Link href="/register">Open an account</Link>
          </p>
        </div>
      </main>
    </>
  );
}
