import { useFavorites } from "../context/FavoritesContext";

export default function FilmCard({ film }) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const isFavorite = favorites.some(f => f.id === film.id);

  return (
    <div className="card" style={{ margin: "10px", padding: "10px" }}>
      <h3>{film.title}</h3>
      <p>{film.year} • {film.genre}</p>
      <p>Rating: {film.rating}</p>

      <button
        onClick={() =>
          isFavorite ? removeFavorite(film.id) : addFavorite(film)
        }
      >
        {isFavorite ? "Remove" : "Add"}
      </button>
    </div>
  );
}