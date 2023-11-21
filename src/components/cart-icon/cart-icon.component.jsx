import { useContext } from 'react';



import { CartContext } from '../../context/cart.context';

import { CartIconContainer,CartCount,CartImage } from './cart-icon.styles.jsx';


const CartIcon = () => {

  const { cartOpened,setCartOpened,cartCount } = useContext(CartContext);


  return (
    <CartIconContainer onClick={() => setCartOpened(!cartOpened)}>
      <CartImage />
      <CartCount>{cartCount}</CartCount>
    </CartIconContainer>
  )
}

export default CartIcon;