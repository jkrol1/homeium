import React from 'react';
import './ClosePanelSymbol.scss';

const ClosePanelSymbol = ({ onClick }) => (
  <span onClick={onClick} className="ClosePanelSymbol">
    &#10005;
  </span>
);

export default ClosePanelSymbol;
