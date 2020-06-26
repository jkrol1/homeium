import React from 'react';
import './ProductColorOptions.scss';

const ProductColorOptions = ({ colors, selectedColor, setSelectedColor }) => {
    return (
        <div className='ProductColorOptions'>
            <h6 className='ProductColorOptions__heading'>Select Color</h6>
            <div className='colors-container'>
                {colors.map((color, index) => <span
                    key={`${color}_${index}`}
                    style={{ 'backgroundColor': color }}
                    className='ProductColorOptions__color-option'
                    onClick={() => setSelectedColor(color)}>
                    {selectedColor === color ? <span className='ProductColorOptions__selected-option'></span> : null}</span>)}
            </div>
        </div >);
}

export default ProductColorOptions;
