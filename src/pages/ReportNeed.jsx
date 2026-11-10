import { useState } from "react";
import Navbar from "./Navbar";
import "./ReportNeed.css";

function ReportNeed() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    assistance: "",
    description: "",
  });

 const [successMessage, setSuccessMessage] = useState("");
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requests = JSON.parse(localStorage.getItem("requests")) || [];

    const newRequest = {
      id: Date.now().toString(),
      ...formData,
      status: "Pending",
    };

    localStorage.setItem(
      "requests",
      JSON.stringify([newRequest, ...requests])
    );

setSuccessMessage("Request Submitted Successfully! Your Request ID: " + newRequest.id);
    setFormData({
      name: "",
      phone: "",
      location: "",
      assistance: "",
      description: "",
    });
  };

  return (
    <div className="report-page">
      <Navbar />

      <div className="report-container">
        <h1>Report Your Need</h1>
        <p>Tell us what support you need. We are here to help.</p>
{successMessage && (
  <p className="success-message">{successMessage}</p>
)}
        <form className="report-form" onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Enter your full name" required />

          <label>Phone Number</label>
          <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Enter your phone number" required />

          <label>Location</label>
          <input name="location" value={formData.location} onChange={handleChange} type="text" placeholder="Enter your location" required />

          <label>Type of Assistance</label>
          <select name="assistance" value={formData.assistance} onChange={handleChange} required>
            <option value="">Select assistance type</option>
            <option>Food</option>
            <option>Drinking Water</option>
            <option>Medical Help</option>
            <option>Rescue Support</option>
            <option>Clothes</option>
            <option>Other</option>
          </select>

          <label>Describe Your Need</label>
          <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Explain your situation..." rows="4" required />

          <button type="submit">Submit Request</button>
        </form>
      </div>
    </div>
  );
}

export default ReportNeed;