import React from 'react';
import { animated } from 'react-spring';
import './Slide.scss';

const Slide = ({ content, style }) => (
  <div
    className="Slide"
    style={{ backgroundImage: `url(${content})`, ...style }}
  ></div>
);

export default animated(Slide);
