import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <h2>Flood<span>Relief</span></h2>
      </div>

      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/report">Report Need</Link>
        <Link to="/track">Track Request</Link>
        <Link to="/donate">Donate</Link>
        <Link to="/donation-report">Donation Report</Link>
        <Link to="/volunteer">Volunteer</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="emergency">
        <span>24/7 Emergency</span>
        <strong>112</strong>
      </div>
    </header>
  );
}

export default Navbar;