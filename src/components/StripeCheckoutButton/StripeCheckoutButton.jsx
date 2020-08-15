import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/cart/cartActions';

const StripeCheckoutButton = ({ cartValue }) => {
  const dispatch = useDispatch();
  const priceForStripe = cartValue * 100;
  const publishableKey =
    'pk_test_51HG7GvGy1TDtShCKUdLe8GXjdApG28Ytl0qP59vuwtTffCu8zCFzH54CHhByVpUTJDXf8D8B5hoR99xa33wX9QnB00wzOYfRO9';

  const onToken = () => {
    alert('Payment Succesful!');
    dispatch(clearCart());
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Homeium"
      billingAddress
      shippingAddress
      description={`Your total is ${cartValue}$`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
