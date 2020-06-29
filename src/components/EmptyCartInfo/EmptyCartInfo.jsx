import React from 'react';
import './EmptyCartInfo.scss';

const EmptyCartInfo = ({ text }) => (
    <div className='EmptyCartInfo'>
        <p className='EmptyCartInfo__text'>{text}</p>
    </div>
);

export default EmptyCartInfo;