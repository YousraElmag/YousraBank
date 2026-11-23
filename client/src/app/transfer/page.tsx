"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import { transferMoney } from "../components/transfer";
import { formatMoney } from "../lib/format";

export default function Transfer() {
  const [receverAccount, setReceverAccount] = useState("");
  const [receverEmail, setReceverEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handleTransfer = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const value = Number(amount.replace(",", "."));
    if (!value || value <= 0) {
      setError("Please enter an amount greater than 0");
      return;
    }
    if (!receverAccount && !receverEmail) {
      setError("Please enter an account number or an email");
      return;
    }

    setLoading(true);
    try {
      const result = await transferMoney({
        receverEmail: receverEmail || undefined,
        receverAccount: receverAccount || undefined,
        amount: value,
      });
      setSuccess(`${formatMoney(value)} sent successfully!`);
      setBalance(result.senderBalance);
      setReceverAccount("");
      setReceverEmail("");
      setAmount("");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="page-narrow">
        <div className="page-header">
          <h1>Send money</h1>
          <p>Transfer money instantly to another YousraBank account.</p>
        </div>

        <div className="card">
          <form onSubmit={handleTransfer} className="form">
            <div className="field">
              <label htmlFor="account">Account number</label>
              <input id="account" className="input" type="text" placeholder="YOUS123456"
                value={receverAccount} onChange={(e) => setReceverAccount(e.target.value.toUpperCase())} />
            </div>
            <div className="divider">or</div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" className="input" type="email" placeholder="friend@example.com"
                value={receverEmail} onChange={(e) => setReceverEmail(e.target.value)} />
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
            {success && (
              <div className="alert alert-success">
                {success}
                {balance !== null && <> New balance: <strong>{formatMoney(balance)}</strong></>}
              </div>
            )}

            <button type="submit" disabled={loading} className="btn btn-primary btn-block">
              {loading ? "Sending..." : "Send money"}
            </button>
            <Link href="/userdash" className="btn btn-ghost btn-block">Back to dashboard</Link>
          </form>
        </div>
      </main>
    </>
  );
}
