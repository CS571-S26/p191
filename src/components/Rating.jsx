import { useFavorites } from "../context/FavoritesContext";

export default function RatingStars({ filmId }) {
  const { ratings, rateFilm, getAverageRating } = useFavorites();

  const currentRaw = getAverageRating(filmId); // Stored Rating

  const current =
    typeof currentRaw === "number" && !isNaN(currentRaw)
      ? currentRaw
      : 0;

  // Rating increments
  const values = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

  return (
    <div>

      {/* Render Stars */}
      {values.map((value) => (
        <span
          key={value}
          onClick={() => rateFilm(filmId, value)}
          style={{
            cursor: "pointer",
            fontSize: "22px",
            color: value <= current ? "gold" : "gray"
          }}
        >
          ★
        </span>
      ))}

      {/* Display */}
      <div>
        My Rating:{" "}
        <strong>
          {current ? current.toFixed(1) : "0.0"} / 5
        </strong>
      </div>

    </div>
  );
}