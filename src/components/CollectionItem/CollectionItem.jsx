import React from 'react';
import './CollectionItem.scss';

const CollectionItem = ({ item: { imageUrl, name, price }, isSingleColumnLayout }) => (
    <div className={`CollectionItem ${isSingleColumnLayout ? 'CollectionItem--single-column' : ''}`}>
        <img className={`CollectionItem__image ${isSingleColumnLayout ? 'CollectionItem__image--single-column' : ''}`} src={imageUrl} alt={name} />
        <div className='item-container'>
            <h4 className='CollectionItem__name'>{name}</h4>
            <h5 className='CollectionItem__price'>$ {price}</h5>
            {isSingleColumnLayout ?
                <>
                    <p className='CollectionItem__description'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia magnam cum maxime incidunt facilis, tenetur quas est rerum distinctio amet quidem
                    </p>
                    <h6 className='CollectionItem__colors-info'>Available Colors</h6>
                    <div className='colors-container'>
                        <span className='CollectionItem__available-color'></span>
                        <span className='CollectionItem__available-color CollectionItem__available-color--maroon'></span>
                        <span className='CollectionItem__available-color CollectionItem__available-color--navy'></span>
                        <span className='CollectionItem__available-color CollectionItem__available-color--orange'></span>
                    </div>
                </> : null}
        </div>
    </div>);

export default CollectionItem;
