import { Fragment,useContext } from 'react';
import Button from '../button/button.component';

import { CartContext } from '../../context/cart.context';

import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartOpened,cartItems } = useContext(CartContext);
  return (
    <Fragment>
      {
        cartOpened && (
          <div className='cart-dropdown-container'>
            <div className='cart-items'>
              {
                cartItems.map((product) => <CartItem key={product.id} cartItem={product} />)
              }
            </div>
            <Button>go to checkout</Button>

          </div>
        )
      }

    </Fragment>
  )
}

export default CartDropdown;