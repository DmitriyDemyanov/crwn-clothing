import { Link } from 'react-router-dom';

import CategoryItem from '../category-item/category-item.component'

import './categories.styles.scss'

const Categories = (props) => {
  const { users } = props;
  return (
    <div className='categories-container'>
      {users.map((item) => (
        <Link className='category-container' to={item.path}><CategoryItem category={item} key={item.id} /></Link>
      ))}
    </div>
  )
}

export default Categories;
