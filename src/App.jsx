import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Result from "./pages/Result";
function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </main>
  );
}

export default App;
