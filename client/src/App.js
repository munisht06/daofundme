import "./App.css";
import { Routes, Route } from "react-router-dom";
import Onboarding from "./components/onboarding";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <div>
      <div className="page-content" />
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
