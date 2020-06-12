import React from 'react';
import CartIcon from '../CartIcon/CartIcon';
import './Navigation.scss';

const Navigation = () => (

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
                <CartIcon />
            </li>
        </ul>
    </nav>
);

export default Navigation;