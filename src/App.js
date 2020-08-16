import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { fetchProductsStart } from './redux/products/productsActions';
import { checkUserSession } from './redux/user/userActions';
import { getWindowSize } from './redux/window/windowActions';
import { selectCurrentUser } from './redux/user/userSelectors';
import HomePage from './pages/Homepage/Homepage'
import ContactPage from './pages/Contact/Contact';
import CategoryPage from './pages/Category/Category'
import ProductPage from './pages/Product/Product'
import CheckoutPage from './pages/Checkout/Checkout';
import SignInAndSignUpPage from './pages/SignInAndSignUp/SignInAndSignUp';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import useScrollToTop from './hooks/useScrollToTop';
import LoadingBars from './components/LoadingBars/LoadingBars';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { selectAreProductsLoaded } from './redux/products/productsSelectors';
import './App.scss';

const App = () => {

  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const { pathname } = useLocation();
  const isLoaded = useSelector(selectAreProductsLoaded);

  useScrollToTop();

  useEffect(() => {

    const resizeCallback = () => {
      dispatch(getWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      }))
    };

    dispatch(fetchProductsStart());
    dispatch(checkUserSession());
    resizeCallback();

    window.addEventListener('resize', resizeCallback);

    return () => {
      window.removeEventListener('resize', resizeCallback);
    };

  }, []);

  return (
    <LoadingBars isLoaded={isLoaded}>
      <div className='App'>
        <ErrorBoundary>
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/products/:productId' component={ProductPage} />
            <Route exact path='/contact' component={ContactPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact
              path='/signin'
              render={() => currentUser
                ? <Redirect to='/' />
                : <SignInAndSignUpPage />
              } />
            <Route path='/:category' component={CategoryPage} />
          </Switch>
          {pathname !== '/signin' ? <Footer /> : null}
        </ErrorBoundary>
      </div >
    </LoadingBars>
  );
};

export default App;