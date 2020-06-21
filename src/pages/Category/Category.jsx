import React from 'react';
import FiltersMenu from '../../components/FiltersMenu/FiltersMenu';
import Collection from '../../components/Collection/Collection';
import WithSpinner from '../../components/WithSpinner/WithSpinner';
import './Category.scss';

const CategoryPage = ({ match: { params } }) => {
    const { category } = params;
    return (
        <main className='CategoryPage'>
            <h2 className='CategoryPage__heading'>{category[0].toUpperCase() + category.slice(1)}</h2>
            <FiltersMenu category={category} />
            <Collection category={category} />;
        </main>
    );
};

export default WithSpinner(CategoryPage);