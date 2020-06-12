import React from 'react';
import CollectionPreviewItem from '../CollectionPreviewItem/CollectionPreviewItem';
import './CollectionPreview.scss';

const CollectionPreview = ({ collectionItems }) => {
    return (
        <section className='CollectionPreview'>
            <h3 className='CollectionPreview__heading'>
                Collection Preview
            </h3>
            <a className='CollectionPreview__link'>View more</a>
            <div className='item-container'>
                {collectionItems.slice(0, 10).map(({ imageUrl, name, price }, index) =>
                    <CollectionPreviewItem key={`${name}_${index}`} item={{ imageUrl, name, price }} />)}
            </div>
        </section>
    )
};

export default CollectionPreview;