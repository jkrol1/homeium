import React from 'react';
import { ReactComponent as TwitterSVG } from '../../assets/twitter.svg';
import { ReactComponent as InstagramSVG } from '../../assets/instagram.svg';
import { ReactComponent as FacebookSVG } from '../../assets/facebook.svg';
import './SocialMedia.scss';

const SocialMedia = () => (
    <section className='SocialMedia'>
        <TwitterSVG className='SocialMedia__icon' />
        <InstagramSVG className='SocialMedia__icon' />
        <FacebookSVG className='SocialMedia__icon' />
    </section>
);

export default SocialMedia;

