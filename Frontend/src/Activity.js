import React from "react";
import { formatINR, formatSignedINR } from "./formatCurrency";

const activity = [
  { date: "15 Oct 2026", name: "BigBasket", type: "UPI payment", account: "Primary savings ·· 4829", amount: -1842.5, initials: "B", tone: "green" },
  { date: "15 Oct 2026", name: "Salary credited", type: "NEFT credit", account: "Primary savings ·· 4829", amount: 85000, initials: "↗", tone: "blue", incoming: true },
  { date: "14 Oct 2026", name: "Metro QR ticket", type: "UPI payment", account: "Primary savings ·· 4829", amount: -60, initials: "M", tone: "purple" },
  { date: "14 Oct 2026", name: "Chai Point", type: "UPI payment", account: "Primary savings ·· 4829", amount: -145, initials: "C", tone: "orange" },
  { date: "12 Oct 2026", name: "BESCOM electricity", type: "Bill payment · BBPS", account: "Primary savings ·· 4829", amount: -2240, initials: "B", tone: "blue" },
  { date: "10 Oct 2026", name: "Transfer to goal savings", type: "Internal transfer", account: "Goal savings ·· 1073", amount: 5000, initials: "↗", tone: "green", incoming: true },
];

function Activity() {
  return (
    <section className="content-page">
      <div className="content-heading">
        <div><p className="eyebrow">YOUR MONEY</p><h2>Recent activity</h2><p>Keep track of what’s coming in and going out.</p></div>
        <span className="demo-pill">SAMPLE DATA</span>
      </div>
      <div className="panel activity-panel">
        <div className="activity-summary">
          <div><span>Money in this month</span><strong className="summary-positive">{formatSignedINR(90000)}</strong></div>
          <div><span>Money out this month</span><strong>{formatSignedINR(-4287.5)}</strong></div>
          <div><span>Transactions</span><strong>18</strong></div>
        </div>
        <div className="activity-table-wrap">
          <table className="activity-table">
            <thead><tr><th>TRANSACTION</th><th>ACCOUNT</th><th>DATE</th><th className="amount-cell">AMOUNT</th></tr></thead>
            <tbody>{activity.map((item) => (
              <tr key={`${item.date}-${item.name}`}>
                <td><span className="activity-transaction"><span className={`transaction-avatar ${item.tone}`} aria-hidden="true">{item.initials}</span><span><strong>{item.name}</strong><small>{item.type}</small></span></span></td>
                <td>{item.account}</td><td>{item.date}</td>
                <td className={`amount-cell${item.incoming ? " incoming" : ""}`}>{formatSignedINR(item.amount)}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </div>
      <p className="sample-note">All amounts are shown in Indian rupees (INR). This preview uses sample activity; no real transactions are shown or processed.</p>
    </section>
  );
}

export default Activity;
