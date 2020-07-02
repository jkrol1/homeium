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


/*
const CheckoutTable = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    //CheckoutTable__column-

    return (
        <div className='CheckoutTable'>
            <div className='CheckoutTable__row CheckoutTable__row--title-row'>
                <div className='CheckoutTable__column'><p className='CheckoutTable__content'>Image</p></div>
                <div className='CheckoutTable__column'><p className='CheckoutTable__content'>Name</p></div>
                <div className='CheckoutTable__column'><p className='CheckoutTable__content'>Quantity</p></div>
                <div className='CheckoutTable__column'><p className='CheckoutTable__content'>Price</p></div>
                <div className='CheckoutTable__column'><p className='CheckoutTable__content'>Remove</p></div>
                <div className='CheckoutTable__column'><p className='CheckoutTable__content'>Remove</p></div>
            </div>


            {Object.keys(cartItems).map(cartItem => {
                const { id, name, imageUrl, quantity, price, selectedColor } = cartItems[cartItem];
                return (
                    <div className='CheckoutTable__row'>
                        <div className='CheckoutTable__column CheckoutTable__column--image'><img className='CheckoutTable__content CheckoutTable__content--image' src={imageUrl} alt='product' /></div>
                        <div className='CheckoutTable__column'>
                            <p className='CheckoutTable__content'>{name}</p>
                            <span className='CheckoutTable__content CheckoutTable__content--color-option' style={{ 'backgroundColor': selectedColor }}></span>
                        </div>
                        <div className='CheckoutTable__column'>
                            <div className='content-container'>
                                <div className='icon-container'>
                                    <ArrowDecreaseSVG onClick={() => dispatch(removeItem({ id, selectedColor }))} />
                                </div>
                                <p className='CheckoutTable__content'>{quantity}</p>
                                <div className='icon-container'>
                                    <ArrowIncreaseSVG onClick={() => dispatch(addItem({ id, selectedColor }))} />
                                </div>
                            </div>
                        </div>
                        <div className='CheckoutTable__column'><p className='CheckoutTable__content'>{price}</p></div>
                        <div className='CheckoutTable__column'>
                            <div className='icon-container'>
                                <DeleteSVG onClick={() => dispatch(clearItem({ id, selectedColor }))} />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>);
};

export default CheckoutTable;
*/