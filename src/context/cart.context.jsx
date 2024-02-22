import { createContext,useState,useEffect,useReducer } from "react";

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
const deleteInCart = (cartItems,{ id }) => cartItems.filter((item) => item.id !== id);

export const CartContext = createContext({
  cartOpened: false,
  setCartOpened: () => { },
  cartItems: [],
  setCartItems: () => { },
  addItemToCart: () => { },
  cartCount: 0,
  setCartCount: () => { },
  removeToCart: () => { },
  checkOutSum: 0,
  setCheckOutSum: () => { },
  deleteItemFromCart: () => { },
});

export const OPENED_CART_TYPES = {
  SET_CART_OPENED: 'SET_CART_OPENED',
}

const INITIAL_STATE = {
  cartOpened: false,
}

const cartReducer = (state,action) => {
  const { type,payload } = action;


  switch (type) {
    case OPENED_CART_TYPES.SET_CART_OPENED:
      return {
        ...state,
        cartOpened: payload,
      }

    default:
      throw new Error(`cart error - ${type}`)
  }
}



export const CartProvider = ({ children }) => {

  // const [cartOpened,setCartOpened] = useState(false);
  const [{ cartOpened },dispatch] = useReducer(cartReducer,INITIAL_STATE.cartOpened);

  const setCartOpened = (user) => {
    dispatch({ type: OPENED_CART_TYPES.SET_CART_OPENED,payload: user })
  }


  const [cartItems,setCartItems] = useState([]);
  const [cartCount,setCartCount] = useState(0);
  const [checkOutSum,setCheckOutSum] = useState(0);


  useEffect(() => {
    setCartCount(cartItems.reduce((acc,{ quantity }) => acc + quantity,0));
    setCheckOutSum(cartItems.reduce((acc,{ price,quantity }) => acc + price * quantity,0));
  },[cartItems]);


  const removeCartItem = (cartItems,productToOff) => {
    const updatedCart = [...cartItems];
    const itemInCart = updatedCart.find((productInCart) => productInCart.id === productToOff.id);
    if (itemInCart.quantity <= 1) {

      return deleteInCart(cartItems,itemInCart);

    }
    else {
      itemInCart.quantity--;

    }
    return updatedCart;
  }

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems,productToAdd));
  }
  const removeToCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems,productToRemove))

  }
  const deleteItemFromCart = (productToDelete) => {
    setCartItems(deleteInCart(cartItems,productToDelete));
  }

  const value = { cartOpened,setCartOpened,addItemToCart,cartItems,cartCount,removeToCart,deleteItemFromCart,checkOutSum };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}