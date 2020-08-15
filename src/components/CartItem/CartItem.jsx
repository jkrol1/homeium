import React from 'react';
import './CartItem.scss';

const CartItem = ({ name, imageUrl, quantity, price, selectedColor }) => (
  <div className="CartItem">
    <img className="CartItem__image" src={imageUrl} alt="product" />
    <div className="item-container">
      <h6 className="CartItem__name">{name}</h6>
      <span className="CartItem__quantity-price">
        {quantity} x {price}
      </span>
      <span
        className="CartItem__color"
        style={{ backgroundColor: selectedColor }}
      ></span>
    </div>
  </div>
);

export default CartItem;
