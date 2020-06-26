import React from 'react';
import { useSelector } from 'react-redux';
import { selectProduct } from '../../redux/products/productsSelectors';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import ProductVariations from '../../components/ProductVariations/ProductVariations';
import { ReactComponent as ArrowSVG } from '../../assets/arrow.svg';
import WithSpinner from '../../components/WithSpinner/WithSpinner';
import './Product.scss';

const ProductPage = ({ match: { params } }) => {
    const { productId } = params;
    const product = useSelector(selectProduct(parseInt(productId)));

    return (
        <main className='ProductPage'>
            <div className='icon-container'><ArrowSVG /></div>
            <CollectionItem item={product} isSingleColumnLayout hideBoxShadow />
            <ProductVariations product={product} />
        </main>
    );
};

export default WithSpinner(ProductPage);