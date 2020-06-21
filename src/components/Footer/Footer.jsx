import React from 'react';
import { selectIsProductsFetching } from '../../redux/products/productsSelectors';
import { useSelector } from 'react-redux';
import SocialMedia from '../SocialMedia/SocialMedia';
import CompanyInformation from '../CompanyInformation/CompanyInformation';

import './Footer.scss';

const Footer = () => {
    const isLoading = useSelector(selectIsProductsFetching);

    return (isLoading ? null :
        <footer className='Footer'>
            <CompanyInformation />
            <SocialMedia />
        </footer>);
};

export default Footer;