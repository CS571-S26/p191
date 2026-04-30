import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Row, Col, Spinner, Badge } from "react-bootstrap";
import { fetchByDecade } from "../data/movies";
import FilmCard from "../components/FilmCard";

export default function DecadePage() {
  const { decade } = useParams(); 
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);

        const data = await fetchByDecade(decade);
        const results = data.results || [];
        // Sort films by popularity
        results.sort((a, b) => b.popularity - a.popularity);

        setFilms(results);
      } catch (err) {
        console.error("Failed to load decade data:", err);
        setFilms([]);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [decade]);

  return (
    <Container className="py-4">
      <h2 className="mb-3">
        {decade} Films & TV{" "}
      </h2>

      {loading ? (
        <Spinner animation="border" />
      ) : films.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <Row>
          {films.map((film) => (
            <Col key={film.id} md={4} className="mb-3">
              <FilmCard film={film} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}