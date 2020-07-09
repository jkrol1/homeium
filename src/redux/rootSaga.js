import { all, call } from 'redux-saga/effects';

import { productsSagas } from './products/productsSagas';
import { userSagas } from './user/userSagas';

export default function* rootSaga() {
    yield all([call(productsSagas), call(userSagas)]);
};
