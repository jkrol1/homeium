import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectNumberOfCartItems } from '../../redux/cart/cartSelectors';
import { toggleCartPanel } from '../../redux/cart/cartActions';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import CustomButton from '../CustomButton/CustomButton';
import EmptyCartInfo from '../EmptyCartInfo/EmptyCartInfo';
import './Cart.scss';

const Cart = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const numberOfCartItems = useSelector(selectNumberOfCartItems);

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
            {numberOfCartItems > 0 ? (
                <>
                    {Object.keys(cartItems).map(cartItem => <CartItem key={cartItem} {...cartItems[cartItem]} />)}
                    <CustomButton onClick={(e) => {
                        e.preventDefault();
                        dispatch(toggleCartPanel());
                    }}
                        content={<Link className='CustomButton__link' to='/checkout'>Go to checkout</Link>}
                        modifier='large-with-border' />
                </>) : <EmptyCartInfo text='There are no items in your shopping cart' />
            }
        </div>);

};

export default Cart;
