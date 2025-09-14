"use client";
import React, { useState, useEffect } from "react";
import "./UserDashboard.css";
import Navbar from "../components/Navbar/Navbar";
import { User } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";
import Logout from "../logout/page";
import Link from "next/link";

export default function UserDashboard() {
  const [user, setUser] = useState<User | null>(null);
const [useraccount, setUseraccount] = useState<any | null>(null);
const [payments, setPayments] = useState<any[]>([]);

  useEffect(() => {
    async function fetchUser() {
      const { data, error } = await supabase.auth.getUser();
      if (error) return;
      setUser(data.user);
    }
    fetchUser();
  }, []);

  useEffect(() => {
    if (!user) return;

    async function fetchUserTable() {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", user!.id)
        .single();

      if (error) return;
      setUseraccount(data);
    }

    fetchUserTable();
  }, [user]);

  useEffect(() => {
    if (!user) return;

    async function fetchUserPayments() {
      const { data, error } = await supabase
        .from("payments")
        .select(`
          *,
          sender:sender_id(id, first_name, last_name),
          recipient:recipient_id(id, first_name, last_name)
        `)
        .or(`sender_id.eq.${user!.id},recipient_id.eq.${user!.id}`)
        .order("created_at", { ascending: false })
        .limit(5);

      if (error) return console.error(error);
      setPayments(data || []);
    }

    fetchUserPayments();
  }, [user]);

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <header className="dashboard-header">
          <div>
            <h1>{user?.email}</h1>
            <p>Account Number: {useraccount?.bank_account || "N/A"}</p>
            <p>
              Hello {useraccount?.first_name} {useraccount?.last_name}
            </p>
          </div>
          <Logout />
        </header>

        <div className="dashboard-actions">
         <Link href='/transfer'><button className="action-card">
            <span className="icon">💸</span>
         <span className="title">Transfer Money</span>
          </button></Link> 
          <Link href='/request'>
          <button className="action-card">
            <span className="icon">💰</span>
            <span className="title">Request Transfer</span>
          </button></Link>
          <div className="action-card balance-card">
            <span className="title">Account Balance</span>
            <span className="amount">${useraccount?.balance || 0}</span>
          </div>
        </div>

        <div className="payments">
          <h2>📝 Your Payments</h2>
          <ul>
         {payments.length > 0 ? (
  <>
    {payments
      .filter((p) => p.amount > 0)
      .map((p) => (
        <li key={p.id}>
          {p.sender_id === user?.id ? (
            <span style={{ color: "red" }}>
              -${p.amount} → {p.recipient.first_name} {p.recipient.last_name}
            </span>
          ) : (
            <span style={{ color: "green" }}>
              +${p.amount} ← {p.sender.first_name} {p.sender.last_name}
            </span>
          )}
        </li>
      ))}
    <Link href="/payments">
      <button className="allpaymentsbutton">Show all payments</button>
    </Link>
  </>
) : (
  <p>No payments yet</p>
)}
          </ul>

        </div>
      </div>
    </>
  );
}
