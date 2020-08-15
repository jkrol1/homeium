import React from 'react';
import './CheckoutTotal.scss';

const CheckoutTotal = ({ cartValue }) => (
  <div className="CheckoutTotal">
    <p className="CheckoutTotal__value">Total: {cartValue} $</p>
  </div>
);

export default CheckoutTotal;
