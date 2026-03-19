import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DecadePage from "./pages/DecadePage";

export default function App() {
  return (
    <BrowserRouter>
      <h1>LegacyM</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decade/:decade" element={<DecadePage />} />
      </Routes>
    </BrowserRouter>
  );
}