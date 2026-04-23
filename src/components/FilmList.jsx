import FilmCard from "./FilmCard";
import { Row, Col } from "react-bootstrap";

export default function FilmList({ films }) {
  return (
    <Row>
      {films.map((film) => (
        <Col key={film.id} md={4}>
          <FilmCard film={film} />
        </Col>
      ))}
    </Row>
  );
}