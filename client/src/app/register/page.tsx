"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Link from "next/link";

import "./page.css";
export default function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
 

  const handelregist = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const res = await fetch(`https://yousrabank.onrender.com/api/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password, firstname, lastname }),
        },
      );

      const data = await res.json();

      if (res.ok) {
        setMessage("Check your email for confirmation");
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      setError("Failed to register");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h3 className="text-center text-2xl font-bold mb-5 text-black">
          YOUSRABANK
        </h3>

        <form onSubmit={handelregist} className="registform">
          <input
            type="text"
            placeholder="First-Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
            className=""
          />
          <input
            type="text"
            placeholder="Last-Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
            className=""
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className=""
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className=""
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
            className=""
          />

          {error && (
            <p className="text-red-600 text-sm font-semibold">{error}</p>
          )}
          {message && (
            <p className="text-green-600 text-sm font-semibold mt-2">
              {message}
            </p>
          )}
          <button type="submit" disabled={loading} className="">
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="text-center mt-4 text-sm text-gray-700">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}
