import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  // Loads list of favorite films
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  // Saves favorites when they change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Add to favorites
  const addFavorite = (film) => {
    setFavorites((prev) => {
      if (prev.find((f) => f.id === film.id)) return prev;
      return [...prev, film];
    });
  };
  // Remove from favorites
  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((f) => f.id !== id));
  };

  // Loads ratings
  const [ratings, setRatings] = useState(() => {
    return JSON.parse(localStorage.getItem("ratings")) || {};
  });

  // Saves ratings
  useEffect(() => {
    localStorage.setItem("ratings", JSON.stringify(ratings));
  }, [ratings]);

  // Update a film's rating
  const rateFilm = (filmId, rating) => {
    setRatings((prev) => ({
      ...prev,
      [filmId]: rating
    }));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, ratings, rateFilm }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}