import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../redux/cart/cartActions';
import { selectNumberOfCartItems } from '../../redux/cart/cartSelectors';
import CheckoutTable from '../../components/CheckoutTable/CheckoutTable';
import CheckoutTotal from '../../components/CheckoutTotal/CheckoutTotal';
import CustomButton from '../../components/CustomButton/CustomButton';
import WithSpinner from '../../components/WithSpinner/WithSpinner';
import EmptyCartInfo from '../../components/EmptyCartInfo/EmptyCartInfo';

import './Checkout.scss';

const CheckoutPage = () => {

    const dispatch = useDispatch();
    const numberOfCartItems = useSelector(selectNumberOfCartItems);

    return (
        <main className='CheckoutPage'>
            {numberOfCartItems > 0 ? (
                <>
                    <CheckoutTable />
                    <CheckoutTotal />
                    <CustomButton onClick={(e) => {
                        e.preventDefault();
                        dispatch(clearCart());
                    }}
                        content='Buy'
                        modifier='large-with-border' />
                </>) : <EmptyCartInfo text='There are no items in your shopping cart' />}
        </main>);
};

export default WithSpinner(CheckoutPage);