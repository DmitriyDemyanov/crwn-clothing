
import { TvItemContainer,IconPlay } from './tv-item-styles';
import { Link } from 'react-router-dom'

const TvItem = ({ item }) => {
  console.log("---->>>",item.show);
  const { name,url,image,premiered } = item.show;
  console.log('MEDIUM',image.medium);

  return (
    <TvItemContainer>
      <div className='image-movie' style={{ backgroundImage: `url(${image.medium})` }}></div>

      <IconPlay onClick={() => console.log('play-movie')} />

      <div className='tv-item-content'>
        <div className='title-movie'>{name}</div>
        <div className='subtitle-movie'>Premiered: {premiered}</div>
        <div className='description-movie'> <span>preview</span> <div></div> <Link target='blank' to={url}>homepage</Link> </div>

      </div>
    </TvItemContainer>
  )
};

export default TvItem;