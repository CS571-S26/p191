import { useParams } from "react-router-dom";
import { films } from "../data/media";

export default function FilmPage() {
  const { id } = useParams();

  const film = films.find((f) => f.id === id);

  if (!film) {
    return <h2>Film not found</h2>;
  }

  return (
    <div>
      <h2>{film.title}</h2>
      <p><b>Year:</b> {film.year}</p>
      <p><b>Genre:</b> {film.genre}</p>
      <p><b>Rating:</b> {film.rating}</p>
      <p><b>Description:</b> {film.description}</p>
    </div>
  );
}