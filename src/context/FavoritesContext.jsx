import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  // save list of favorite films
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // add to favorites
  const addFavorite = (film) => {
    setFavorites((prev) => {
      if (prev.find((f) => f.id === film.id)) return prev;
      return [...prev, film];
    });
  };
  // remove from favorites
  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}