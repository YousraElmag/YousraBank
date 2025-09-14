"use client";
import { useState } from "react";
import "./rest.css";
import Navbar from "../components/Navbar/Navbar";
export default function ResetPassword() {
  const [email, setEmail] = useState("");

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `https://yousrabank.onrender.com/api/auth/reset-password`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        },
      );

      const data = await res.json();

      if (res.ok) {
        alert("Check your email to reset your password");
        setEmail("");
      } else {
        alert(data.error || "Something went wrong");
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <Navbar />
      <div className="reset-password-container">
        <h3>Recover Your Password</h3>
        <p>You will receive an email to reset your password</p>
        <form className="reset-password-form" onSubmit={handleReset}>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}
