import { useFavorites } from "../context/FavoritesContext";

export default function RatingStars({ filmId }) {
  const { ratings, rateFilm } = useFavorites();

  const current = ratings[filmId] || 0;

  return (
    <div>
      {[1,2,3,4,5].map((star) => (
        <span
          key={star}
          style={{
            cursor: "pointer",
            color: star <= current ? "gold" : "gray",
            fontSize: "20px"
          }}
          onClick={() => rateFilm(filmId, star)}
        >
          ★
        </span>
      ))}

      <div style={{ fontSize: "14px" }}>
        Your Rating: {current ? `${current}/5` : "Not rated"}
      </div>
    </div>
  );
}