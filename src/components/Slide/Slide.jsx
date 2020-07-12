import React from 'react';
import './Slide.scss';

const Slide = ({ content }) => (
    <div className='Slide' style={{ backgroundImage: `url(${content})` }}></div>
);

export default Slide;