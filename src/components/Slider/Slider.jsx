import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useTransition } from 'react-spring';
import * as easings from 'd3-ease';
import { useSelector } from 'react-redux';
import { selectChosenProducts } from '../../redux/products/productsSelectors';
import Slide from '../Slide/Slide';
import PaginationDots from '../PaginationDots/PaginationDots';
import { ReactComponent as ArrowLeftSVG } from '../../assets/arrow-left.svg';
import { ReactComponent as ArrowRightSVG } from '../../assets/arrow-right.svg';
import './Slider.scss';

const Slider = () => {
  const history = useHistory();
  const slidesIds = useRef([86, 64, 42]);
  const slides = useSelector(selectChosenProducts)(slidesIds.current);
  const autoPlay = 4.5;
  const autoPlayRef = useRef();
  const [[index, dir], setIndex] = useState([0, 0]);
  const transitionDuration = 550;
  const transitionRunningRef = useRef(false);
  const intervalRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    intervalRef.current = setInterval(play, autoPlay * 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const timeout = () => {
    transitionRunningRef.current = true;
    setTimeout(
      () => (transitionRunningRef.current = false),
      transitionDuration,
    );
  };

  const nextSlide = () => {
    timeout();
    setIndex([(index + 1) % slides.length, 1]);
  };

  const prevSlide = () => {
    timeout();
    setIndex([(index - 1 + slides.length) % slides.length], -1);
  };

  const transitions = useTransition(slides[index], (item) => item.imageUrl, {
    config: {
      duration: transitionDuration,
      easing: easings.easeQuadOut,
    },
    from: {
      transform: `translateX(${dir === 1 ? 100 : -100}%)`,
    },
    enter: {
      transform: 'translateX(0%)',
    },
    leave: {
      transform: `translateX(${dir === 1 ? -100 : 100}%)`,
    },
    initial: null,
  });

  return (
    <section className="Slider">
      <div
        className="Slider__content"
        onClick={() => history.push(`/products/${slides[index].id}`)}
      >
        {transitions.map(({ item, props, key }) => (
          <Slide content={item.imageUrl} style={props} key={key} />
        ))}
      </div>
      <div
        className="icon-container"
        onClick={() => {
          if (transitionRunningRef.current === false) {
            clearInterval(intervalRef.current);
            prevSlide();
            intervalRef.current = setInterval(
              () => autoPlayRef.current(),
              autoPlay * 1000,
            );
          }
        }}
      >
        <ArrowLeftSVG style={{ width: '40%', height: '40%' }} />
      </div>
      <div
        className="icon-container icon-container--arrow-right"
        onClick={() => {
          if (transitionRunningRef.current === false) {
            clearInterval(intervalRef.current);
            nextSlide();
            intervalRef.current = setInterval(
              () => autoPlayRef.current(),
              autoPlay * 1000,
            );
          }
        }}
      >
        <ArrowRightSVG style={{ width: '40%', height: '40%' }} />
      </div>
      <PaginationDots slides={slides} activeSlide={index} />
    </section>
  );
};

export default Slider;
