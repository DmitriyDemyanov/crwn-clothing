import { useContext,} from 'react';
import { FavorContext } from '../../context/favorites.context';

import FavorItem from '../../components/favorites/favor-item.component'

import './favorites.scss'


const Favorites = () => {
  const { favorProducts } = useContext(FavorContext);
  console.log('favorProducts',favorProducts)

  return (
    <div className='favor-container'>



      <h3>Favorites</h3>
      <div>
        {favorProducts.length ? favorProducts.map((el) => (<FavorItem item={el} key={el.id} />)) : <div>Favorites is empty</div>}
      </div>

    </div>
  )
}

export default Favorites;