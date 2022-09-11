import "./App.css";
import { Routes, Route } from "react-router-dom";
import Onboarding from "./components/onboarding";
import Dashboard from "./components/dashboard";
import Fundraiser from "./components/fundraiser/fundraiser";
import Profile from "./components/profile";

function App() {
  return (
    <div>
      <div className="page-content" />
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/fundraiser/:fundraiser_id" element={<Fundraiser />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
