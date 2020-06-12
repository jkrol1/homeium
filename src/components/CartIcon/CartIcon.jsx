import React from 'react';
import './CartIcon.scss';
import { ReactComponent as ShoppingCartSVG } from '../../assets/shopping-cart.svg';

const CartIcon = () => {
    return (
        <div className="CartIcon">
            <ShoppingCartSVG />
            <span className="CartIcon__number-of-items">15</span>
        </div>
    );
};

export default CartIcon;
