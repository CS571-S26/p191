import { useParams, Link } from "react-router-dom";
import { films } from "../data/media";

export default function DecadePage() {
  const { decade } = useParams();

  const filteredFilms = films.filter(
    (film) => film.decade === decade
  );

  return (
    <div>
      <h2>{decade} Films & TV</h2>

      {filteredFilms.length === 0 ? (
        <p>No films found for this decade yet.</p>
      ) : (
        filteredFilms.map((film) => (
          <div
            key={film.id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              marginBottom: "10px"
            }}
          >
            <h3>{film.title}</h3>
            <p>{film.year} • {film.genre}</p>
            <p>Rating: {film.rating}</p>

            <Link to={`/film/${film.id}`}>
              View Details
            </Link>
          </div>
        ))
      )}
    </div>
  );
}