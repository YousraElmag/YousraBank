"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import { API_URL } from "../lib/api";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/auth/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setMessage("Check your email for a link to reset your password.");
        setEmail("");
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch {
      setError("Could not reach the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="auth-wrap">
        <div className="card auth-card">
          <h1>Reset your password</h1>
          <p className="subtitle">Enter your email and we will send you a reset link.</p>

          <form className="form" onSubmit={handleReset}>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" className="input" type="email" placeholder="you@example.com"
                value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            {error && <div className="alert alert-error">{error}</div>}
            {message && <div className="alert alert-success">{message}</div>}

            <button type="submit" disabled={loading} className="btn btn-primary btn-block">
              {loading ? "Sending..." : "Send reset link"}
            </button>
          </form>

          <p className="auth-footer">
            Remembered it? <Link href="/login">Back to log in</Link>
          </p>
        </div>
      </main>
    </>
  );
}
