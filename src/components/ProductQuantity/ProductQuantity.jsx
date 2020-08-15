import React from 'react';
import InputField from '../InputField/InputField';
import './ProductQuantity.scss';

const ProductQuantity = ({ quantity, setQuantity, maxQuantity }) => {
  return (
    <div className="ProductQuantity">
      <h6 className="ProductQuantity__heading">Select Quantity</h6>
      <div className="ProductQuantity__input">
        <div
          className="ProductQuantity__input-value-controller"
          onClick={() => quantity > 1 && setQuantity((quantity -= 1))}
        >
          <span className="ProductQuantity__sign">-</span>
        </div>
        <InputField
          type="number"
          value={quantity}
          placeholder="1"
          onChange={(e) => setQuantity(e.target.value)}
          onBlur={(e) => {
            if (parseInt(e.target.value) < 1) {
              setQuantity(1);
            } else if (parseInt(e.target.value) > maxQuantity) {
              setQuantity(maxQuantity);
            } else {
              setQuantity(parseInt(e.target.value));
            }
          }}
          modifier="without-side-borders"
        />
        <div
          className="ProductQuantity__input-value-controller"
          onClick={() => quantity < 10 && setQuantity((quantity += 1))}
        >
          <span className="ProductQuantity__sign">+</span>
        </div>
      </div>
    </div>
  );
};

export default ProductQuantity;
