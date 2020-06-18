import React from 'react';
import './CustomButton.scss';

const CustomButton = React.forwardRef(({ content, modifier, ...otherProps }, ref) => (
    <button ref={ref} {...otherProps} className={`CustomButton ${modifier ? modifier : ''}`}>
        <span className='CustomButton__content'>{content ? content : null}</span>
    </button>
));

export default CustomButton;