import { useContext,Fragment } from 'react';
// import { useNavigate } from 'react-router-dom';

import { CategoriesContext } from '../../context/categories.context';
import { Link } from 'react-router-dom'

import ProductCard from '../../components/product-card/product-card.component';

import { CategoriesTitle,CategoriesItems } from './categories-preview.styles';


const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  // const navigate = useNavigate();
  // const goToCategory = (title) => {
  //   navigate(title);
  // }
  return (
    <Fragment>
      {
        Object.keys(categoriesMap).map(title => {
          return (
            <Fragment key={title}>
              <CategoriesTitle >
                <Link to={title}>{title.toUpperCase()}</Link>
              </CategoriesTitle>
              <CategoriesItems >
                {categoriesMap[title]
                  .slice(0,4)
                  .map((product) => {
                    return (
                      <ProductCard key={product.id} product={product} />
                    )
                  })}
              </CategoriesItems>
            </Fragment>
          )
        })
      }
    </Fragment>
  )
};
export default CategoriesPreview;