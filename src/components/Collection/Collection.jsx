import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsSingleColumnLayout, selectSortRule } from '../../redux/filtersMenu/filtersMenuSelectors';
import { selectFilteredProducts } from '../../redux/products/productsSelectors';
import { selectPriceFilter, selectShowFiltersPanel, selectShowSortPanel } from '../../redux/filtersMenu/filtersMenuSelectors';
import CollectionItem from '../CollectionItem/CollectionItem';
import './Collection.scss';

const Collection = ({ category }) => {

    const isSingleColumnLayout = useSelector(selectIsSingleColumnLayout);
    const priceThresholds = useSelector(selectPriceFilter);
    const showFiltersPanel = useSelector(selectShowFiltersPanel);
    const showSortPanel = useSelector(selectShowSortPanel);
    const sortRule = useSelector(selectSortRule);
    const collectionItems = useSelector(selectFilteredProducts(category, priceThresholds, sortRule));

    return (
        <section className={
            `Collection ${isSingleColumnLayout ? '' : 'Collection--multiple-columns'} ${showFiltersPanel || showSortPanel ? 'Collection--filters-window-on' : ''}`
        }>
            {collectionItems ? collectionItems.map((item, index) => <CollectionItem
                key={`${item.name}_${index}`}
                item={item}
                showBtn
                modifier='large-with-border'
                isSingleColumnLayout={isSingleColumnLayout}
                showColorsInfo
            />) : ''}
        </section>);
};

export default Collection; 