import { takeLatest, call, put, all } from 'redux-saga/effects';
import { fetchProductsSuccess, fetchProductsFailure } from './productsActions';
import productsActionTypes from './productsActionTypes';
import { transformProductData, firestoreFetch } from '../../firebase/firebase';

function* fetchProducts() {
    try {
        const response = yield call(firestoreFetch, 'products');
        const productsData = yield call(transformProductData, response);
        yield put(fetchProductsSuccess(productsData));
    } catch (error) {
        yield put(fetchProductsFailure(error));
    }
};

function* onFetchProductsStart() {
    yield takeLatest(productsActionTypes.FETCH_PRODUCTS_START, fetchProducts);
};

export function* productsSagas() {
    yield all([
        call(onFetchProductsStart)
    ]);
};