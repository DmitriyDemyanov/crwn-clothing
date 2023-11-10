
import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import './checkout-item.styles.scss'

const CheckoutItem = ({ item }) => {
  const { addItemToCart,removeToCart,decrHide } = useContext(CartContext);
  console.log('QWEQWEQWRQ',decrHide)
  return (
    <div>
      <hr />
      {item.name}
      <br />
      {item.quantity}
      <div>
        <p onClick={() => addItemToCart(item)}>increment</p>
        <p onClick={() => removeToCart(item)}>decrement</p>
        <p>DELETE</p>
      </div>

    </div>
  )
}

export default CheckoutItem;