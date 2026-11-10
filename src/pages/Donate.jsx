import { useState } from "react";
import Navbar from "./Navbar";
import "./Donate.css";

function Donate() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    payment: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const oldDonations =
    JSON.parse(localStorage.getItem("donations")) || [];

  const newDonation = {
    id: Date.now(),
    name: formData.name,
    amount: Number(formData.amount),
    date: new Date().toLocaleDateString("en-IN"),
    purpose: "Flood Relief",
  };

  localStorage.setItem(
    "donations",
    JSON.stringify([newDonation, ...oldDonations])
  );

  alert("Thank you for your donation!");

  setFormData({
    name: "",
    email: "",
    amount: "",
    payment: "",
  });
};

  return (
    <div className="donate-page">
      <Navbar />

      <main className="donate-container">
        <h1>Support Flood Relief</h1>

        <p className="donate-description">
          Your contribution can help families affected by floods.
          Every donation makes a difference.
        </p>

        <div className="donate-form-card">
          <h2>Make a Donation</h2>

          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Donation Amount (₹)</label>
            <input
              type="number"
              name="amount"
              placeholder="Enter donation amount"
              min="1"
              value={formData.amount}
              onChange={handleChange}
              required
            />

            <label>Payment Method</label>
            <select
              name="payment"
              value={formData.payment}
              onChange={handleChange}
              required
            >
              <option value="">Select payment method</option>
              <option value="UPI">UPI</option>
              <option value="Card">Debit / Credit Card</option>
              <option value="Net Banking">Net Banking</option>
            </select>

            <button type="submit">Donate Now</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Donate;