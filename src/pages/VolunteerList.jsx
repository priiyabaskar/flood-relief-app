import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./VolunteerList.css";

function VolunteerList() {
  const [volunteers, setVolunteers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const savedVolunteers =
      JSON.parse(localStorage.getItem("volunteers")) || [];
    setVolunteers(savedVolunteers);
  }, []);

  return (
    <div className="volunteer-list-page">
      <Navbar />

      <div className="volunteer-list-container">
        <h1>Registered Volunteers</h1>
        <h3>Total Volunteers: {volunteers.length}</h3>

        <input
          type="text"
          placeholder="Search by name, location or support..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {volunteers.length === 0 ? (
          <p>No volunteers registered yet.</p>
        ) : (
          <div className="volunteer-list">
            {volunteers.filter((volunteer) =>
              `${volunteer.name} ${volunteer.location} ${volunteer.support}`
                .toLowerCase()
                .includes(search.toLowerCase())
            ).length === 0 ? (
              <p>No volunteers found.</p>
            ) : (
              volunteers
                .filter((volunteer) =>
                  `${volunteer.name} ${volunteer.location} ${volunteer.support}`
                    .toLowerCase()
                    .includes(search.toLowerCase())
                )
                .map((volunteer) => (
                  <div className="volunteer-item" key={volunteer.id}>
                    <h3>{volunteer.name}</h3>
                    <p>Email: {volunteer.email}</p>
                    <p>Phone: {volunteer.phone}</p>
                    <p>Location: {volunteer.location}</p>
                    <p>Support: {volunteer.support}</p>

                    <button
                      onClick={() => {
                        const updatedVolunteers = volunteers.filter(
                          (item) => item.id !== volunteer.id
                        );

                        localStorage.setItem(
                          "volunteers",
                          JSON.stringify(updatedVolunteers)
                        );

                        setVolunteers(updatedVolunteers);
                        window.dispatchEvent(
                          new Event("volunteerUpdated")
                        );
                      }}
                    >
                      Delete
                    </button>
                  </div>
                ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default VolunteerList;