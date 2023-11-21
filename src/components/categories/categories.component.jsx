import CategoryItem from '../category-item/category-item.component'

import { CategoriesContainer } from './categories.styles.jsx'

const Categories = (props) => {
  const { categories } = props;
  return (
    <CategoriesContainer>
      {categories.map((item) => (
        <CategoryItem category={item} key={item.id} />
      ))}
    </CategoriesContainer>
  )
}

export default Categories;
