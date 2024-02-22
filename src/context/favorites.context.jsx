import { createContext,useState } from "react";

export const FavorContext = createContext({
  favorProducts: null,
  setFavorProducts: () => null,
});

export const FavorProvider = ({ children }) => {
  const [favorProducts,setFavorProducts] = useState([null]);
  const value = { favorProducts,setFavorProducts };

  return (
    <FavorContext.Provider value={value}>{children}</FavorContext.Provider>
  )
}