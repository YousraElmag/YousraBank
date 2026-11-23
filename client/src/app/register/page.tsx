"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import { API_URL } from "../lib/api";

export default function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, firstname, lastname }),
      });
      const data = await res.json();

      if (res.ok) {
        setMessage("Account created! Check your email to confirm your account.");
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch {
      setError("Could not reach the server. Please try again in a minute.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="auth-wrap">
        <div className="card auth-card">
          <h1>Open your account</h1>
          <p className="subtitle">It takes less than a minute. You get €100 to start.</p>

          <form onSubmit={handleRegister} className="form">
            <div className="form-row">
              <div className="field">
                <label htmlFor="firstname">First name</label>
                <input id="firstname" className="input" type="text" value={firstname}
                  onChange={(e) => setFirstname(e.target.value)} required autoComplete="given-name" />
              </div>
              <div className="field">
                <label htmlFor="lastname">Last name</label>
                <input id="lastname" className="input" type="text" value={lastname}
                  onChange={(e) => setLastname(e.target.value)} required autoComplete="family-name" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" className="input" type="email" placeholder="you@example.com" value={email}
                onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <input id="password" className="input" type="password" value={password}
                onChange={(e) => setPassword(e.target.value)} required autoComplete="new-password" />
              <span className="hint">At least 6 characters</span>
            </div>
            <div className="field">
              <label htmlFor="confirm">Confirm password</label>
              <input id="confirm" className="input" type="password" value={confirm}
                onChange={(e) => setConfirm(e.target.value)} required autoComplete="new-password" />
            </div>

            {error && <div className="alert alert-error">{error}</div>}
            {message && <div className="alert alert-success">{message}</div>}

            <button type="submit" disabled={loading} className="btn btn-primary btn-block">
              {loading ? "Creating account..." : "Create account"}
            </button>
          </form>

          <p className="auth-footer">
            Already have an account? <Link href="/login">Log in</Link>
          </p>
        </div>
      </main>
    </>
  );
}
