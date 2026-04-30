import { useState } from "react";
import { Container, Row, Col, Card, Form, Spinner } from "react-bootstrap";
import { searchMedia } from "../data/movies";
import { useFavorites } from "../context/FavoritesContext";

export default function ComparePage() {
  const [firstResults, setFirstResults] = useState([]);
  const [secondResults, setSecondResults] = useState([]);

  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);

  const [loading, setLoading] = useState(false);

  const { getAverageRating, ratings } = useFavorites();

  // Seach function 
  const handleSearch = async (query, setResults) => {
    if (!query) return setResults([]); // Clear results with empty query

    setLoading(true);
    const data = await searchMedia(query); // Call API results and save
    setResults(data.results || []);
    setLoading(false);
  };

  const renderCard = (film) => {
    if (!film) return null;

    const community = getAverageRating(film.id);
    const mine = ratings[film.id] || 0;

    // Display filmcard
    return (
      <Card className="mt-3">
        <Card.Img
          src={
            film.poster_path
              ? `https://image.tmdb.org/t/p/w300${film.poster_path}`
              : "https://via.placeholder.com/300x450"
          }
        />

        <Card.Body>
          <h5>{film.title || film.name}</h5>

          <p>Year: {film.release_date?.slice(0, 4)}</p>

          <p>
            ⭐ Community: {community ? community.toFixed(1) : "0.0"} / 5
          </p>

          <p>
            🎯 Your Rating: {mine ? mine.toFixed(1) : "Not Rated"} / 5
          </p>
        </Card.Body>
      </Card>
    );
  };

  return (
    <Container>
      <h2>Compare Titles</h2>

      <Row>
        {/* Left Search */}
        <Col>
          <Form.Control
            placeholder="Search first title..."
            onChange={(e) =>
              handleSearch(e.target.value, setFirstResults)
            }
          />

          {firstResults.map((film) => (
            <div
              key={film.id}
              style={{ cursor: "pointer", marginTop: "5px" }}
              onClick={() => {
                setFirst(film);
                setFirstResults([]);
              }}
            >
              {film.title || film.name}
            </div>
          ))}

          {renderCard(first)}
        </Col>

        {/* Right Search */}
        <Col>
          <Form.Control
            placeholder="Search second title..."
            onChange={(e) =>
              handleSearch(e.target.value, setSecondResults)
            }
          />

          {secondResults.map((film) => (
            <div
              key={film.id}
              style={{ cursor: "pointer", marginTop: "5px" }}
              onClick={() => {
                setSecond(film);
                setSecondResults([]);
              }}
            >
              {film.title || film.name}
            </div>
          ))}

          {renderCard(second)}
        </Col>
      </Row>
    </Container>
  );
}