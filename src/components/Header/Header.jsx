import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.scss';

const Header = () => (
  <header className="Header">
    <div className="fixed-container">
      <Navigation />
    </div>
  </header>
);

export default Header;
