import React from 'react';
import { useHistory } from 'react-router-dom';
import './CollectionItem.scss';

const CollectionItem = ({
  intersectAPIRef,
  item: { id, imageUrl, name, price, description, colors },
  isSingleColumnLayout,
}) => {
  const history = useHistory();

  const handleClick = () => history.push(`/products/${id}`);

  return (
    <div
      className={`CollectionItem ${
        isSingleColumnLayout ? 'CollectionItem--single-column' : ''
      }`}
      ref={intersectAPIRef}
      onClick={handleClick}
    >
      <img className="CollectionItem__image" src={imageUrl} alt={name} />
      <div className="item-container">
        <h4 className="CollectionItem__name">{name}</h4>
        <h5 className="CollectionItem__price">$ {price}</h5>
        {isSingleColumnLayout && (
          <>
            <p className="CollectionItem__description">{description}</p>
            <h6 className="CollectionItem__colors-info">Available Colors</h6>
            <div className="colors-container">
              {colors.map((color, index) => (
                <span
                  key={`${color}_${index}`}
                  style={{ backgroundColor: color }}
                  className="CollectionItem__available-color"
                ></span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default React.memo(CollectionItem);
