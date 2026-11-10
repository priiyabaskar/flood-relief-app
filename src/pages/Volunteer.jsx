import Navbar from "./Navbar";
import "./Volunteer.css";

function Volunteer() {
  return (
    <div className="volunteer-page">
      <Navbar />

      <div className="volunteer-container">
        <h1>Become a Volunteer</h1>
        <p>Join us and help flood-affected communities.</p>

        <div className="volunteer-card">
          <h2>Volunteer Registration</h2>

          <form onSubmit={(e) => {
  e.preventDefault();
  alert("Registration Successful!");
}}>
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" required />

            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Phone Number</label>
            <input type="tel" placeholder="Enter your phone number" required />

            <label>Location</label>
            <input type="text" placeholder="Enter your location" required />

            <label>Area of Support</label>
            <select required defaultValue="">
              <option value="" disabled>Select support area</option>
              <option>Food Distribution</option>
              <option>Medical Support</option>
              <option>Rescue Support</option>
              <option>Clothes Distribution</option>
              <option>Other</option>
            </select>

            <button type="submit">Register Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Volunteer;