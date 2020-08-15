import React from 'react';
import Loader from 'react-loader-spinner';
import './LoadingBars.scss';

const LoadingBars = ({ children, isLoaded }) => (
  <>
    {isLoaded ? (
      children
    ) : (
      <div className="LoadingBars">
        <Loader type="Bars" color="#3F51B5" height={'8rem'} width={'8rem'} />
      </div>
    )}
  </>
);

export default LoadingBars;
