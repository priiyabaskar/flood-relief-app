import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <h2>Flood<span>Relief</span></h2>
      </div>

      <nav className="navbar-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
        <NavLink to="/report" className={({ isActive }) => isActive ? "active" : ""}>Report Need</NavLink>
        <NavLink to="/track" className={({ isActive }) => isActive ? "active" : ""}>Track Request</NavLink>
        <NavLink to="/donate" className={({ isActive }) => isActive ? "active" : ""}>Donate</NavLink>
        <NavLink to="/donation-report" className={({ isActive }) => isActive ? "active" : ""}>Donation Report</NavLink>
        
        <NavLink to="/volunteer" className={({ isActive }) => isActive ? "active" : ""}>Volunteer</NavLink>
       <NavLink
  to="/volunteer-list"
  className={({ isActive }) => isActive ? "active" : ""}
>
  Volunteer List
</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
      </nav>

      <div className="emergency">
        <span>24/7 Emergency</span>
        <strong>112</strong>
      </div>
    </header>
  );
}

export default Navbar;