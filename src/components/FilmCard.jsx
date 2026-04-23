import { Card, Button } from "react-bootstrap";
import { useFavorites } from "../context/FavoritesContext";
import RatingStars from "./Rating";
import { Link } from "react-router-dom";

export default function FilmCard({ film }) {
  const { favorites, addFavorite, removeFavorite, ratings } = useFavorites();

  const isFavorite = favorites.some(f => f.id === film.id);

  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Body>
        {/* Go to film details */}
        <Card.Title as={Link} to={`/film/${film.id}`} style={{ textDecoration: "none" }}>
          {film.title}
        </Card.Title>

        <Card.Subtitle className="mb-2 text-muted">
          {film.year} • {film.genre}
        </Card.Subtitle>

        <Card.Text>
          Critic Rating: {film.rating}
        </Card.Text>

        <Card.Text>
          Your Rating: {ratings[film.id] ? `${ratings[film.id]}/5` : "Not rated"}
        </Card.Text>

        {/* Toggle Favorites */}
        <Button
          variant={isFavorite ? "danger" : "primary"}
          onClick={() =>
            isFavorite ? removeFavorite(film.id) : addFavorite(film)
          }
          className="mb-2"
        >
          {isFavorite ? "Remove" : "Add to Favorites"}
        </Button>

        {/* Interactive rating system (WIP) */}
        <RatingStars filmId={film.id} /> 
      </Card.Body>
    </Card>
  );
}