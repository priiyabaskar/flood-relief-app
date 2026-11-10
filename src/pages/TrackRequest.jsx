import { useState } from "react";
import Navbar from "./Navbar";
import "./TrackRequest.css";

function TrackRequest() {
  const [requestId, setRequestId] = useState("");
  const [phone, setPhone] = useState("");
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const requests = JSON.parse(localStorage.getItem("requests")) || [];

    const found = requests.find(
      (item) =>
        item.id === requestId.trim() &&
        item.phone === phone.trim()
    );

    if (found) {
      setResult(found);
      setMessage("");
    } else {
      setResult(null);
      setMessage("Request not found. Please check your Request ID and phone number.");
    }
  };

  return (
    <div className="track-page">
      <Navbar />

      <div className="track-container">
        <h1>Track Your Request</h1>
        <p>Check the status of your flood relief assistance request.</p>

        <div className="track-card">
          <h2>Request Status</h2>

          <form onSubmit={handleSubmit}>
            <label>Request ID</label>
            <input
              type="text"
              placeholder="Enter your Request ID"
              value={requestId}
              onChange={(e) => setRequestId(e.target.value)}
              required
            />

            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <button type="submit">Track Request</button>
          </form>

          {message && <p>{message}</p>}

          {result && (
            <div>
              <h3>Request Details</h3>
              <p>Name: {result.name}</p>
              <p>Location: {result.location}</p>
              <p>Assistance: {result.assistance}</p>
              <p>Status: {result.status}</p>
              <p>Request ID: {result.id}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TrackRequest;