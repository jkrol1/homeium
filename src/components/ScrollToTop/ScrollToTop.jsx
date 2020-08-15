import React from 'react';
import { animated } from 'react-spring';
import { ReactComponent as ScrollToTopSVG } from '../../assets/arrow-filled-up.svg';
import './ScrollToTop.scss';

const ScrollToTop = ({ style }) => (
  <div
    onClick={() =>
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    }
    className="ScrollToTop"
    style={style}
  >
    <ScrollToTopSVG />
  </div>
);

export default animated(ScrollToTop);
