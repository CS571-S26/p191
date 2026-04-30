import { Form } from "react-bootstrap";

export default function SearchBar({ query, setQuery }) {
  return (
    <Form.Group className="mb-3">
      <Form.Label htmlFor="searchFilms">Search Films</Form.Label>
      <Form.Control
        id="searchFilms"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter film title"
      />
    </Form.Group>
  );
}