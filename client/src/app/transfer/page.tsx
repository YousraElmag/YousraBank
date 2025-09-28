'use client'
import React, { useState } from "react";
import { transferMoney } from "../components/transfer";

export default function Transfer() {
  const [receverAccount, setReceverAccount] = useState("");
  const [receverEmail, setReceverEmail] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handleTransfer = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); setSuccess("");
    setLoading(true);

    try {
      const result = await transferMoney({
        receverEmail,
        receverAccount,
        amount
      });

      setSuccess(result.message);
      setBalance(result.senderBalance);
      setReceverAccount("");
      setReceverEmail("");
      setAmount(0);

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Transfer Money</h2>
      <form onSubmit={handleTransfer}>
        <input type="text" placeholder="Receiver Account" value={receverAccount} onChange={e => setReceverAccount(e.target.value)} />
        <input type="email" placeholder="Receiver Email" value={receverEmail} onChange={e => setReceverEmail(e.target.value)} />
        <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(Number(e.target.value))} required />
        <button type="submit" disabled={loading}>{loading ? "Processing..." : "Send Money"}</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      {balance !== null && <p>Your Balance: {balance} EUR</p>}
    </div>
  );
}
