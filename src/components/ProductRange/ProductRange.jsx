import React from 'react';
import { useSelector } from "react-redux";
import ProductCategory from '../ProductCategory/ProductCategory';
import { selectProductCategories } from '../../redux/products/productsSelectors';
import './ProductRange.scss';

const ProductRange = () => {
    const productCategories = useSelector(selectProductCategories);
    console.log(productCategories);

    if (!productCategories) {
        return (
            <div>Loading...</div>
        )
    }
    else {
        return (
            <main className='ProductRange'>
                {Object.keys(productCategories).map((productCategory, index) =>
                    <ProductCategory key={`${productCategory}_${index}`} {...productCategories[productCategory]} />)}
            </main>
        );
    }
}

export default ProductRange;

