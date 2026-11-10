import { Link } from "react-router-dom";
import"./Home.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Footer.css";
function Home() {
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

          <select defaultValue="">
            <option value="" disabled>Select Type</option>
            <option>Food</option>
            <option>Water</option>
            <option>Medical Help</option>
            <option>Rescue</option>
            <option>Shelter</option>
          </select>

          <input type="text" placeholder="📍 Your Location" />

          <textarea placeholder="Describe your need"></textarea>

          <Link to="/report" className="submit-btn">
            Submit Request
          </Link>
        </div>
      </section>

      <section className="stats-section">
        <div className="stat-card">
          <h2>👥</h2>
          <h3>1,25,000+</h3>
          <p>People Helped</p>
        </div>

        <div className="stat-card">
          <h2>🏠</h2>
          <h3>120+</h3>
          <p>Affected Areas</p>
        </div>

        <div className="stat-card">
          <h2>❤️</h2>
          <h3>₹ 2.5 Cr+</h3>
          <p>Donations Received</p>
        </div>

        <div className="stat-card">
          <h2>🙋</h2>
          <h3>50,000+</h3>
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
        <div className="innovation-card">
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
    </div>
  );
}

export default Home;