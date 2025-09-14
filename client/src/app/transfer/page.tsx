"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "../lib/supabase";
import { User } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid"; 
import "./transfer.css";

export default function Transfer() {
  const [receverAccount, setReceverAccount] = useState("");
  const [receverEmail, setReceverEmail] = useState(""); 
  const [amount, setAmount] = useState<number>(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [balance, setBalance] = useState<number | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

 
  useEffect(() => {
    async function fetchUser() {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    }
    fetchUser();
  }, []);


  const handleTransfer = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if ((!receverAccount && !receverEmail) || !amount || amount <= 0) {
      setError("Please fill all fields correctly");
      return;
    }

    setLoading(true);

    try {
      const session = await supabase.auth.getSession();
      const token = session.data.session?.access_token;
      if (!token) {
        setError("User not logged in");
        setLoading(false);
        return;
      }

      const idempotencyKey = uuidv4();

      const res = await fetch(`https://yousrabank.onrender.com/api/auth/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          receverAccount,
          receverEmail,
          amount,
          idempotencyKey, 
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(data.message || "Transfer completed successfully!");
        setBalance(data.senderBalance);
        setReceverAccount("");
        setReceverEmail("");
        setAmount(0);
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      console.error("Transfer error:", err);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h4>YousraBank</h4>
      <h2>💸 Transfer Money</h2>

      <form onSubmit={handleTransfer}>
        <h2>Send to</h2>
        <input
          type="text"
          placeholder="Receiver Account"
          value={receverAccount}
          onChange={(e) => setReceverAccount(e.target.value)}
        />
        <input
          type="email"
          placeholder="Receiver Email"
          value={receverEmail}
          onChange={(e) => setReceverEmail(e.target.value)}
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
