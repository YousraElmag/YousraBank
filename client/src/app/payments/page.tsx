"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar/Navbar";
import PaymentList, { Payment } from "../components/PaymentList";
import { supabase } from "../lib/supabase";

type Filter = "all" | "in" | "out";

export default function Payments() {
  const router = useRouter();
  const [userId, setUserId] = useState<string>();
  const [payments, setPayments] = useState<Payment[]>([]);
  const [filter, setFilter] = useState<Filter>("all");
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        router.push("/login");
        return;
      }
      setUserId(data.user.id);

      const { data: rows, error } = await supabase
        .from("payments")
        .select(`*, sender:sender_id(first_name, last_name), recipient:recipient_id(first_name, last_name)`)
        .or(`sender_id.eq.${data.user.id},recipient_id.eq.${data.user.id}`)
        .order("created_at", { ascending: false });

      if (error) setError(error.message);
      setPayments((rows as Payment[]) || []);
    }
    load();
  }, [router]);

  const shown = payments.filter((p) =>
    filter === "all" ? true : filter === "out" ? p.sender_id === userId : p.sender_id !== userId
  );

  return (
    <>
      <Navbar />
      <main className="page">
        <div className="page-header">
          <h1>Payments</h1>
          <p>All money you sent and received.</p>
        </div>

        <div className="card">
          <div className="tabs">
            {(["all", "in", "out"] as Filter[]).map((f) => (
              <button key={f} className={filter === f ? "active" : ""} onClick={() => setFilter(f)}>
                {f === "all" ? "All" : f === "in" ? "Received" : "Sent"}
              </button>
            ))}
          </div>
          {error && <div className="alert alert-error">{error}</div>}
          <PaymentList payments={shown} userId={userId} />
        </div>
      </main>
    </>
  );
}
