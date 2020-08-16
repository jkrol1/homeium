import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cartActions';
import CustomButton from '../../components/CustomButton/CustomButton';
import ProductColorOptions from '../../components/ProductColorOptions/ProductColorOptions';
import ProductQuantity from '../../components/ProductQuantity/ProductQuantity';
import './ProductVariations.scss';

const ProductVariations = ({
  product: { colors, id, name, price, imageUrl },
}) => {
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="ProductVariations">
      <ProductColorOptions
        colors={colors}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <ProductQuantity
        quantity={quantity}
        setQuantity={setQuantity}
        maxQuantity={10}
      />
      <CustomButton
        onClick={(e) => {
          e.preventDefault();
          dispatch(
            addItem({ id, name, imageUrl, price, selectedColor, quantity }),
          );
        }}
        content={<p>Add to cart</p>}
      />
    </section>
  );
};

export default ProductVariations;
