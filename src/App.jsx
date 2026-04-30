import { HashRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import DecadesPage from "./pages/DecadesPage";
import DecadePage from "./pages/DecadePage";
import FilmPage from "./pages/FilmPage";
import Favorites from "./pages/Favorites";
import ComparePage from "./pages/ComparePage";

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/decades" element={<DecadesPage />} />
          <Route path="/decade/:decade" element={<DecadePage />} />
          <Route path="/film/:id" element={<FilmPage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/compare" element={<ComparePage />} />
        </Routes>
      </Container>
      <Footer />
    </HashRouter>
  );
}
