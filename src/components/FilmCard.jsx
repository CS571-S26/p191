import { Card, Button } from "react-bootstrap";
import { useFavorites } from "../context/FavoritesContext";
import RatingStars from "./Rating";
import { Link } from "react-router-dom";

export default function FilmCard({ film }) {

  // Use all these functions from FavoritesContext
  const {
    favorites,
    addFavorite,
    removeFavorite,
    getAverageRating
  } = useFavorites();

  // Check if a film is already in Favorites
  const isFavorite = favorites.some(f => f.id === film.id);
  // Community Score
  const avg = getAverageRating(film.id);

  return (
    <Card style={{ width: "18rem", margin: "10px" }}>

      {/* Image */}
      <Card.Img
        variant="top"
        src={
          film.poster_path
            ? `https://image.tmdb.org/t/p/w300${film.poster_path}`
            : "https://via.placeholder.com/300x450"
        }
        alt={film.title}
      />

      <Card.Body>

        {/* Title */}
        <Card.Title>
          <Link to={`/film/${film.id}`}>
            {film.title || film.name}
          </Link>
        </Card.Title>

        {/* Year */}
        <Card.Subtitle className="mb-2 text-muted">
          {film.release_date?.slice(0, 4) || film.year || "Unknown"}
        </Card.Subtitle>

        {/* Community (0.1 rounding) */}
        <div style={{ marginBottom: "6px" }}>
          ⭐ Community Score:{" "}
          <strong>
            {avg ? avg.toFixed(1) : "Not Rated"} / 5
          </strong>
        </div>

        {/* User Rating (0.5 increments) */}
        <RatingStars filmId={film.id} />

        {/* Favorites */}
        <Button
          className="mt-2"
          variant={isFavorite ? "danger" : "primary"}
          onClick={() =>
            isFavorite
              ? removeFavorite(film.id)
              : addFavorite(film)
          }
        >
          {isFavorite ? "Remove Favorite" : "Add Favorite"}
        </Button>

      </Card.Body>
    </Card>
  );
}