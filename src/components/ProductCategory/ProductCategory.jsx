import React from 'react';
import './ProductCategory.scss';
import CollectionPreview from '../CollectionPreview/CollectionPreview';

const ProductCategory = ({ imageUrl, name, description, collectionItems }) => {

    return (

        <section className='ProductCategory'>
            <span className='separation-line'></span>
            <div className='ProductCategory__background' style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className='name-container'>
                    <h2 className='ProductCategory__name'>{name}</h2>
                </div>
            </div>
            <div className='description-container'>
                <p className='ProductCategory__description'>
                    {description}
                </p>
            </div>
            <CollectionPreview collectionItems={collectionItems} />
        </section >
    );
};

export default ProductCategory;