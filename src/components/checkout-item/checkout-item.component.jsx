
import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import { CheckoutItemContainer } from './checkout-item.styles.jsx'

const CheckoutItem = ({ item }) => {

  const { imageUrl,name,quantity,price } = item;
  const hideClass1 = () => quantity === 1 ? 'hide-btn' : '';
  const { addItemToCart,removeToCart,deleteItemFromCart } = useContext(CartContext);


  return (
    <CheckoutItemContainer>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity' >
        <div className={`${hideClass1()} arrow`} onClick={() => removeToCart(item)} > &#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItemToCart(item)}>&#10095;</div>
      </span>

      <span className='price'> {price}</span>
      <div className='remove-button' onClick={() => deleteItemFromCart(item)}> &#10005;</div>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem;