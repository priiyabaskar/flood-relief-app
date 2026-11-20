import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Home.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Footer.css";

function Home() {
  const [peopleHelped, setPeopleHelped] = useState(0);
  const [affectedAreas, setAffectedAreas] = useState(0);
  const [totalDonations, setTotalDonations] = useState(0);
  const [totalVolunteers, setTotalVolunteers] = useState(0);
  const [needType, setNeedType] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const requests =
      JSON.parse(localStorage.getItem("requests")) || [];

    const donations =
      JSON.parse(localStorage.getItem("donations")) || [];

    const updateVolunteerCount = () => {
  const volunteers =
    JSON.parse(localStorage.getItem("volunteers")) || [];

  setTotalVolunteers(volunteers.length);
};

updateVolunteerCount();

window.addEventListener("volunteerUpdated", updateVolunteerCount);  

    setPeopleHelped(requests.length);

    const locations = [
      ...new Set(
        requests
          .map((item) =>
            item.formData?.location || item.location || ""
          )
          .filter(Boolean)
      ),
    ];

    setAffectedAreas(locations.length);

    const total = donations.reduce(
      (sum, item) => sum + Number(item.amount || 0),
      0
    );

    setTotalDonations(total);
  return () => {
  window.removeEventListener(
    "volunteerUpdated",
    updateVolunteerCount
  );
};
}, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!needType || !location.trim() || !description.trim()) {
      alert("Please fill all fields");
      return;
    }

    const oldRequests =
      JSON.parse(localStorage.getItem("requests")) || [];

    const newRequest = {
      id: Date.now().toString(),
      formData: {
        name: "Home Page User",
        phone: "",
        location: location,
        assistance: needType,
        description: description,
      },
      status: "Pending",
    };

    localStorage.setItem(
      "requests",
      JSON.stringify([newRequest, ...oldRequests])
    );

    setSuccessMessage(
      "Request Submitted Successfully! Your Request ID: " +
        newRequest.id
    );

    setPeopleHelped(oldRequests.length + 1);

    const updatedLocations = [
      ...new Set([
        ...oldRequests.map((item) =>
          item.formData?.location || item.location || ""
        ),
        location,
      ].filter(Boolean)),
    ];

    setAffectedAreas(updatedLocations.length);

    setNeedType("");
    setLocation("");
    setDescription("");
  };

  return (
    <div className="home-page">
      <Navbar />

      <section className="home-hero">
        <div className="hero-content">
          <h1>
            Flood Relief
            <span>Needs Board</span>
          </h1>

          <h3>Help • Support • Rebuild</h3>

          <p>Together, we can overcome the flood! 💙</p>

          <div className="hero-buttons">
            <Link to="/report" className="primary-btn">
              Request Help
            </Link>

            <Link to="/donate" className="secondary-btn">
              Donate Now
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1547683905-f686c993aae5?w=900"
            alt="Flood rescue support"
          />
        </div>

        <div className="request-card">
          <h2>📢 Request Assistance</h2>
          <p>Let us know your need</p>

          {successMessage && (
            <p className="success-message">
              {successMessage}
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <select
              value={needType}
              onChange={(e) => setNeedType(e.target.value)}
              required
            >
              <option value="">Select Type</option>
              <option value="Food">Food</option>
              <option value="Water">Water</option>
              <option value="Medical Help">Medical Help</option>
              <option value="Rescue">Rescue</option>
              <option value="Shelter">Shelter</option>
            </select>

            <input
              type="text"
              placeholder="📍 Your Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />

            <textarea
              placeholder="Describe your need"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            <button type="submit" className="submit-btn">
              Submit Request
            </button>
          </form>
        </div>
      </section>

      <section className="stats-section">
        <div className="stat-card">
          <h2>👥</h2>
          <h3>{peopleHelped}</h3>
          <p>People Helped</p>
        </div>

        <div className="stat-card">
          <h2>🏠</h2>
          <h3>{affectedAreas}</h3>
          <p>Affected Areas</p>
        </div>

        <div className="stat-card">
          <h2>❤️</h2>
          <h3>₹ {totalDonations.toLocaleString("en-IN")}</h3>
          <p>Donations Received</p>
        </div>

        <div className="stat-card">
          <h2>🙋</h2>
          <h3>{totalVolunteers}</h3>
          <p>Volunteers</p>
        </div>
      </section>

      <section className="services-section">
        <h2>💛 Our Services</h2>

        <div className="services-grid">
          <Link to="/report" className="service-card">
            <span>❤️</span>
            <h3>Request Relief Help</h3>
          </Link>

          <Link to="/donate" className="service-card">
            <span>🎁</span>
            <h3>Donate Now</h3>
          </Link>

          <Link to="/volunteer" className="service-card">
            <span>👥</span>
            <h3>Volunteer Join</h3>
          </Link>

          <Link to="/track" className="service-card">
            <span>📍</span>
            <h3>Track Request</h3>
          </Link>

          <Link to="/donation-report" className="service-card">
            <span>📋</span>
            <h3>View Updates</h3>
          </Link>
        </div>
      </section>

      <section className="bottom-sections">
        <div className="card">
          <h2>💡 Innovation Feature</h2>
          <h3>Smart Relief Tracker</h3>
          <p>
            Track your request in real-time with smart updates!
          </p>
          <Link to="/track">Track Now →</Link>
        </div>

        <div className="updates-card">
          <h2>🔔 Recent Updates</h2>
          <p>🚑 Relief Camp Opened in Chennai</p>
          <p>📦 More Food Supplies Arrived</p>
          <p>🏥 Medical Camp Started</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;