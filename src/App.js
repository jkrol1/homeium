import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { fetchProductsStart } from './redux/products/productsActions';
import { checkUserSession } from './redux/user/userActions';
import { selectCurrentUser } from './redux/user/userSelectors';
import HomePage from './pages/Homepage/Homepage'
import CategoryPage from './pages/Category/Category'
import ProductPage from './pages/Product/Product'
import CheckoutPage from './pages/Checkout/Checkout';
import SignInAndSignUpPage from './pages/SignInAndSignUp/SignInAndSignUp';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';

const App = () => {

    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);

    useEffect(() => {
        dispatch(fetchProductsStart());
        dispatch(checkUserSession());
    }, []);

    return (
        <div className='App'>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/products/:productId' component={ProductPage} />
                <Route exact path='/checkout' component={CheckoutPage} />
                <Route exact
                    path='/signin'
                    render={() => currentUser
                        ? <Redirect to='/' />
                        : <SignInAndSignUpPage />
                    } />
                <Route path='/:category' component={CategoryPage} />
            </Switch>
            <Footer />
        </div >
    );
};

export default App;