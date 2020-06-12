import React from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/Homepage/Homepage'
import CategoryPage from './pages/Category/Category'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';
import { fetchProductsStart } from './redux/products/productsActions';

const App = () => {
    const dispatch = useDispatch();
    dispatch(fetchProductsStart());

    return (
        <div className='App'>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/:category' component={CategoryPage} />
            </Switch>
            <Footer />
        </div >
    );
}

export default App;