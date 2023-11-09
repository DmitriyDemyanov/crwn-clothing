import { Fragment,useContext } from 'react';
import Button from '../button/button.component';

import { CartContext } from '../../context/cart.context';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartOpened } = useContext(CartContext)
  return (
    <Fragment>
      {
        cartOpened && (
          <div className='cart-dropdown-container'>
            <div className='cart-items'></div>
            <Button>go to checkout</Button>

          </div>
        )
      }

    </Fragment>
  )
}

export default CartDropdown;