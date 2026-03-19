import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <HashRouter>
      <div style={{ padding: "20px" }}>
        <h1>LegacyM</h1>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
