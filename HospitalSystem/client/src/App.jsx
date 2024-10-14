import React from "react";
import { Button } from "./components/ui/button";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/pages/Navbar";
import Home from "./components/pages/Home";
import Admin from "./components/pages/Admin";
import AddPatient from "./components/ui/AddPatient";
import "./index.css";
import AddAppointment from "./components/ui/AddAppointment";
function App() {
  return (
    <>
      <Router basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/register-patient" element={<AddPatient />} />
          <Route path="/make-appointment" element={<AddAppointment />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
