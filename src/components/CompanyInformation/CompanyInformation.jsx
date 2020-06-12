import React from 'react';
import './CompanyInformation.scss';

const CompanyInformation = () => (
    <section className='CompanyInformation'>
        <div className='CompanyInformation__item'>
            <h5 className='CompanyInformation__heading'>Address</h5>
            <p className='CompanyInformation__contents'>ul. Lipowa 15/155</p>
            <p className='CompanyInformation__contents'>99-999 Warsaw</p>
        </div>
        <div className='CompanyInformation__item'>
            <h5 className='CompanyInformation__heading'>Designed by</h5>
            <p className='CompanyInformation__contents'>Jan Król &copy; 2020</p>
        </div >
    </section>
);

export default CompanyInformation;