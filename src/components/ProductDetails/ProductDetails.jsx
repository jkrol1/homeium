import React, { useState } from 'react';
import LightboxGallery from '../../components/LightboxGallery/LightboxGallery';
import ProductVariations from '../../components/ProductVariations/ProductVariations';

import './ProductDetails.scss';

const ProductDetails = ({ product }) => {
  const { name, price, imageUrl, description } = product;
  const images = [imageUrl, imageUrl, imageUrl];
  const [showLightbox, setShowLightbox] = useState(false);

  const toggleLightbox = () => setShowLightbox(!showLightbox);

  return (
    <main className="ProductDetails">
      <img
        className="ProductDetails__image"
        src={imageUrl}
        alt={name}
        onClick={toggleLightbox}
      />
      {showLightbox && (
        <LightboxGallery images={images} toggleLightbox={toggleLightbox} />
      )}
      <div className="item-container">
        <h4 className="ProductDetails__name">{name}</h4>
        <h5 className="ProductDetails__price">$ {price}</h5>
        <p className="ProductDetails__description">{description}</p>
        <ProductVariations product={product} />
      </div>
    </main>
  );
};

export default ProductDetails;
