import { Fragment,useEffect,useState } from 'react';
import TvItem from '../../components/tv/tv.item.component';


import { TvContainer,TitleMovie } from './tv.styles';

const TvMain = () => {

  const [shows,setShows] = useState([]);


  useEffect(() => {

    const getMoviesList = async () => {
      const response = await fetch('https://api.tvmaze.com/search/shows?q=postman');
      const moviesList = await response.json();
      setTimeout(() => setShows(moviesList),0);
    }
    getMoviesList();
  },[]);

  return (

    <Fragment>
      <TitleMovie>TV & Movie</TitleMovie>
      <TvContainer>

        {
          shows.length ? (shows.map((el,ind) => (<TvItem item={el} key={ind} />))) : (<h2 style={{ color: "#fff" }}>SPINNER</h2>)
        }
      </TvContainer>

    </Fragment>
  )
};

export default TvMain;