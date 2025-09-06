"use client";
import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { User } from "@supabase/supabase-js";
export default function Transfer() {
  const [receverAccount, setReceverAccount] = useState("");
 const [amount, setAmount] = useState<number>(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [balance, setBalance] = useState<number | null>(null);
const [user, setUser] = useState<User | null>(null);
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

    if (!receverAccount || !amount || amount <= 0) {
      setError("Please fill all fields correctly");
      return;
    }

    try {
      const token = (await supabase.auth.getSession()).data.session
        ?.access_token;
      if (!token) {
        setError("User not logged in");
        return;
      }

      const res = await fetch("https://yousrabank.onrender.com/api/auth/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ receverAccount, amount }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess("Transfer completed successfully!");
        setBalance(data.senderBalance);
        setReceverAccount("");
        setAmount("");
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch  {
      setError("Something went wrong");
    }
  };

  return (
    <div className="container">
      <h2>💸 Transfer Money</h2>
      {balance !== null && <p>Your current balance: ${balance}</p>}
      <form onSubmit={handleTransfer}>
        <input
          type="text"
          placeholder="Receiver Account"
          value={receverAccount}
          onChange={(e) => setReceverAccount(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
          required
        />
        <button type="submit">Send Money</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
}
