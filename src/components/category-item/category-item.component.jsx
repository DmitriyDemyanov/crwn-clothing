import { Link } from 'react-router-dom';

import './category-item.styles.scss'

const CategoryItem = ({ category }) => (
  <Link className='category-container' to={category.path}>
    <div className='background-image'
      style={{
        backgroundImage: `url(${category.imageUrl})`
      }}></div>
    <div className='category-body-container'>
      <h2>{category.title}</h2>
      <p>Shop how</p>
    </div>
  </Link>
)

export default CategoryItem;
