import React from 'react';
import './CollectionPreviewItem.scss';

const CollectionPreviewItem = ({ item }) => {
    const { imageUrl, name, price } = item;
    return (
        <div className="CollectionPreviewItem">
            <img className="CollectionPreviewItem__image" src={imageUrl} alt={name} />
            <h4 className="CollectionPreviewItem__name">{name}</h4>
            <p className="CollectionPreviewItem__price">{price}</p>
        </div>);
};

export default CollectionPreviewItem;
