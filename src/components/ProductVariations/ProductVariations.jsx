import React, { useEffect, useState, useRef } from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import ProductColorOptions from '../../components/ProductColorOptions/ProductColorOptions';
import ProductQuantity from '../../components/ProductQuantity/ProductQuantity';
import CartIcon from '../../components/CartIcon/CartIcon';
import './ProductVariations.scss';

const ProductVariations = ({ product: { colors } }) => {
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [quantity, setQuantity] = useState(1);

    return (
        <section className='ProductVariations'>
            <ProductColorOptions colors={colors} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
            <ProductQuantity quantity={quantity} setQuantity={setQuantity} maxQuantity={10} />
            <CustomButton modifier='large-with-border' content={
                <>
                    <CartIcon content={'+'} />
                    <p>Add to cart</p>
                </>
            } />
        </section>
    );
}

export default ProductVariations;