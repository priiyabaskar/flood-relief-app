import Navbar from "./Navbar";
import "./Volunteer.css";

function Volunteer() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newVolunteer = {
      id: Date.now(),
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      location: formData.get("location"),
      support: formData.get("support"),
    };

    const oldVolunteers =
      JSON.parse(localStorage.getItem("volunteers")) || [];

    localStorage.setItem(
      "volunteers",
      JSON.stringify([newVolunteer, ...oldVolunteers])
    );
    window.dispatchEvent(new Event("volunteerUpdated"));

    alert("Registration Successful!");

    e.currentTarget.reset();
  };

  return (
    <div className="volunteer-page">
      <Navbar />

      <div className="volunteer-container">
        <h1>Become a Volunteer</h1>
        <p>Join us and help flood-affected communities.</p>

        <div className="volunteer-card">
          <h2>Volunteer Registration</h2>

          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />

            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              required
            />

            <label>Location</label>
            <input
              type="text"
              name="location"
              placeholder="Enter your location"
              required
            />

            <label>Area of Support</label>
            <select name="support" required defaultValue="">
              <option value="" disabled>Select support area</option>
              <option value="Food Distribution">Food Distribution</option>
              <option value="Medical Support">Medical Support</option>
              <option value="Rescue Support">Rescue Support</option>
              <option value="Clothes Distribution">Clothes Distribution</option>
              <option value="Other">Other</option>
            </select>

            <button type="submit">Register Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Volunteer;