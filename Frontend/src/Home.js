import React from "react";
import { Link } from "react-router";
import { formatINR, formatSignedINR } from "./formatCurrency";

const transactions = [
  { name: "BigBasket", category: "UPI · Today, 10:42 AM", amount: -1842.5, initials: "B", tone: "green" },
  { name: "Salary credited", category: "NEFT · Today, 8:15 AM", amount: 85000, initials: "↗", tone: "blue", incoming: true },
  { name: "Metro QR ticket", category: "UPI · Yesterday", amount: -60, initials: "M", tone: "purple" },
  { name: "Chai Point", category: "UPI · Yesterday", amount: -145, initials: "C", tone: "orange" },
];

function Home() {
  const today = new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "Asia/Kolkata",
  }).format(new Date()).toUpperCase();

  return (
    <div className="dashboard-page">
      <section className="welcome-row">
        <div>
          <p className="eyebrow">{today}</p>
          <h2>Namaste, Arjun <span aria-hidden="true">✦</span></h2>
          <p className="welcome-copy">Here’s a clear view of your money today.</p>
        </div>
        <Link className="text-link" to="/activity">View all activity <span aria-hidden="true">→</span></Link>
      </section>

      <section className="dashboard-grid" aria-label="Account overview">
        <article className="balance-card">
          <div className="balance-card-top">
            <span className="balance-label">AVAILABLE BALANCE</span>
            <span className="balance-menu" aria-hidden="true">•••</span>
          </div>
          <p className="balance-amount">{formatINR(24680.5)}</p>
          <div className="balance-card-bottom">
            <span>Primary savings <span className="account-number">•• 4829</span></span>
            <span className="balance-change"><span aria-hidden="true">↗</span> 2.4% this month</span>
          </div>
          <div className="balance-decoration" aria-hidden="true" />
        </article>

        <article className="metric-card">
          <div className="metric-top"><span className="metric-icon savings-icon" aria-hidden="true">₹</span><span className="metric-period">THIS MONTH</span></div>
          <p className="metric-label">Savings balance</p>
          <p className="metric-value">{formatINR(8240)}</p>
          <p className="metric-note"><span>↑ 5.8%</span> from last month</p>
        </article>

        <article className="metric-card">
          <div className="metric-top"><span className="metric-icon spending-icon" aria-hidden="true">↗</span><span className="metric-period">THIS MONTH</span></div>
          <p className="metric-label">Monthly spending</p>
          <p className="metric-value">{formatINR(4287.5)}</p>
          <p className="metric-note"><span className="muted-note">On track</span> with your budget</p>
        </article>
      </section>

      <section className="dashboard-lower">
        <article className="panel transactions-panel">
          <div className="panel-heading">
            <div><p className="eyebrow">YOUR MONEY</p><h3>Recent activity</h3></div>
            <Link className="panel-link" to="/activity">See all <span aria-hidden="true">→</span></Link>
          </div>
          <div className="transaction-list">
            {transactions.map((transaction) => (
              <div className="transaction-row" key={transaction.name}>
                <span className={`transaction-avatar ${transaction.tone}`} aria-hidden="true">{transaction.initials}</span>
                <span className="transaction-description"><strong>{transaction.name}</strong><small>{transaction.category}</small></span>
                <strong className={`transaction-amount${transaction.incoming ? " incoming" : ""}`}>{formatSignedINR(transaction.amount)}</strong>
              </div>
            ))}
          </div>
        </article>

        <aside className="right-column">
          <article className="panel accounts-panel">
            <div className="panel-heading compact-heading">
              <div><p className="eyebrow">AT A GLANCE</p><h3>Your accounts</h3></div>
            </div>
            <div className="account-row">
              <span className="account-icon checking-icon" aria-hidden="true">S</span>
              <span className="account-description"><strong>Primary savings</strong><small>•••• 4829</small></span>
              <strong>{formatINR(24680.5)}</strong>
            </div>
            <div className="account-row">
              <span className="account-icon savings-icon" aria-hidden="true">S</span>
              <span className="account-description"><strong>Goal savings</strong><small>•••• 1073</small></span>
              <strong>{formatINR(8240)}</strong>
            </div>
            <Link className="accounts-link" to="/about">Explore VaultBank <span aria-hidden="true">→</span></Link>
          </article>

          <article className="security-card">
            <span className="security-symbol" aria-hidden="true">✓</span>
            <div><strong>Your account is protected</strong><p>Security checkup complete. You’re all set.</p></div>
          </article>
        </aside>
      </section>
    </div>
  );
}

export default Home;
