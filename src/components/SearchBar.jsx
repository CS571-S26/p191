import { Form } from "react-bootstrap";

export default function SearchBar({ query, setQuery }) {
  return (
    <Form.Control
      type="text"
      placeholder="Search films..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="mb-3"
    />
  );
}