import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import './CollectionPreview.scss';

const CollectionPreview = ({ collectionItems }) => {
    return (
        <section className='CollectionPreview'>
            <h3 className='CollectionPreview__heading'>
                Collection Preview
            </h3>
            <a className='CollectionPreview__link'>View more</a>
            <div className='CollectionPreview__items'>
                {collectionItems.slice(0, 10).map((item, index) =>
                    <CollectionItem key={`${item.name}_${index}`} item={item} />)}
            </div>
        </section>
    )
};

export default CollectionPreview;