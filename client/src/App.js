import "./App.css";
import { Routes, Route } from "react-router-dom";
import Onboarding from "./components/onboarding";

function App() {
  return (
    <div>
      <div className="page-content" />
      <Routes>
        <Route path="/" element={<Onboarding />} />
      </Routes>
    </div>
  );
}

export default App;
