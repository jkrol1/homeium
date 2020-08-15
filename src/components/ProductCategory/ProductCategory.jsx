import React from 'react';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import SeparationLine from '../SeparationLine/SeparationLine';
import './ProductCategory.scss';

const ProductCategory = ({
  imageUrl,
  name,
  description,
  collectionItems,
  width,
}) => {
  return (
    <section className="ProductCategory">
      {width < 1240 && (
        <SeparationLine
          style={{
            top: '-8rem',
            margin: '0 auto',
          }}
        />
      )}
      <div
        className="ProductCategory__background"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="name-container">
          <h2 className="ProductCategory__name">{name}</h2>
        </div>
      </div>
      <div className="description-container">
        <p className="ProductCategory__description">{description}</p>
      </div>
      <CollectionPreview
        collectionItems={collectionItems}
        categoryName={name}
      />
    </section>
  );
};

export default ProductCategory;
