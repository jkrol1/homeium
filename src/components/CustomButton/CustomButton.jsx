import React from 'react';
import './CustomButton.scss';

const CustomButton = ({ content, modifier, ...otherProps }) => (
    <button {...otherProps} className={`CustomButton ${modifier ? modifier : ''}`}>
        {content ? content : null}
    </button>
);

export default CustomButton;