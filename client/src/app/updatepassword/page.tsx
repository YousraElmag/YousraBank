"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar/Navbar";
import { supabase } from "../lib/supabase";

export default function UpdatePassword() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });
    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      setMessage("Password updated! Redirecting to log in...");
      setPassword("");
      setTimeout(() => router.push("/login"), 1500);
    }
  };

  return (
    <>
      <Navbar />
      <main className="auth-wrap">
        <div className="card auth-card">
          <h1>Choose a new password</h1>
          <p className="subtitle">Make it strong and easy for you to remember.</p>

          <form className="form" onSubmit={handleUpdate}>
            <div className="field">
              <label htmlFor="password">New password</label>
              <input id="password" className="input" type="password" value={password}
                onChange={(e) => setPassword(e.target.value)} required autoComplete="new-password" />
              <span className="hint">At least 6 characters</span>
            </div>

            {error && <div className="alert alert-error">{error}</div>}
            {message && <div className="alert alert-success">{message}</div>}

            <button type="submit" disabled={loading} className="btn btn-primary btn-block">
              {loading ? "Saving..." : "Update password"}
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
