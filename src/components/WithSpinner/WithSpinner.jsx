import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsProductsFetching } from '../../redux/products/productsSelectors';

const WithSpinner = WrappedComponent => {
    const Spinner = ({ ...otherProps }) => {
        const isLoading = useSelector(selectIsProductsFetching);

        return isLoading ? (
            <div>Loading...</div>
        ) : (
                <WrappedComponent {...otherProps} />
            );
    };
    return Spinner;
};

export default WithSpinner;