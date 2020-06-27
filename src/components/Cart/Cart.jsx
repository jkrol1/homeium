import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { toggleCartPanel } from '../../redux/cart/cartActions';
import CartItem from '../CartItem/CartItem';
import CustomButton from '../CustomButton/CustomButton';
import './Cart.scss';

const Cart = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    useEffect(() => {

        document.body.style.overflow = "hidden";

        return () => document.body.style.overflow = "initial";

    }, []);

    return (
        <div className='Cart'>
            <span onClick={(e) => {
                e.preventDefault();
                dispatch(toggleCartPanel());
            }} className='Cart__close-panel-symbol'>&#10005;</span>
            <h2 className='Cart__heading'>Shopping cart</h2>
            <span className='separation-line'></span>
            {Object.keys(cartItems).map(cartItem => <CartItem key={cartItem} {...cartItems[cartItem]} />)}
            <CustomButton content='Go To Checkout' modifier='large-with-border' />
        </div>);
};

export default Cart;