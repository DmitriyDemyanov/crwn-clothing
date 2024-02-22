import { Fragment,useContext,useState } from 'react';
import { FavorContext } from '../../context/favorites.context';

import './favorites.scss'


const Favorites = (props) => {
  console.log('PROPS',props)
  const [favorToggle,setFavorToggle] = useState(false);
  console.log('++++++++_______________________________________',useContext(FavorContext))

  return (
    <div className='favor-container' onClick={() => setFavorToggle(!favorToggle)}>

      <Fragment>
        {
          favorToggle ? <div className='favor-dropdown'></div> : <h3>Favorites</h3>
        }
      </Fragment>
    </div>
  )
}

export default Favorites;