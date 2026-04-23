import { useParams } from "react-router-dom";
import { films } from "../data/media";
import { Container } from "react-bootstrap";
import FilmList from "../components/FilmList";

export default function DecadePage() {
  const { decade } = useParams();

  // Film dataset by decade
  const filteredFilms = films.filter(
    (film) => film.decade === decade
  );

  return (
    <Container>
      <h2>{decade} Films & TV</h2>

      {/* Show all films in a given decade */}
      {filteredFilms.length === 0 ? (
        <p>No films found for this decade yet.</p>
      ) : (
        <FilmList films={filteredFilms} />
      )}
    </Container>
  );
}