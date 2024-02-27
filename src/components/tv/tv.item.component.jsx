
import { TvItemContainer,TvLink } from './tv-item-styles';


const TvItem = ({ item }) => {
  const { url,name,type,language } = item.show;

  return (
    <TvItemContainer>
      <TvLink target='blink' to={url} > watch movie</TvLink>
      <div>name---{name}</div>
      <div>type___{type}</div>
      <div>language=={language}</div>
    </TvItemContainer>
  )
};

export default TvItem;