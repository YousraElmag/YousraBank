"use client";
import React, { useState } from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "../lib/supabase";

export default function RequestMoney() {
  const [receiverEmail, setReceiverEmail] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handleTransfer = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); 
    setSuccess("");
    setLoading(true);

    try {
      const session = await supabase.auth.getSession();
      const token = session.data.session?.access_token;
      const senderEmail = session.data.session?.user?.email;

      if (!token || !senderEmail) {
        setError("User not logged in");
        setLoading(false);
        return;
      }

      const idempotencyKey = uuidv4();

      const res = await fetch("http://localhost:5000/api/auth/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          receiverEmail,
    amount,
    idempotencyKey,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(data.message);
        setBalance(data.senderBalance);
        setReceiverEmail("");
        setAmount(0);
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h4>YousraBank</h4>
      <h2>💸 Request Money</h2>

      <form onSubmit={handleTransfer}>
        <h2>Receiver</h2>
        <input
          type="email"
          placeholder="Receiver Email"
          value={receiverEmail}
          onChange={(e) => setReceiverEmail(e.target.value)}
          required
        />

        <h2>Amount</h2>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Processing..." : "Send Money"}
        </button>
        <Link href="/userdash">
          <button type="button">Cancel</button>
        </Link>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      {balance !== null && <p>Your Balance: {balance} EUR</p>}
    </div>
  );
}
