import CategoryItem from '../category-item/category-item.component'

import './categories.styles.scss'

const Categories = (props) => {
  const { categories } = props;
  return (
    <div className='categories-container'>
      {categories.map((item) => (
        <CategoryItem category={item} key={item.id} />
      ))}
    </div>
  )
}

export default Categories;
