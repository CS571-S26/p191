import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DecadePage from "./pages/DecadePage";
import FilmPage from "./pages/FilmPage";
import Favorites from "./pages/Favorites";

export default function App() {
  return (
    <HashRouter>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/decade/:decade" element={<DecadePage />} />
          <Route path="/film/:id" element={<FilmPage />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
