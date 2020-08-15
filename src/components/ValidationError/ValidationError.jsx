import React from 'react';
import './ValidationError.scss';

const ValidationError = ({ errorMessage }) => (
  <p className="ValidationError">{errorMessage}</p>
);

export default ValidationError;
