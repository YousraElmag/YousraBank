"use client";
import React from "react";
import './UserDashboard.css';
import Navbar from "../components/Navbar/Navbar";

export default function UserDashboard() {
  return (
    <>
      <Navbar/>
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div>
          <h1>sara bebo</h1>
          <p>Account #: 1234567890</p>
        </div>
        <button>Log Out</button>
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
          <span className="amount">$12,345.67</span>
        </div>
      </div>
      <div className="payment-history">
        <h2>📝 Recent Payments</h2>
        <ul>
          {Array.from({ length: 5 }).map((_, i) => (
            <li key={i}>
              <span>Payment #{i + 1}</span>
              <span>$123.45</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
}
