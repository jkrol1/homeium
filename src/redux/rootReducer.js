import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productsReducer from './products/productsReducer';
import filtersMenuReducer from './filtersMenu/filtersMenuReducer';
import cartReducer from './cart/cartReducer';
import userReducer from './user/userReducer';
import navigationReducer from './navigation/navigationReducer';
import windowReducer from './window/windowReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    products: productsReducer,
    filtersMenu: filtersMenuReducer,
    cart: cartReducer,
    user: userReducer,
    navigation: navigationReducer,
    window: windowReducer
});

export default persistReducer(persistConfig, rootReducer);