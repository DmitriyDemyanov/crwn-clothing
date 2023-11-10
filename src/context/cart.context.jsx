import { createContext,useState,useEffect } from "react";

const addCartItem = (cartItems,productToAdd) => {
  const updatedCart = [...cartItems];
  const itemInCart = updatedCart.find((productInCart) => productInCart.id === productToAdd.id);
  if (itemInCart) {
    itemInCart.quantity++;
  } else {
    updatedCart.push({ ...productToAdd,quantity: 1 });
  }
  return updatedCart;
}

export const CartContext = createContext({
  cartOpened: false,
  setCartOpened: () => { },
  cartItems: [],
  addItemToCart: () => { },
  cartCount: 0,
  setCartCount: () => { },
  checkOutSum: 0,
  setCheckOutSum: () => {},
});

export const CartProvider = ({ children }) => {

  const [cartOpened,setCartOpened] = useState(false);
  const [cartItems,setCartItems] = useState([]);
  const [cartCount,setCartCount] = useState(0);
  const [checkOutSum,setCheckOutSum] = useState(0);

  useEffect(() => {
    setCartCount(cartItems.reduce((acc,{ quantity }) => acc + quantity,0));
    const testSum = cartItems.reduce((acc,{ price,quantity }) => acc + price * quantity,0)
    setCheckOutSum(testSum);
    console.log('testSum',testSum)
  },[cartItems]);
  
  
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems,productToAdd));
  }

  const value = { cartOpened,setCartOpened,addItemToCart,cartItems,cartCount };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}