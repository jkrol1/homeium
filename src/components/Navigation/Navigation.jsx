import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartPanel } from '../../redux/cart/cartActions';
import { signOutStart } from '../../redux/user/userActions';
import { selectNumberOfCartItems } from '../../redux/cart/cartSelectors';
import { selectCurrentUser } from '../../redux/user/userSelectors';
import CartIcon from '../CartIcon/CartIcon';
import './Navigation.scss';

const Navigation = () => {

    const dispatch = useDispatch();
    const numberOfCartItems = useSelector(selectNumberOfCartItems);
    const currentUser = useSelector(selectCurrentUser);

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
                    {currentUser
                        ? <Link as='div' className='Navigation__link' onClick={() => { dispatch(signOutStart()) }}>Sign Out</Link>
                        : <Link to='/signin' className='Navigation__link'>Sign In</Link>
                    }
                </li>
                <li className='Navigation__list-item'>
                    <CartIcon onClick={() => { dispatch(toggleCartPanel()) }} content={numberOfCartItems} />
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;