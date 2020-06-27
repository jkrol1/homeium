import cartActionTypes from './cartActionTypes';

export const addItem = (item) => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
});

export const removeItem = (itemId) => ({
    type: cartActionTypes.REMOVE_ITEM,
    payload: itemId
});

export const clearCart = () => ({
    type: cartActionTypes.CLEAR_CART
});

export const clearItem = (itemId) => ({
    type: cartActionTypes.CLEAR_ITEM,
    payload: itemId
});

