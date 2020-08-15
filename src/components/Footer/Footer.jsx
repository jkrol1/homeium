import React from 'react';
import SocialMedia from '../SocialMedia/SocialMedia';
import CompanyInformation from '../CompanyInformation/CompanyInformation';
import './Footer.scss';

const Footer = () => (
  <footer className="Footer">
    <CompanyInformation />
    <SocialMedia />
  </footer>
);

export default Footer;
