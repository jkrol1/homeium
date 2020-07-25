import navigationActionTypes from './navigationActionTypes';

const INITIAL_STATE = {
    showCartPanel: false,
    showProductsPanel: false
};

const navigationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case navigationActionTypes.TOGGLE_CART_PANEL:
            return {
                ...state,
                showCartPanel: !state.showCartPanel
            }
        case navigationActionTypes.TOGGLE_PRODUCTS_PANEL:
            return {
                ...state,
                showProductsPanel: !state.showProductsPanel
            }
        default:
            return state
    }
}

export default navigationReducer;