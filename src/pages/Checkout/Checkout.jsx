import React from 'react';
import { useSelector } from 'react-redux';
import { selectNumberOfCartItems } from '../../redux/cart/cartSelectors';
import CheckoutTable from '../../components/CheckoutTable/CheckoutTable';
import CheckoutTotal from '../../components/CheckoutTotal/CheckoutTotal';
import StripeCheckoutButton from '../../components/StripeCheckoutButton/StripeCheckoutButton';
import EmptyCartInfo from '../../components/EmptyCartInfo/EmptyCartInfo';
import CheckoutWarning from '../../components/CheckoutWarning/CheckoutWarning';
import { selectCartValue } from '../../redux/cart/cartSelectors';
import './Checkout.scss';

const CheckoutPage = () => {
  const numberOfCartItems = useSelector(selectNumberOfCartItems);
  const cartValue = useSelector(selectCartValue);

  return (
    <main className="CheckoutPage">
      {numberOfCartItems > 0 ? (
        <div className="checkout-items-container">
          <CheckoutTable />
          <CheckoutTotal cartValue={cartValue} />
          <StripeCheckoutButton cartValue={cartValue} />
          <CheckoutWarning />
        </div>
      ) : (
        <EmptyCartInfo text="There are no items in your shopping cart" />
      )}
    </main>
  );
};

export default CheckoutPage;
