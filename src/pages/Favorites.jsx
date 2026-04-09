import { useFavorites } from "../context/FavoritesContext";

export default function Favorites() {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div>
      <button onClick={() => navigate("/")}>
        Back to Home
      </button>

      <h2>Your Favorite Films</h2>

      {favorites.length === 0 && <p>No favorites yet.</p>}

      {favorites.map((film) => (
        <div key={film.id}>
          <h3>{film.title}</h3>
          <button onClick={() => removeFavorite(film.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}