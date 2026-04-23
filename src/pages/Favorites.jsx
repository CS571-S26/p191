import { useFavorites } from "../context/FavoritesContext";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import FilmList from "../components/FilmList";

export default function Favorites() {
  const { favorites } = useFavorites();
  const navigate = useNavigate();

  // List all favorite films
  return (
    <Container>
      <Button variant="secondary" onClick={() => navigate("/")}>
        Back to Home
      </Button>

      <h2 className="mt-3">Your Favorite Films</h2>

      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <FilmList films={favorites} />
      )}
    </Container>
  );
}