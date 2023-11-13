import { useContext,Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import { CategoriesContext } from '../../context/categories.context';
import ProductCard from '../../components/product-card/product-card.component';


const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const navigate = useNavigate();
  const goToCategory = (title) => {
    console.log('title:1:',title);
    navigate(title);
  }
  return (
    <Fragment>
      {
        Object.keys(categoriesMap).map(title => {
          return (
            <Fragment key={title}>
              <h2 className='category-title'>
                <span onClick={() => goToCategory(title)}>{title.toUpperCase()}</span>
              </h2>
              <div className='products-container'>
                {categoriesMap[title]
                  .slice(0,4)
                  .map((product) => {
                    return (
                      <ProductCard key={product.id} product={product} />
                    )
                  })}
              </div>
            </Fragment>
          )
        })
      }
    </Fragment>
  )
};
export default CategoriesPreview;