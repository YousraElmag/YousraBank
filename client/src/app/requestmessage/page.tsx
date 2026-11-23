"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar/Navbar";
import { supabase } from "../lib/supabase";
import { transferMoney } from "../components/transfer";
import { formatDate, formatMoney } from "../lib/format";

interface MoneyRequest {
  id: string;
  senderid: string;   // the person who ASKED for money
  receiverid: string; // the person who should PAY
  amount: number;
  status: string;
  createdat: string;
  receiver_name: string | null;
  sender_name: string | null;
}

type Tab = "received" | "sent";

export default function RequestMessage() {
  const router = useRouter();
  const [userId, setUserId] = useState<string | null>(null);
  const [requests, setRequests] = useState<MoneyRequest[]>([]);
  const [tab, setTab] = useState<Tab>("received");
  const [busyId, setBusyId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const fetchRequests = useCallback(async (id: string) => {
    const { data, error } = await supabase
      .from("transaction")
      .select("*")
      .or(`receiverid.eq.${id},senderid.eq.${id}`)
      .order("createdat", { ascending: false });

    if (error) setError(error.message);
    else setRequests((data as MoneyRequest[]) || []);
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      const id = data.session?.user?.id;
      if (!id) {
        router.push("/login");
        return;
      }
      setUserId(id);
      fetchRequests(id);
    });
  }, [router, fetchRequests]);

  const handleAccept = async (req: MoneyRequest) => {
    setError("");
    setSuccess("");
    setBusyId(req.id);
    try {
      // The person who SENT the request is the one who should RECEIVE the money.
      const { data: requester, error } = await supabase
        .from("users")
        .select("email")
        .eq("id", req.senderid)
        .single();

      if (error || !requester) throw new Error("Requester not found");

      await transferMoney({ receverEmail: requester.email, amount: req.amount });
      await supabase.from("transaction").update({ status: "completed" }).eq("id", req.id);
      setSuccess(`You paid ${formatMoney(req.amount)} to ${req.sender_name ?? "the requester"}.`);
      fetchRequests(userId!);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setBusyId(null);
    }
  };

  const handleReject = async (req: MoneyRequest) => {
    setError("");
    setSuccess("");
    setBusyId(req.id);
    const { error } = await supabase.from("transaction").update({ status: "rejected" }).eq("id", req.id);
    if (error) setError(error.message);
    setBusyId(null);
    fetchRequests(userId!);
  };

  const received = requests.filter((r) => r.receiverid === userId);
  const sent = requests.filter((r) => r.senderid === userId);
  const shown = tab === "received" ? received : sent;
  const pendingCount = received.filter((r) => r.status === "pending").length;

  return (
    <>
      <Navbar />
      <main className="page">
        <div className="page-header">
          <h1>Money requests</h1>
          <p>Pay or decline requests from others, and follow the requests you sent.</p>
        </div>

        <div className="card">
          <div className="tabs">
            <button className={tab === "received" ? "active" : ""} onClick={() => setTab("received")}>
              Received{pendingCount > 0 ? ` (${pendingCount})` : ""}
            </button>
            <button className={tab === "sent" ? "active" : ""} onClick={() => setTab("sent")}>
              Sent
            </button>
          </div>

          {error && <div className="alert alert-error" style={{ marginBottom: 12 }}>{error}</div>}
          {success && <div className="alert alert-success" style={{ marginBottom: 12 }}>{success}</div>}

          {shown.length === 0 ? (
            <div className="empty">
              <div className="icon">✉️</div>
              <p>No requests here yet</p>
            </div>
          ) : (
            <ul className="list">
              {shown.map((req) => {
                const isIncoming = tab === "received";
                const name = (isIncoming ? req.sender_name : req.receiver_name) || "Unknown";
                return (
                  <li key={req.id} className="list-item">
                    <div className="avatar">{name[0]?.toUpperCase()}</div>
                    <div className="list-main">
                      <strong>
                        {isIncoming ? `${name} asks you for` : `You asked ${name} for`} {formatMoney(req.amount)}
                      </strong>
                      <small>
                        {formatDate(req.createdat)} · <span className={`badge badge-${req.status}`}>{req.status}</span>
                      </small>
                    </div>
                    {isIncoming && req.status === "pending" && (
                      <div className="list-actions">
                        <button className="btn btn-danger btn-sm" disabled={busyId === req.id}
                          onClick={() => handleReject(req)}>
                          Decline
                        </button>
                        <button className="btn btn-primary btn-sm" disabled={busyId === req.id}
                          onClick={() => handleAccept(req)}>
                          {busyId === req.id ? "Paying..." : "Pay"}
                        </button>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </main>
    </>
  );
}
