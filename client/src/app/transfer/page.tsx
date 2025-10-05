'use client'
import React, { useState } from "react";
import { transferMoney } from "../components/transfer";
import './transfer.css';
import Navbar from "../components/Navbar/Navbar";
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
    <>
    <Navbar/>
   
    <div style={{margin:"50px auto",textAlign:"center"}}>
 
   
      <h2 style={{color:"aliceblue",fontSize:"30px",padding:"30px", fontFamily: '__nextjs-Geist Mono',
    textShadow:" 0px 0px 4px white"}}>Transfer Money</h2>
      <form onSubmit={handleTransfer}>
        <input type="text" placeholder="Receiver Account" value={receverAccount} onChange={e => setReceverAccount(e.target.value)} />
      <h4  style={{
    margin: "10px auto",
    color: "aliceblue",
    fontFamily: "cursive",
    fontSize: "23px",
    textShadow: "4px 0px 9px #e5dfdf",
  }}>OR</h4> 
        <input type="email" placeholder="Receiver Email" value={receverEmail} onChange={e => setReceverEmail(e.target.value)} />
 <input
  type="text"
  inputMode="numeric"
  pattern="[0-9]*"
  placeholder="Amount"
  value={amount}
  onChange={e => {
    const value = e.target.value.replace(/\D/g, '');
    setAmount(value === '' ? 0 : Number(value));
  }}
  required
/>
        <button type="submit" disabled={loading}>{loading ? "Processing..." : "Send Money"}</button>
      </form>
     <div style={{ marginTop: "50px", fontFamily: "revert", fontSize: "18px" }}>
  {error && <p style={{ color: "#da2929" ,fontSize:'30px'}}>{error}</p>}
  {success && <p style={{ color: "green" ,fontSize:"30px"}}>{success}</p>}
  {balance !== null && <p style={{marginTop: "20px",
    color: "antiquewhite",
    fontSize: "20px",
    fontFamily:" monospace"}}>Your Balance: {balance} EUR</p>}
</div>
    </div>
     </>
  );
}
