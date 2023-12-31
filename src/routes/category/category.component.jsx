
import { useParams } from 'react-router-dom';
import { useContext,useState,useEffect } from 'react';
import { CategoriesContext } from '../../context/categories.context';
import ProductCard from '../../components/product-card/product-card.component';

import './category-styles.scss'


const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products,setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category])
  },[category,categoriesMap])
  return (
    <>
      <h2 style={{ textAlign: 'center',margin: '20px 0' }}>{category.toUpperCase()}</h2>
      <div className='category-wrapper'>
        {
          products &&
          products.map(product => <ProductCard key={product.id} product={product} />)
        }
      </div>
    </>

  )
}
export default Category;