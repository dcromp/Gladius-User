import "./App.css";
import { Routes, Route } from "react-router-dom";
import { GladiusProfile } from "./screens/GladiusProfile/GladiusProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GladiusProfile />} />
    </Routes>
  );
}

export default App;
