"use client";
import { useState } from "react";
import { supabase } from "../lib/supabase";
import "./update.css";
import Navbar from "../components/Navbar/Navbar";
import { useRouter } from "next/navigation";

export default function UpdatePassword() {
  const [password, setPassword] = useState("");
 const router = useRouter();
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.updateUser({ password });

    if (error) {
      alert(error.message);
    } else {
      alert("Password updated successfully!");
      setPassword("");
      router.push('/login')
    }
  };

  return (
    <>
      <Navbar />
      <div className="update-password-container">
        <form className="update-password-form" onSubmit={handleUpdate}>
          <h2>Update Password</h2>
          <input
            type="password"
            placeholder="New password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Update Password</button>
        </form>
      </div>
    </>
  );
}
