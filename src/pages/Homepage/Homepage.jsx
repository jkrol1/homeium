import React from 'react';
import Header from '../../components/Header/Header';
import Slider from '../../components/Slider/Slider';
import Slogan from '../../components/Slogan/Slogan'
import ProductRange from '../../components/ProductRange/ProductRange';
import Footer from '../../components/Footer/Footer';
import './Homepage.scss';

const Homepage = () => (
    <div className="Homepage">
        <Slider />
        <Slogan />
        <ProductRange />
    </div>
);
export default Homepage;