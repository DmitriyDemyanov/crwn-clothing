
import { CategoryContainer,CategoryBG,CategoryBodyContainer } from './category-item.styles.jsx'

const CategoryItem = ({ category }) => (
  <CategoryContainer to={category.path}>
    <CategoryBG
      imageUrl={category.imageUrl}
    >
    </CategoryBG>
    <CategoryBodyContainer>
      <h2>{category.title}</h2>
      <p>Shop how</p>
    </CategoryBodyContainer>
  </CategoryContainer>
)

export default CategoryItem;
