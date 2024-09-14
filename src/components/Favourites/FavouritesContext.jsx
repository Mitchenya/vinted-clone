import React, { createContext, useState, useEffect, useContext } from "react";

const FavouritesContext = createContext();

export function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState(() => {
    return JSON.parse(localStorage.getItem("favourites")) || [];
  });
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);
  return (
    <FavouritesContext.Provider value={{ favourites, setFavourites }}>
      {children}
    </FavouritesContext.Provider>
  );
}
export function useFavourites() {
  const context = useContext(FavouritesContext);
  return context;
}
