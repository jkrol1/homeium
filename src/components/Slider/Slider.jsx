import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectChosenProducts } from '../../redux/products/productsSelectors';
import Slide from '../Slide/Slide';
import PaginationDots from '../PaginationDots/PaginationDots';
import { ReactComponent as ArrowLeftSVG } from '../../assets/arrow-left.svg';
import { ReactComponent as ArrowRightSVG } from '../../assets/arrow-right.svg';
import './Slider.scss';

const Slider = () => {

    const slides = useSelector(selectChosenProducts([42, 64, 86]));

    const firstSlide = slides[0].imageUrl
    const secondSlide = slides[1].imageUrl
    const lastSlide = slides[slides.length - 1].imageUrl;
    const autoPlay = 4.5;

    const getWidth = () => window.innerWidth;

    const [state, setState] = useState({
        activeSlide: 0,
        translate: getWidth(),
        transition: 0.8,
        _slides: [lastSlide, firstSlide, secondSlide],
        isSlideSwitching: false
    });

    const autoPlayRef = useRef();
    const transitionRef = useRef();
    const resizeRef = useRef();

    const { activeSlide, translate, transition, _slides, isSlideSwitching } = state;

    useEffect(() => {
        autoPlayRef.current = nextSlide;
        transitionRef.current = smoothTransition;
        resizeRef.current = handleResize;
    });

    useEffect(() => {
        const play = () => {
            autoPlayRef.current();
        };

        const smooth = e => {
            if (e.target.className.includes('Slider__content')) {
                transitionRef.current();
            };
        };

        const resize = () => {
            resizeRef.current();
        };

        const interval = setInterval(play, autoPlay * 1000);
        const transitionEnd = window.addEventListener('transitionend', smooth);
        const onResize = window.addEventListener('resize', resize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('transitionend', transitionEnd);
            window.removeEventListener('resize', onResize);
        }
    }, []);

    useEffect(() => {
        if (transition === 0) setState({ ...state, transition: 0.8 })
    }, [transition]);

    const handleResize = () => {
        setState({ ...state, translate: getWidth(), transition: 0, isSlideSwitching: false });
    };

    const smoothTransition = () => {
        let _slides = [];

        if (activeSlide === slides.length - 1) _slides = [slides[slides.length - 2], lastSlide, firstSlide]
        else if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide]
        else _slides = [firstSlide, secondSlide, lastSlide]

        setState({
            ...state,
            _slides,
            transition: 0,
            translate: getWidth(),
            isSlideSwitching: false
        });
    };

    const nextSlide = () => {
        if (!isSlideSwitching) setState({
            ...state,
            translate: translate + getWidth(),
            activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
            isSlideSwitching: true
        });
    };

    const prevSlide = () => {
        if (!isSlideSwitching) setState({
            ...state,
            translate: 0,
            activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1,
            isSlideSwitching: true
        });
    };

    return (
        <section className='Slider'>
            <div className='Slider__content' style={{ width: `${getWidth() * _slides.length}px`, transform: `translateX(-${translate}px)`, transition: `transform ease-out ${transition}s` }}>
                {_slides.map((_slide, index) => <Slide key={_slide + index} content={_slide} />)}
            </div>
            <div className='icon-container' onClick={() => prevSlide()}>
                <ArrowLeftSVG style={{ width: '40%', height: '40%' }} />
            </div>
            <div className='icon-container icon-container--arrow-right' onClick={() => nextSlide()}>
                <ArrowRightSVG style={{ width: '40%', height: '40%' }} />
            </div>
            <PaginationDots slides={slides} activeSlide={activeSlide} />
        </section>
    );
};

export default Slider;
