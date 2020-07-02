import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutItem from '../CheckoutItem/CheckoutItem';
import { selectCartItems } from '../../redux/cart/cartSelectors';

import './CheckoutTable.scss';

const CheckoutTable = () => {

    const cartItems = useSelector(selectCartItems);

    return (
        <div className='CheckoutTable'>
            <div className='CheckoutTable__row-column-headings'>
                <p className='CheckoutTable__column-heading'>Image</p>
                <p className='CheckoutTable__column-heading'>Name</p>
                <p className='CheckoutTable__column-heading'>Quantity</p>
                <p className='CheckoutTable__column-heading'>Price</p>
                <p className='CheckoutTable__column-heading'>Remove</p>
            </div>
            {Object.keys(cartItems).map(cartItem => <CheckoutItem {...cartItems[cartItem]} />)}
        </div>);
};

export default CheckoutTable;