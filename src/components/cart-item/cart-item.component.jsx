

import { CartItemContainer,CartImage,CartSpan,CartItemsDetails } from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {
  const { name,quantity,price,imageUrl } = cartItem;
  return (
    <CartItemContainer>
      <CartImage src={imageUrl} alt={name} />
      <CartItemsDetails>
        <CartSpan >{name}</CartSpan>
        <CartSpan >{quantity} x $ {price * quantity}</CartSpan>
      </CartItemsDetails>

    </CartItemContainer>
  )
}

export default CartItem;
