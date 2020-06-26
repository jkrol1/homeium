import React from 'react';
import './CollectionItem.scss';

const CollectionItem = ({ item: { imageUrl, name, price, description, colors }, isSingleColumnLayout, hideBoxShadow, showColorsInfo }) => (
    <div className={`CollectionItem ${isSingleColumnLayout ? 'CollectionItem--single-column' : ''} ${hideBoxShadow ? 'CollectionItem--hide-box-shadow' : ''}`}>
        <img className={`CollectionItem__image ${isSingleColumnLayout ? 'CollectionItem__image--single-column' : ''}`} src={imageUrl} alt={name} />
        <div className='item-container'>
            <h4 className='CollectionItem__name'>{name}</h4>
            <h5 className='CollectionItem__price'>$ {price}</h5>
            {isSingleColumnLayout ?
                <>
                    <p className='CollectionItem__description'>
                        {description}
                    </p>
                    {showColorsInfo ?
                        <>
                            <h6 className='CollectionItem__colors-info'>Available Colors</h6>
                            <div className='colors-container'>
                                {colors.map((color, index) => <span
                                    key={`${color}_${index}`}
                                    style={{ 'backgroundColor': color }}
                                    className='CollectionItem__available-color'></span>)}
                            </div>
                        </> : null}
                </> : null}
        </div>
    </div>);

export default CollectionItem;
