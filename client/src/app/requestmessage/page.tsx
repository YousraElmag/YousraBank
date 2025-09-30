"use client";
import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { transferMoney } from "../components/transfer";

interface Transaction {
  id: string;
  senderid: string;
  receiverid: string;
  amount: number;
  status: string;
  createdat: string;
  updatedat: string;
  receiver_name: string;
  sender_name: string;
}

export default function RequestMessage() {
  const [user, setUser] = useState<string | null>(null);
  const [requests, setRequests] = useState<Transaction[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const session = await supabase.auth.getSession();
    const userid = session.data.session?.user?.id;

    if (!userid) {
      setError("User not logged in");
      return;
    }

    setUser(userid);
    fetchRequests(userid);
  };

  const fetchRequests = async (userid: string) => {
    const { data, error } = await supabase
      .from<"transaction", Transaction>("transaction")
      .select("*")
      .or(`receiverid.eq.${userid},senderid.eq.${userid}`)
      .order("createdat", { ascending: false });

    if (error) {
      setError(error.message);
      return;
    }

    setRequests(data || []);
  };
  const handleAgree = async (req: Transaction) => {
    setError("");
    try {
      const { data: receiver, error } = await supabase
        .from("users")
        .select("email, bank_account")
        .eq("id", req.receiverid)
        .single();

      if (error || !receiver) {
        setError("Receiver not found");
        return;
      }

      const result = await transferMoney({
        receverEmail: receiver.email,
        receverAccount: receiver.bank_account,
        amount: req.amount,
      });

      console.log("Transfer result:", result);
      await supabase
        .from("transaction")
        .update({ status: "completed" })
        .eq("id", req.id);
      fetchRequests(user!);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleReject = async (req: Transaction) => {
    setError("");
    try {
      await supabase
        .from("transaction")
        .update({ status: "rejected" })
        .eq("id", req.id);

      fetchRequests(user!);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h2>💸 Money Requests</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {requests.length === 0 && <p>No requests found.</p>}

      <ul>
        {requests.map((req) => {
          const isSender = req.senderid === user;
          return (
            <li key={req.id} style={{ marginBottom: "10px" }}>
              <p>
                <strong>{isSender ? "To:" : "From:"}</strong>{" "}
                {isSender ? req.receiver_name : req.sender_name} <br />
                <strong>Amount:</strong> {req.amount} EUR <br />
                <strong>Status:</strong> {req.status} <br />
                <strong>Date:</strong> {new Date(req.createdat).toLocaleString()}
              </p>

              {!isSender && req.status === "pending" && (
                <>
                  <button
                    onClick={() => handleAgree(req)}
                    style={{
                      background: "green",
                      padding: "5px",
                      marginLeft: "5px",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    Agree
                  </button>
                  <button
                    onClick={() => handleReject(req)}
                    style={{
                      background: "red",
                      padding: "5px",
                      marginLeft: "5px",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    Reject
                  </button>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
