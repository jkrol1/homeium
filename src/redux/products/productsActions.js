import productsActionTypes from './productsActionTypes';

export const fetchProductsStart = () => ({
    type: productsActionTypes.FETCH_PRODUCTS_START
});

export const fetchProductsSuccess = products => ({
    type: productsActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: products
});

export const fetchProductsFailure = error => ({
    type: productsActionTypes.FETCH_PRODUCTS_FAILURE,
    payload: error
});
