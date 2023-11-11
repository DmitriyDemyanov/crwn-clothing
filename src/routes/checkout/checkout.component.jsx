import { useContext } from 'react';


import { CartContext } from '../../context/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';


import './checkout.styles.scss';


const Checkout = () => {

  const { cartItems,checkOutSum } = useContext(CartContext);
  return (
    <div>
      {
        cartItems.map((item) => (<CheckoutItem key={item.id} item={item} />))
      }
      <h2>TOTAL ALL: $ {checkOutSum}</h2>
    </div>
  )
}

export default Checkout;