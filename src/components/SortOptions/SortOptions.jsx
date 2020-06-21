import React from 'react';
import './SortOptions.scss';

const SortOptions = ({ sortRule, sortOptionsArray, dispatch, changeSortRule, toggleSortPanel }) => (
    <ul className='SortOptions'>
        {sortOptionsArray.map(({ sortBy, order }) => {
            if (sortRule.sortBy === sortBy && sortRule.order === order) {
                return (<li
                    className='SortOptions__sort-option SortOptions__sort-option--selected-option'
                    onClick={() => dispatch(toggleSortPanel())}
                    key={`${sortBy}-${order}`}>
                    {`${sortBy[0].toUpperCase() + sortBy.slice(1)} - ${order[0].toUpperCase() + order.slice(1)}`}</li>);
            }
            return (<li className='SortOptions__sort-option'
                onClick={() => {
                    dispatch(changeSortRule({ sortBy, order }))
                    dispatch(toggleSortPanel())
                }}
                key={`${sortBy}-${order}`}>
                {`${sortBy[0].toUpperCase() + sortBy.slice(1)} - ${order[0].toUpperCase() + order.slice(1)}`}</li>);
        })}
    </ul >
);

export default SortOptions;