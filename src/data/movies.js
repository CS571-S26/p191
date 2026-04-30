const BASE_URL = "https://api.themoviedb.org/3";

// Search movies + TV shows
export async function searchMedia(query) {
  const res = await fetch(
    `${BASE_URL}/search/multi?api_key=${import.meta.env.VITE_MOVIE_KEY}&query=${query}`
  );
  return res.json();
}

// Get trending media
export async function getTrendingMedia() {
  const res = await fetch(
    `${BASE_URL}/trending/all/week?api_key=${import.meta.env.VITE_MOVIE_KEY}`
  );
  return res.json();
}

// Filter movies by date range to put in decade categories
export async function fetchByDecade(decade) {
  const start = parseInt(decade);
  const end = start + 9;

  const res = await fetch(
    `${BASE_URL}/discover/movie?api_key=${import.meta.env.VITE_MOVIE_KEY}&sort_by=vote_average.desc&primary_release_date.gte=${start}-01-01&primary_release_date.lte=${end}-12-31`
  );

  return res.json();
}

// Fectch all movie details
export async function fetchMovieById(id) {
  const res = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${import.meta.env.VITE_MOVIE_KEY}`
  );

  return res.json();
}