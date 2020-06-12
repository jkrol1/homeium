import productsActionTypes from './productsActionTypes';

const INITIAL_STATE = {
    categories: {},
    isFetching: false,
    errorMessage: undefined
};

const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case productsActionTypes.FETCH_PRODUCTS_START:
            return {
                ...state,
                isFetching: true
            };
        case productsActionTypes.FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        case productsActionTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                categories: { ...action.payload }
            }
        default:
            return state;
    };
};

export default productsReducer;


