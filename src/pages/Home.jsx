import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { films } from "../data/media";
import FilmList from "../components/FilmList";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [query, setQuery] = useState("");

  // Filter films based on search with case insensitive match
  const filteredFilms = films.filter((film) =>
    film.title.toLowerCase().includes(query.toLowerCase())
  );

  // Filter top rated feature at least 9
  const topRated = films.filter((film) => film.rating >= 9);

  return (
    <Container>
      <h2>Welcome to LegacyM</h2>

      <p>
        Discover culturally influential films and TV shows across decades.
        Browse, rate, and build your personal favorites list.
      </p>

      {/* See movies by decade by pressing this */}
      <Button as={Link} to="/decades" className="mb-3">
        Browse by Decade
      </Button>

      {/* Search Feature with updated query*/}
      <h3>Search</h3>
      <SearchBar query={query} setQuery={setQuery} />

      {query && (
        <>
          <h4>Search Results</h4>
          <FilmList films={filteredFilms} />
        </>
      )}

      <h3 className="mt-4">Top Rated Films</h3>
      <FilmList films={topRated} />
    </Container>
  );
}