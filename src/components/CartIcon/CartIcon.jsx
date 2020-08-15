import React from 'react';
import { ReactComponent as ShoppingCartSVG } from '../../assets/shopping-cart.svg';
import './CartIcon.scss';

const CartIcon = ({
  content,
  cartPanelIconRef,
  showCartPanel,
  ...otherProps
}) => (
  <div
    className={`CartIcon ${showCartPanel ? 'CartIcon--selected' : ''}`}
    {...otherProps}
    ref={cartPanelIconRef}
  >
    <ShoppingCartSVG />
    <span className="CartIcon__number-of-items">{content}</span>
  </div>
);

export default CartIcon;
