import { useNavigate } from 'react-router';
import { CategoryContainer,BackGroundImage,CategoryBodyContainer } from './category-item.styles.jsx'

const CategoryItem = ({ category }) => {
  console.log('!!!!!!@',category)
  const { imageUrl,path,title } = category;
  const navigate = useNavigate();
  const routeToProduct = (route) => {
    navigate(`shop/${route}`)
  }
  return (
    <CategoryContainer onClick={() => routeToProduct(path)}>

      <BackGroundImage imageUrl={imageUrl} />

      <CategoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop how</p>
      </CategoryBodyContainer>
    </CategoryContainer>
  )
};

export default CategoryItem;
