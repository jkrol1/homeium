import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem, clearItem } from '../../redux/cart/cartActions';
import { ReactComponent as ArrowDecreaseSVG } from '../../assets/arrow-decrease.svg';
import { ReactComponent as ArrowIncreaseSVG } from '../../assets/arrow-increase.svg';
import { ReactComponent as DeleteSVG } from '../../assets/delete.svg';
import './CheckoutItem.scss';

const CheckoutItem = ({ id, name, imageUrl, quantity, price, selectedColor }) => {

    const dispatch = useDispatch();

    return (
        <div className='CheckoutItem'>
            <img className='CheckoutItem__image' src={imageUrl} alt='product' />
            <div className='name-color-container'>
                <p className='CheckoutItem__text-value'>{name}</p>
                <span className='CheckoutItem__color-option' style={{ 'backgroundColor': selectedColor }}></span>
            </div>
            <div className='quantity-container'>
                <div className='icon-container' onClick={() => dispatch(removeItem({ id, selectedColor }))} >
                    <ArrowDecreaseSVG />
                </div>
                <p className='CheckoutItem__text-value'>{quantity}</p>
                <div className='icon-container' onClick={() => dispatch(addItem({ id, selectedColor }))} >
                    <ArrowIncreaseSVG />
                </div>
            </div>
            <p className='CheckoutItem__text-value'>{price}</p>
            <div className='icon-container' onClick={() => dispatch(clearItem({ id, selectedColor }))} >
                <DeleteSVG />
            </div>
        </div>
    );
};

export default CheckoutItem;