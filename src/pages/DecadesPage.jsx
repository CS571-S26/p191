import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

export default function DecadesPage() {
  // All featured decades for now
  const decades = ["1920s", "1930s", "1940s", "1950s", "1960s", "1970s", "1980s", "1990s", "2000s", "2010s", "2020s"];

  return (
    <Container>
      <h2>Select a Decade</h2>

      {/* Look through decades array */}
      {decades.map((d) => (
        <Button
          key={d}
          as={Link}
          to={`/decade/${d}`}
          className="me-2 mb-2"
        >
          {d}
        </Button>
      ))}
    </Container>
  );
}