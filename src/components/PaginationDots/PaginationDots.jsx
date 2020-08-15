import React from 'react';
import PaginationDot from '../PaginationDot/PaginationDot';
import './PaginationDots.scss';

const PaginationDots = ({ slides, activeSlide }) => (
  <div className="PaginationDots">
    {slides.map((slide, index) => (
      <PaginationDot
        key={slide + index}
        modifier={activeSlide === index ? 'active-dot' : null}
      />
    ))}
  </div>
);

export default PaginationDots;
