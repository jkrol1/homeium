import React from 'react';
import { animated } from 'react-spring';
import { useSelector } from 'react-redux';
import {
  selectCartItems,
  selectNumberOfCartItems,
} from '../../redux/cart/cartSelectors';
import { useHistory } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import CustomButton from '../CustomButton/CustomButton';
import ClosePanelSymbol from '../ClosePanelSymbol/ClosePanelSymbol';
import EmptyCartInfo from '../EmptyCartInfo/EmptyCartInfo';
import PanelHeading from '../PanelHeading/PanelHeading';
import SeparationLine from '../SeparationLine/SeparationLine';
import './CartPanel.scss';

const CartPanel = React.forwardRef(({ hideCart, style }, ref) => {
  const cartItems = useSelector(selectCartItems);
  const numberOfCartItems = useSelector(selectNumberOfCartItems);
  const history = useHistory();
  const separationLineStyle = {
    top: '8rem',
    left: '50%',
    transform: 'translateX(-50%)',
  };

  const handleClick = () => {
    hideCart();
    history.push('/checkout');
  };

  return (
    <div className="Cart" style={style} ref={ref}>
      <ClosePanelSymbol onClick={hideCart} />
      <PanelHeading text={'Shopping cart'} />
      <SeparationLine style={separationLineStyle} />
      {numberOfCartItems > 0 ? (
        <>
          {Object.keys(cartItems).map((cartItem) => (
            <CartItem key={cartItem} {...cartItems[cartItem]} />
          ))}
          <CustomButton onClick={handleClick} content={<p>Go to checkout</p>} />
        </>
      ) : (
        <EmptyCartInfo text="There are no items in your shopping cart" />
      )}
    </div>
  );
});

export default animated(CartPanel);
