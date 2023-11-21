import { useContext } from 'react';

import Button,{ BUTTON_TYPE_CLASSES } from '../button/button.component';

import { CartContext } from '../../context/cart.context';
import { ProductCartContainer,ImageProduct,FooterProduct } from './product-card.styles.jsx'

const ProductCard = ({ product }) => {
  const { imageUrl,price,name } = product;
  const { addItemToCart } = useContext(CartContext);
  return (
    <ProductCartContainer>
      <ImageProduct src={imageUrl} alt={name} />
      <FooterProduct>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </FooterProduct>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={() => addItemToCart(product)} >Add to cart</Button>
    </ProductCartContainer>
  )
}

export default ProductCard;