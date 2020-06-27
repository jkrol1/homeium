import React from 'react';
import './CartIcon.scss';
import { ReactComponent as ShoppingCartSVG } from '../../assets/shopping-cart.svg';

const CartIcon = ({ content, ...otherProps }) => {
    return (
        <div className='CartIcon' {...otherProps}>
            <ShoppingCartSVG />
            <span className='CartIcon__number-of-items'>{content}</span>
        </div>
    );
};

export default CartIcon;
