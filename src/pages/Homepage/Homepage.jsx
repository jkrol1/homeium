import React from 'react';
import Slider from '../../components/Slider/Slider';
import Slogan from '../../components/Slogan/Slogan'
import ProductRange from '../../components/ProductRange/ProductRange';
import './Homepage.scss';

const Homepage = () => (
    <div className="Homepage">
        <Slider />
        <Slogan />
        <ProductRange />
    </div>
);
export default Homepage;