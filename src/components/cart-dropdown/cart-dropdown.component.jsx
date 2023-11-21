import { Fragment,useContext } from 'react';
import { useNavigate } from 'react-router-dom';


import Button from '../button/button.component';

import { CartContext } from '../../context/cart.context';

import CartItem from '../cart-item/cart-item.component';
import { CartDropdownContainer,CartDropdownItem,EmptyMessage } from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
  const { cartOpened,cartItems } = useContext(CartContext);

  const navigate = useNavigate();
  const goToCheckout = () => {
    navigate('checkout');
  }

  return (
    <Fragment>
      {
        cartOpened && (
          <CartDropdownContainer >
            <CartDropdownItem >
              {cartItems.length ? (
                cartItems.map((product) => <CartItem key={product.id} cartItem={product} />)
              ) : (<EmptyMessage>Your cart is empty</EmptyMessage>)
              }

            </CartDropdownItem>
            <Button onClick={goToCheckout}>go to checkout</Button>

          </CartDropdownContainer>
        )
      }

    </Fragment>
  )
}

export default CartDropdown;