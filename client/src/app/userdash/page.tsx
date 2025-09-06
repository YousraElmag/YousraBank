"use client";
import React, { useState, useEffect } from "react";
import "./UserDashboard.css";
import Navbar from "../components/Navbar/Navbar";
import { User } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";
import Logout from "../logout/page";

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
        .eq("id", user.id)
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
        .select("*")
        .or(`sender_id.eq.${user.id},recipient_id.eq.${user.id}`)
        .order("created_at", { ascending: false });

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
          <button className="action-card">
            <span className="icon">💸</span>
            <span className="title">Transfer Money</span>
          </button>
          <button className="action-card">
            <span className="icon">💰</span>
            <span className="title">Request Transfer</span>
          </button>
          <div className="action-card balance-card">
            <span className="title">Account Balance</span>
            <span className="amount">${useraccount?.balance || 0}</span>
          </div>
        </div>

        {/* قائمة كل العمليات */}
        <div className="payments">
          <h2>📝 Your Payments</h2>
          <ul>
            {payments.length > 0 ? (
              payments.map((p) => (
                <li key={p.id}>
                  {p.sender_id === user?.id ? (
                    <span>
                      You sent ${p.amount} → {p.recipient_name}
                    </span>
                  ) : (
                    <span>
                      You received ${p.amount} ← {p.sender_name}
                    </span>
                  )}
                </li>
              ))
            ) : (
              <p>No payments yet</p>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
