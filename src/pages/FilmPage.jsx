import { useParams } from "react-router-dom";
import { films } from "../data/media";
import { Container, Card } from "react-bootstrap";

export default function FilmPage() {
  const { id } = useParams();

  const film = films.find((f) => f.id === Number(id)); // FIX

  if (!film) {
    return <h2>Film not found</h2>;
  }

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>{film.title}</Card.Title>
          <Card.Text><b>Year:</b> {film.year}</Card.Text>
          <Card.Text><b>Genre:</b> {film.genre}</Card.Text>
          <Card.Text><b>Rating:</b> {film.rating}</Card.Text>
          <Card.Text>{film.description}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}