import { useContext,useEffect,useState } from 'react';
import { TvContainer,WrapTVContent } from './tv.styles';
import TvItem from '../../components/tv/tv.item.component';
import CartItemContainer from '../../components/tv/tv.item.component'

import CartItem from '../../components/cart-item/cart-item.component';

import { CartContext } from '../../context/cart.context';


// https://api.tvmaze.com/search/shows?q=postman

const TvMain = () => {

  const [shows,setShows] = useState([]);
  const { cartItems } = useContext(CartContext);
  useEffect(() => {

    fetch('https://api.tvmaze.com/search/shows?q=postman')
      .then(response => response.json())
      .then(movie => setShows(movie))
  },[cartItems]);





  return (

    <WrapTVContent>
      <TvContainer>
        <h1>TV & Movie</h1>
        {
          shows.length ? (shows.map((el) => (<TvItem item={el} key={el.show.id} />))) : (<h2>SPINNER</h2>)
        }
      </TvContainer>
      {/* <CartItemContainer>
        {cartItems.length ? (cartItems.map((el,ind) => (<CartItem cartItem={el} key={ind} />))) : <div>cart items empty</div>}
      </CartItemContainer> */}


    </WrapTVContent>
  )
};

export default TvMain;