
import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import './checkout-item.styles.scss'

const CheckoutItem = ({ item }) => {
  const hideClass = item.quantity === 1 ? 'hide-btn' : ''
  
  const { addItemToCart,removeToCart,deleteItemFromCart,checkOutSum } = useContext(CartContext);
  return (
    <div>
      <hr />
      {item.name}
      <br />
      {item.quantity}
      <div>
        <p onClick={() => addItemToCart(item)}>increment</p>
        <p className={hideClass} onClick={() => removeToCart(item)}>decrement</p>
        <p onClick={() => deleteItemFromCart(item)}>DELETE</p>
      </div>
      <h3> Items price: $ {item.quantity * item.price }</h3>
      <h5> TOTAL: $ {checkOutSum}</h5>
    </div>
  )
}

export default CheckoutItem;