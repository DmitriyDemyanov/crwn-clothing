import { useContext } from 'react';
import { FavorContext } from '../../context/favorites.context';

import { FavorItemContainer } from './favor-item.style.jsx'

import Button from '../button/button.component'

import './favor-item.style.jsx'


const FavorItem = ({ item }) => {

  const { price,name,imageUrl } = item

  const { deleteItemFromFavorite } = useContext(FavorContext);
  console.log('====>',item)

  return (
    <FavorItemContainer imageurl={imageUrl}>
      <div className='favor-image'></div>
      <div className='favor-descr'>
        <span>{price}<span> &#8364;</span> </span>
        <span>{name}</span>
        <Button onClick={() => deleteItemFromFavorite(item.id)}> delete product</Button>
      </div>

    </FavorItemContainer>
  )
}

export default FavorItem;