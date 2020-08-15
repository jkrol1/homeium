import React from 'react';
import { Link } from 'react-router-dom';
import { animated } from 'react-spring';
import ClosePanelSymbol from '../ClosePanelSymbol/ClosePanelSymbol';
import SeparationLine from '../SeparationLine/SeparationLine';
import PanelHeading from '../PanelHeading/PanelHeading';
import './ProductsPanel.scss';

const ProductsPanel = React.forwardRef(({ hideProductsPanel, style }, ref) => {
  const handleClick = (e) => {
    if (e.target.classList.value === 'ProductsPanel__category')
      hideProductsPanel();
  };

  return (
    <div
      className="ProductsPanel"
      style={style}
      ref={ref}
      onClick={handleClick}
    >
      <PanelHeading text={'Product Categories'} />
      <ClosePanelSymbol onClick={hideProductsPanel} />
      <SeparationLine
        style={{
          top: '11rem',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />
      <ul className="ProductsPanel__categories-list">
        <li className="ProductsPanel__categories-list-item">
          <Link to="/armchairs" className="ProductsPanel__category">
            Armchairs
          </Link>
        </li>
        <li className="ProductsPanel__categories-list-item">
          <Link to="/beds" className="ProductsPanel__category">
            Beds
          </Link>
        </li>
        <li className="ProductsPanel__categories-list-item">
          <Link to="/chairs" className="ProductsPanel__category">
            Chairs
          </Link>
        </li>
        <li className="ProductsPanel__categories-list-item">
          <Link to="/desks" className="ProductsPanel__category">
            Desks
          </Link>
        </li>
        <li className="ProductsPanel__categories-list-item">
          <Link to="/pillows" className="ProductsPanel__category">
            {' '}
            Pillows
          </Link>
        </li>
        <li className="ProductsPanel__categories-list-item">
          <Link to="/sofas" className="ProductsPanel__category">
            {' '}
            Sofas
          </Link>
        </li>
      </ul>
    </div>
  );
});

export default animated(ProductsPanel);
