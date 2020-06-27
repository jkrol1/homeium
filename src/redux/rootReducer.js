import { combineReducers } from 'redux';
import productsReducer from './products/productsReducer';
import filtersMenuReducer from './filtersMenu/filtersMenuReducer';
import cartReducer from './cart/cartReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    filtersMenu: filtersMenuReducer,
    cart: cartReducer
});

export default rootReducer;