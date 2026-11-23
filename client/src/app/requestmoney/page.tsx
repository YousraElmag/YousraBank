"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import { supabase } from "../lib/supabase";
import { API_URL } from "../lib/api";
import { formatMoney } from "../lib/format";

export default function RequestMoney() {
  const [receiverEmail, setReceiverEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const value = Number(amount.replace(",", "."));
    if (!value || value <= 0) {
      setError("Please enter an amount greater than 0");
      return;
    }

    setLoading(true);
    try {
      const { data } = await supabase.auth.getSession();
      const token = data.session?.access_token;
      if (!token) {
        setError("You are not logged in");
        return;
      }

      const res = await fetch(`${API_URL}/api/auth/request`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ receiverEmail, amount: value }),
      });
      const result = await res.json();

      if (res.ok) {
        setSuccess(`Request for ${formatMoney(value)} sent to ${receiverEmail}.`);
        setReceiverEmail("");
        setAmount("");
      } else {
        setError(result.error || "Something went wrong");
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
      <main className="page-narrow">
        <div className="page-header">
          <h1>Request money</h1>
          <p>Ask another YousraBank user to send you money.</p>
        </div>

        <div className="card">
          <form onSubmit={handleRequest} className="form">
            <div className="field">
              <label htmlFor="email">Request from (email)</label>
              <input id="email" className="input" type="email" placeholder="friend@example.com"
                value={receiverEmail} onChange={(e) => setReceiverEmail(e.target.value)} required />
            </div>
            <div className="field">
              <label htmlFor="amount">Amount</label>
              <div className="input-money">
                <span>€</span>
                <input id="amount" className="input" type="text" inputMode="decimal" placeholder="0,00"
                  value={amount} onChange={(e) => setAmount(e.target.value.replace(/[^0-9.,]/g, ""))} required />
              </div>
            </div>

            {error && <div className="alert alert-error">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}

            <button type="submit" disabled={loading} className="btn btn-primary btn-block">
              {loading ? "Sending..." : "Send request"}
            </button>
            <Link href="/userdash" className="btn btn-ghost btn-block">Cancel</Link>
          </form>
        </div>
      </main>
    </>
  );
}
