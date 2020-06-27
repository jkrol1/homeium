import cartActionTypes from './cartActionTypes';
import { addItem, removeItem, clearItem } from '../../utils/cartUtils.js';

const INITIAL_STATE = {
    showCartPanel: false,
    cartItems: {}
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItem(state.cartItems, action.payload)
            };
        case cartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItem(state.cartItems, action.payload)
            };

        case cartActionTypes.CLEAR_ITEM:
            return {
                ...state,
                cartItems: clearItem(state.cartItems, action.payload)
            };

        case cartActionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: {}
            };

        default:
            return state

    };
};

export default cartReducer;