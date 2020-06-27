import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectShowCartPanel = createSelector(
    [selectCart],
    cart => cart.showCartPanel
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

