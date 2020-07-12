import React, { useState } from 'react';
import Slide from '../Slide/Slide';
import { ReactComponent as ArrowLeftSVG } from '../../assets/arrow-decrease.svg';
import { ReactComponent as ArrowRightSVG } from '../../assets/arrow-increase.svg';
import './Slider.scss';

const Slider = () => {

    const images = ["https://images.unsplash.com/photo-1573866926487-a1865558a9cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80", "https://images.unsplash.com/photo-1573866926487-a1865558a9cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80", "https://images.unsplash.com/photo-1573866926487-a1865558a9cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"];
    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0
    })

    const { activeIndex, translate } = state;

    const windowWidth = () => window.innerWidth;

    const nextSlide = () => {

        if (activeIndex === images.length - 1) {
            return setState({
                ...state,
                translate: 0,
                activeIndex: 0
            });
        };
        setState({
            ...state,
            activeIndex: activeIndex + 1,
            translate: windowWidth() * (activeIndex + 1)
        });
    };

    const prevSlide = () => {
        if (activeIndex === 0) {
            return setState({
                ...state,
                translate: (images.length - 1) * windowWidth(),
                activeIndex: images.length - 1
            });
        };

        setState({
            ...state,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * windowWidth()
        });
    };

    return (
        <section className='Slider'>
            <div className='Slider__content' style={{ width: `${windowWidth() * images.length}px`, transform: `translateX(-${translate}px)` }}>
                {images.map((image, index) => <Slide key={image + index} content={image} />)}
            </div>
            <div className='icon-container' onClick={() => prevSlide()}>
                <ArrowLeftSVG style={{ width: '40%', height: '40%' }} />
            </div>
            <div className='icon-container icon-container--arrow-right' onClick={() => nextSlide()}>
                <ArrowRightSVG style={{ width: '40%', height: '40%' }} />
            </div>
        </section>
    );
};

export default Slider;