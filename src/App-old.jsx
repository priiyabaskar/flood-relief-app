import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">🏠</span>
          <div>
            <h2>Flood Relief<br />Needs Board</h2>
            <p>Together We Stand ❤️</p>
          </div>
        </div>

        <div className="nav-links">
          <a className="active" href="#home">🏠 Home</a>
          <a href="#about">ℹ️ About</a>
          <a href="#report">📋 Report Need</a>
          <a href="#donate">💙 Donate</a>
          <a href="#volunteer">👥 Volunteer</a>
          <a href="#contact">✉️ Contact</a>
        </div>

        <div className="hotline">
          📞 Emergency Hotline
          <strong>112</strong>
          <small>24x7 Support</small>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>
            Flood Relief<br />
            <span>Needs Board</span>
          </h1>
          <h3>Help • Support • Rebuild</h3>
          <p>Together, we can<br />Overcome the Flood! 💙</p>
          <div className="hero-buttons">
            <a href="#report">Request Help</a>
            <a href="#donate">Donate Now</a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1547683905-f686c993aae5?w=900"
            alt="Flood rescue support"
          />
        </div>

        <div className="request-card">
          <h2>📣 Request Assistance</h2>
          <p>Let us know your need</p>
          <select defaultValue="">
            <option value="" disabled>Select Type</option>
            <option>Food</option>
            <option>Water</option>
            <option>Medicine</option>
            <option>Rescue</option>
          </select>
          <input placeholder="📍 Your Location" />
          <textarea placeholder="Description" rows="2" />
          <button>➤ Submit Request</button>
        </div>
      </section>

      {/* Statistics */}
      <section className="stats">
        <div className="stat-card">👥<p>People Helped</p><h2>1,25,000+</h2><small>And Counting...</small></div>
        <div className="stat-card">🏠<p>Affected Areas</p><h2>120+</h2><small>Districts</small></div>
        <div className="stat-card">❤️<p>Donations Received</p><h2>₹ 2.5 Cr+</h2><small>For Relief</small></div>
        <div className="stat-card">🙌<p>Volunteers</p><h2>50,000+</h2><small>On Ground</small></div>
      </section>

      {/* Services */}
      <section className="services">
        <h2>💛 Our Services</h2>
        <div className="service-grid">
          <a href="#report">❤️<span>Request<br />Relief Help</span></a>
          <a href="#donate">🎁<span>Donate<br />Now</span></a>
          <a href="#volunteer">👥<span>Volunteer<br />Join</span></a>
          <a href="#track">📍<span>Track<br />Request</span></a>
          <a href="#updates">📋<span>View<br />Updates</span></a>
        </div>
      </section>

      {/* Innovation */}
      <div className="bottom-sections">
        <div className="innovation">
          <h2>💡 Innovation Feature</h2>
          <h3>Smart Relief Tracker</h3>
          <p>Track your request in real-time<br />with AI-powered updates!</p>
          <a href="#track">Track Now →</a>
        </div>
        <div className="tracker-icon">📱📍</div>
      

      {/* Recent Updates */}
      <section className="updates" id="updates">
        <h2>🔔 Recent Updates</h2>
        <div className="update-item">🚑 Relief Camp Opened in Chennai <span>NEW</span></div>
        <div className="update-item">🍱 More Food Supplies Arrived</div>
        <div className="update-item">🏥 Medical Camp Started</div>
      </section>
        </div>
      {/* Footer */}
      <footer id="contact">
        <h2>🤝 Help Today – Hope Tomorrow</h2>
        <h2>Let's Rebuild Lives... Together 💙</h2>
        <a href="#contact">📞 Contact Us</a>
        <p>© 2026 Flood Relief Needs Board. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;