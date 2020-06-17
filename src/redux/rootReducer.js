import { combineReducers } from 'redux';
import productsReducer from './products/productsReducer';
import filtersMenuReducer from './filtersMenu/filtersMenuReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    filtersMenu: filtersMenuReducer
});

export default rootReducer;