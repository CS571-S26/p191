import { useState } from "react";
import { Form, Card, Row, Col } from "react-bootstrap";
import { searchMedia } from "../data/movies";

export default function LiveSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // Handle user input 
  async function handleChange(value) {
    setQuery(value);

    if (!value.trim()) {
      setResults([]);
      return;
    }

    const data = await searchMedia(value); // Call API results and save to UI
    setResults(data.results || []);
  }

  return (
    <div className="mt-4">
      <h2>Search Global Database</h2>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="liveSearch">
          Search Movies or TV Shows
        </Form.Label>

        <Form.Control
          id="liveSearch"
          type="text"
          placeholder="Enter title..."
          value={query}
          onChange={(e) => handleChange(e.target.value)}
        />
      </Form.Group>

      <Row>
        {/* Loop through search results */}
        {results.map((item) => {
          // Movies vs TV
          const title = item.title || item.name;

          return ( // Show Image, Title, & Rating
            <Col md={4} key={item.id}>
              <Card className="mb-3">
                {item.poster_path && (
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                    alt={title}
                  />
                )}

                <Card.Body>
                  <Card.Title>{title}</Card.Title>

                  <Card.Text>
                    Score: {item.vote_average?.toFixed(1)}/10
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}