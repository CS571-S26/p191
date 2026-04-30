import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {

  // FAVORITES 
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Modify adding & removing favorites
  const addFavorite = (film) => {
    setFavorites((prev) =>
      prev.find((f) => f.id === film.id) ? prev : [...prev, film]
    );
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((f) => f.id !== id));
  };

  // RATINGS 
  const [ratings, setRatings] = useState(() => {
    return JSON.parse(localStorage.getItem("ratings")) || {};
  });

  useEffect(() => {
    localStorage.setItem("ratings", JSON.stringify(ratings));
  }, [ratings]);

  // Set rating with 0.5 increments
  const rateFilm = (filmId, value) => {
    setRatings((prev) => ({
      ...prev,
      [filmId]: value
    }));
  };

  // Get Average Ratings 
  const getAverageRating = (filmId) => {
    const val = ratings[filmId];
    return typeof val === "number" ? val : 0;
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        ratings,
        rateFilm,
        getAverageRating
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}