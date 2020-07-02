import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartValue } from '../../redux/cart/cartSelectors';
import './CheckoutTotal.scss';

const CheckoutTotal = () => {

    const cartValue = useSelector(selectCartValue);

    return (
        <div className='CheckoutTotal'>
            <p className='CheckoutTotal__value'>Total: {cartValue}$</p>
        </div>);
};

export default CheckoutTotal;