"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js";
import Navbar from "../components/Navbar/Navbar";
import PaymentList, { Payment } from "../components/PaymentList";
import { supabase } from "../lib/supabase";
import { formatMoney } from "../lib/format";

interface Account {
  first_name: string | null;
  last_name: string | null;
  bank_account: string | null;
  balance: number | null;
}

export default function UserDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [account, setAccount] = useState<Account | null>(null);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data.user) {
        router.push("/login"); // not logged in
        return;
      }
      setUser(data.user);

      const [accountRes, paymentsRes] = await Promise.all([
        supabase.from("users").select("first_name, last_name, bank_account, balance").eq("id", data.user.id).maybeSingle(),
        supabase
          .from("payments")
          .select(`*, sender:sender_id(first_name, last_name), recipient:recipient_id(first_name, last_name)`)
          .or(`sender_id.eq.${data.user.id},recipient_id.eq.${data.user.id}`)
          .order("created_at", { ascending: false })
          .limit(5),
      ]);

      if (accountRes.error) setError(accountRes.error.message);
      else if (!accountRes.data) setError("We could not find your bank account. Please contact support.");
      setAccount(accountRes.data);
      setPayments((paymentsRes.data as Payment[]) || []);
      setLoading(false);
    }
    load();
  }, [router]);

  const firstName = account?.first_name || user?.user_metadata?.firstname || "";

  return (
    <>
      <Navbar />
      <main className="page">
        <div className="page-header">
          <h1>{loading ? "Loading..." : `Hello${firstName ? `, ${firstName}` : ""} 👋`}</h1>
          <p>Here is an overview of your account.</p>
        </div>

        {error && <div className="alert alert-error" style={{ marginBottom: 20 }}>{error}</div>}

        <div className="dash-grid">
          <div className="card balance-card">
            <div className="balance-label">Available balance</div>
            <div className="balance-amount">{formatMoney(account?.balance)}</div>
            <div className="account-row">
              <div>
                <span>Account number</span>
                <strong>{account?.bank_account || "—"}</strong>
              </div>
              <div>
                <span>Account holder</span>
                <strong>{account ? `${account.first_name ?? ""} ${account.last_name ?? ""}` : "—"}</strong>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-title">Quick actions</h2>
            <div className="actions">
              <Link href="/transfer" className="action">
                <span className="icon">💸</span>
                <strong>Send money</strong>
                <small>To email or account</small>
              </Link>
              <Link href="/requestmoney" className="action">
                <span className="icon">💰</span>
                <strong>Request money</strong>
                <small>Ask someone to pay</small>
              </Link>
              <Link href="/requestmessage" className="action">
                <span className="icon">✉️</span>
                <strong>Requests</strong>
                <small>Pay or decline</small>
              </Link>
              <Link href="/payments" className="action">
                <span className="icon">🧾</span>
                <strong>All payments</strong>
                <small>Full history</small>
              </Link>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Recent activity</h2>
            <Link href="/payments">View all</Link>
          </div>
          <PaymentList payments={payments} userId={user?.id} />
        </div>
      </main>
    </>
  );
}
