import Navbar from "./Navbar";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <Navbar />

      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>We are here to help. Get in touch with our team.</p>

        <div className="contact-card">
          <h2>Send Us a Message</h2>

          <form onSubmit={(e) => {
  e.preventDefault();
  alert("Message sent successfully!");
  e.currentTarget.reset();
}}>
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" required />

            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Phone Number</label>
            <input type="tel" placeholder="Enter your phone number" required />

            <label>Subject</label>
            <input type="text" placeholder="Enter subject" required />

            <label>Your Message</label>
            <textarea
              placeholder="Write your message..."
              rows="5"
              required
            />

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;