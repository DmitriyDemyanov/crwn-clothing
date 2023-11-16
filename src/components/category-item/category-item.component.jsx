
import { CategoryContainer,CategoryBG,CategoryBodyContainer } from './category-item.styles.jsx'

const CategoryItem = ({ category }) => {
  const { imageUrl,path,title } = category;
  return (
    <CategoryContainer to={path}>

      <CategoryBG
        imageUrl={imageUrl}>
      </CategoryBG>

      <CategoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop how</p>
      </CategoryBodyContainer>
    </CategoryContainer>
  )
};

export default CategoryItem;
