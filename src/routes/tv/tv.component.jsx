import { useEffect,useState } from 'react';
import { TvContainer,WrapTVContent } from './tv.styles';
import TvItem from '../../components/tv/tv.item.component'



// https://api.tvmaze.com/search/shows?q=postman

const TvMain = () => {

  const [shows,setShows] = useState([]);

  useEffect(() => {

    fetch('https://api.tvmaze.com/search/shows?q=postman')
      .then(response => response.json())
      .then(movie => setShows(movie))
  },[]);


  return (

    <WrapTVContent>
      <TvContainer>
        <h1>TV & Movie</h1>
        {
          shows.length ? (shows.map((el) => (<TvItem item={el} key={el.show.id} />))) : (<h2>SPINNER</h2>)
        }
      </TvContainer>
    </WrapTVContent>
  )
};

export default TvMain;