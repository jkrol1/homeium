import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectNumberOfCartItems = createSelector(
  [selectCartItems],
  cartItems => {

    let numberOfCartItems = 0;

    Object.keys(cartItems).forEach(cartItem => {
      numberOfCartItems += cartItems[cartItem].quantity
    })

    return numberOfCartItems;
  }
);

export const selectCartValue = createSelector(
  [selectCartItems],
  cartItems => {

    let cartValue = 0;

    Object.keys(cartItems).forEach(cartItem => {
      cartValue += cartItems[cartItem].quantity * cartItems[cartItem].price
    })

    return cartValue;
  }
);


