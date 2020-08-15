import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectProduct } from '../../redux/products/productsSelectors';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import { ReactComponent as ArrowFilledLeftSVG } from '../../assets/arrow-filled-left.svg';
import './Product.scss';

const ProductPage = ({ match: { params } }) => {
  const { productId } = params;
  const history = useHistory();
  const product = useSelector(selectProduct)(parseInt(productId));

  const handleClick = () => {
    history.push(`/${product.category}`);
  };

  return (
    <main className="ProductPage">
      <div className="icon-container" onClick={handleClick}>
        <ArrowFilledLeftSVG />
      </div>
      <div className="product-details-container">
        <ProductDetails product={product} />
      </div>
    </main>
  );
};

export default ProductPage;
