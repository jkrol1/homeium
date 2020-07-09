import { combineReducers } from 'redux';
import productsReducer from './products/productsReducer';
import filtersMenuReducer from './filtersMenu/filtersMenuReducer';
import cartReducer from './cart/cartReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    filtersMenu: filtersMenuReducer,
    cart: cartReducer,
    user: userReducer
});

export default rootReducer;