import React from 'react';
import { useSelector } from 'react-redux';
import { selectAreProductsLoaded } from '../../redux/products/productsSelectors';

const WithSpinner = WrappedComponent => {
    const Spinner = ({ ...otherProps }) => {
        const isLoaded = useSelector(selectAreProductsLoaded);

        return isLoaded
            ? <WrappedComponent {...otherProps} />
            : <div>Loading...</div>;
    };
    return Spinner;
};

export default WithSpinner;