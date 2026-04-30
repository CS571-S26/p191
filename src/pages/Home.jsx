import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import FilmList from "../components/FilmList";
import SearchBar from "../components/SearchBar";
import { searchMedia, getTrendingMedia } from "../data/movies";

export default function Home() {
  const [query, setQuery] = useState("");
  const [films, setFilms] = useState([]);

  useEffect(() => {
    loadTrending();
  }, []);

  async function loadTrending() {
    const data = await getTrendingMedia();
    setFilms(data.results || []);
  }

  useEffect(() => {
    async function runSearch() {
      if (!query.trim()) {
        loadTrending();
        return;
      }
      // API is able to load the data
      const data = await searchMedia(query);
      setFilms(data.results || []);
    }

    runSearch();
  }, [query]);

  return (
    <Container>
      <h1>LegacyM</h1>

      <SearchBar query={query} setQuery={setQuery} />

      <FilmList films={films} />
    </Container>
  );
}