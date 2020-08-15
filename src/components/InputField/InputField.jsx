import React from 'react';
import './InputField.scss';

const InputField = ({ modifier, ...otherProps }) => (
  <input
    className={`InputField ${modifier ? 'InputField--' + modifier : ''}`}
    {...otherProps}
  />
);

export default InputField;
