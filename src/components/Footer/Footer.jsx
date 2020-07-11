import React from 'react';
import { selectAreProductsLoaded } from '../../redux/products/productsSelectors';
import { useSelector } from 'react-redux';
import SocialMedia from '../SocialMedia/SocialMedia';
import CompanyInformation from '../CompanyInformation/CompanyInformation';

import './Footer.scss';

const Footer = () => {
    const isLoading = useSelector(selectAreProductsLoaded);

    return (isLoading
        ? <footer className='Footer'>
            <CompanyInformation />
            <SocialMedia />
        </footer>
        : null
    );
};

export default Footer;