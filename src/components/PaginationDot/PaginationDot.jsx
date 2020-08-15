import React from 'react';
import './PaginationDot.scss';

const PaginationDot = ({ modifier }) => (
  <span
    className={`PaginationDot ${modifier ? 'PaginationDot--' + modifier : ''}`}
  ></span>
);

export default PaginationDot;
