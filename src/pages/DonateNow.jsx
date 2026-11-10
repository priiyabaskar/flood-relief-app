import { useState } from "react";
import Navbar from "./Navbar";
import "./DonateNow.css";

function DonateNow() {
  const [amount, setAmount] = useState("");
  const [payment, setPayment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for supporting flood relief!");
    setAmount("");
    setPayment("");
  };

  return (
    <div className="donate-now-page">
      <Navbar />

      <div className="donate-now-container">
        <h1>Donate Now</h1>
        <p>Your small contribution can save lives.</p>

        <div className="donate-now-card">
          <h2>Choose Donation Amount</h2>

          <div className="amount-options">
            {[100, 500, 1000, 2000].map((value) => (
              <button
                type="button"
                key={value}
                onClick={() => setAmount(String(value))}
                className={amount === String(value) ? "selected" : ""}
              >
                ₹{value}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <label>Enter Amount (₹)</label>
            <input
              type="number"
              placeholder="Enter donation amount"
              min="1"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />

            <label>Payment Method</label>
            <select
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
              required
            >
              <option value="">Select payment method</option>
              <option value="UPI">UPI</option>
              <option value="Card">Debit / Credit Card</option>
              <option value="Net Banking">Net Banking</option>
            </select>

            <button type="submit">Proceed to Donate</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DonateNow;