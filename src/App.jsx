import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ReportNeed from "./pages/ReportNeed";
import About from "./pages/About";
import Donate from "./pages/Donate";
import TrackRequest from "./pages/TrackRequest";
import Volunteer from "./pages/volunteer";
import DonateNow from "./pages/DonateNow";
import Contact from "./pages/Contact";
import DonationReport from "./pages/DonationReport";
import VolunteerList from "./pages/VolunteerList";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<ReportNeed />} />
        <Route path="/donate-now" element={<DonateNow />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/track" element={<TrackRequest />} />
        <Route path="/Volunteer" element={<Volunteer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donation-report" element={<DonationReport />} />
        <Route path="/volunteer-list" element={<VolunteerList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;