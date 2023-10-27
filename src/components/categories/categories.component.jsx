import CategoryItem from '../category-item/category-item.component'

import './categories.styles.scss'

const Categories = (props) => {
  const { users } = props;
  return (
    <div className='categories-container'>
      {users.map((item) => <CategoryItem category={item} key={item.id} />)}
    </div>
  )
}

export default Categories;
