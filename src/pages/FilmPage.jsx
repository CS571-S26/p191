import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Spinner, Badge } from "react-bootstrap";
import { fetchMovieById } from "../data/movies";

export default function FilmPage() {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);

      const data = await fetchMovieById(id); // Fetch API & Save
      setFilm(data);

      setLoading(false);
    }

    load();
  }, [id]);

  if (loading) {
    return <Spinner animation="border" />;
  }

  if (!film) {
    return <h2>Film not found</h2>;
  }

  const title = film.title || film.name;

  return (
    <Container className="py-4">
      <h2>{title}</h2>

      <Badge bg="info" className="mb-2">
        {film.release_date?.slice(0, 4)}
      </Badge>

      <p>{film.overview}</p>

      <h4>Rating: {film.vote_average?.toFixed(1)}/10</h4>
    </Container>
  );
}