import React from 'react';
import { useSelector } from 'react-redux';
import { selectShowCartPanel } from '../../redux/cart/cartSelectors';
import Navigation from '../Navigation/Navigation';
import Cart from '../Cart/Cart';
import './Header.scss';

const Header = () => {

    const showCartPanel = useSelector(selectShowCartPanel);

    return (
        <header className='Header'>
            <div className='fixed-container'>
                <Navigation />
                {showCartPanel ? <Cart /> : null}
            </div>
        </header>
    );
};

export default Header;