import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productsReducer from './products/productsReducer';
import filtersMenuReducer from './filtersMenu/filtersMenuReducer';
import cartReducer from './cart/cartReducer';
import userReducer from './user/userReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    products: productsReducer,
    filtersMenu: filtersMenuReducer,
    cart: cartReducer,
    user: userReducer
});

export default persistReducer(persistConfig, rootReducer);