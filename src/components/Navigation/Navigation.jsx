import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartPanel } from '../../redux/cart/cartActions';
import { selectNumberOfCartItems } from '../../redux/cart/cartSelectors';
import CartIcon from '../CartIcon/CartIcon';
import './Navigation.scss';

const Navigation = () => {

    const dispatch = useDispatch();
    const numberOfCartItems = useSelector(selectNumberOfCartItems);

    return (
        <nav className='Navigation'>
            <h1 className='Navigation__site-name'>
                <a className='Navigation__site-name-link'>Homeium</a>
            </h1>
            <ul className='Navigation__list'>
                <li className='Navigation__list-item'>
                    <a className='Navigation__link'>Contact</a>
                </li>
                <li className='Navigation__list-item'>
                    <a className='Navigation__link'>Sign In</a>
                </li>
                <li className='Navigation__list-item'>
                    <CartIcon onClick={(e) => {
                        e.preventDefault();
                        dispatch(toggleCartPanel());
                    }} content={numberOfCartItems} />
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;