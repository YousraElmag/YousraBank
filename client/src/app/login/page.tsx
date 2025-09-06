"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabase";
import "./page.css";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handelregist = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        return;
      }
      if (data.session) {
        const token = data.session.access_token;
        console.log("User token:", token);
      }
      if (data.user) {
        alert("WELCOME");
        router.push("/userdash");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
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

          {error && (
            <p className="text-red-600 text-sm font-semibold">{error}</p>
          )}

          <button type="submit" disabled={loading} className="">
            {loading ? "Log in..." : "Log in"}
          </button>
        </form>

        <div className="text-center mt-4 text-sm text-gray-700">
          Forget your password?{" "}
          <Link
            href="/restpassword"
            className="text-blue-600 font-medium hover:underline"
          >
            resetpasswod
          </Link>
        </div>
      </div>
    </>
  );
}
