import { createContext,useState } from "react";

export const FavorContext = createContext({
  favorProducts: [],
  setFavorProducts: () => null,
});

export const FavorProvider = ({ children }) => {
  const [favorProducts,setFavorProducts] = useState([]);


  const addItemToFavor = (item) => {

    if (!favorProducts.find((el) => el.id === item.id)) {

      setFavorProducts([...favorProducts,item]);
    }
  }
  const deleteItemFromFavorite = (id) => {
    console.log('Delete item');
    setFavorProducts(favorProducts.filter((item) => item.id !== id ))
  }

  const value = { favorProducts,addItemToFavor,deleteItemFromFavorite };

  return (
    <FavorContext.Provider value={value}>{children}</FavorContext.Provider>
  )
}