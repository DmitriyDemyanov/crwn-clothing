import { useContext } from 'react';

import { ReactComponent as Cart } from '../../assets/image/shopping-bag.svg';

import { CartContext } from '../../context/cart.context';

import './cart-icon.styles.scss';


const CartIcon = () => {

  const { cartOpened,setCartOpened,cartCount } = useContext(CartContext);


  return (
    <div className='cart-icon-container' onClick={() => setCartOpened(!cartOpened)}>
      <Cart className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon;