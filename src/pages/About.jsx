import Navbar from "./Navbar";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <Navbar />

      <section className="about-container">
        <h1>About Our Website</h1>

        <p className="about-subtitle">
          Connecting People, Saving Lives, Supporting Communities.
        </p>

        <div className="about-content">
          <h2>About Flood Relief</h2>
          <p>
            Flood Relief is an online platform designed to help people
            affected by floods. It connects people who need emergency
            assistance with donors and volunteers who are ready to help.
          </p>

          <h2>Purpose of Our Website</h2>
          <p>
            The main purpose of this website is to provide quick support
            during flood emergencies. People can report their needs,
            request assistance, donate essential items and volunteer
            to help affected communities.
          </p>

          <h2>How It Works</h2>
          <p>
            People affected by floods can submit their requirements
            through the Report Need page. Donors can contribute
            resources, and volunteers can register to provide support.
          </p>

          <h2>Our Services</h2>
          <p>
            We provide emergency assistance requests, donation support,
            volunteer registration and contact information to make
            flood relief activities easier.
          </p>

          <h2>Our Goal</h2>
          <p>
            Our goal is to create a reliable platform that brings
            communities together and helps flood-affected people
            receive the support they need.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;