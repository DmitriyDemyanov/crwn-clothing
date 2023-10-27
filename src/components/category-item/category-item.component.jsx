
import './category-item.styles.scss'

const CategoryItem = ({ category }) => (
  <div className='category-container'>
    <div className='background-image'
      style={{
        backgroundImage: `url(${category.imageUrl})`
      }}></div>
    <div className='category-body-container'>
      <h2>{category.title}</h2>
      <p>Shop how</p>
    </div>
  </div>
)

export default CategoryItem;