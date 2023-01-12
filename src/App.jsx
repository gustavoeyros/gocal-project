import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
