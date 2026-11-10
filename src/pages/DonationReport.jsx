import Navbar from "./Navbar";
import "./DonationReport.css";

function DonationReport() {
const donations =
  JSON.parse(localStorage.getItem("donations")) || [];

  const total = donations.reduce(
  (sum, item) => sum + Number(item.amount),
  0
);

  return (
    <div className="donation-report-page">
      <Navbar />

      <div className="donation-report-container">
        <h1>Donation Report</h1>
        <p>View the contributions received for flood relief.</p>

        <div className="donation-total">
          <h2>Total Donations</h2>
          <h1>₹{total.toLocaleString("en-IN")}</h1>
        </div>

        <div className="donation-table-card">
          <h2>Recent Donations</h2>
{donations.length === 0 ? (
  <p>No donations available yet.</p>
):(
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Donor Name</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Purpose</th>
                </tr>
              </thead>

              <tbody>
                {donations.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>₹{item.amount.toLocaleString("en-IN")}</td>
                    <td>{item.date}</td>
                    <td>{item.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
)}
        </div>
      </div>
    </div>
  );
}

export default DonationReport;