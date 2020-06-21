import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    toggleCollectionLayout,
    toggleFiltersPanel,
    toggleClearFiltersOption,
    changeMinPriceThreshold,
    changeMaxPriceThreshold,
    toggleSortPanel
} from '../../redux/filtersMenu/filtersMenuActions';
import {
    selectIsSingleColumnLayout,
    selectShowFiltersPanel,
    selectShowClearFiltersOption,
    selectShowSortPanel
} from '../../redux/filtersMenu/filtersMenuSelectors';
import { selectMinMaxPrice } from '../../redux/products/productsSelectors';
import CustomButton from '../CustomButton/CustomButton';
import FiltersPanel from '../FilterPanel/FilterPanel';
import SortPanel from '../SortPanel/SortPanel';
import { ReactComponent as MultipleColumnsSVG } from '../../assets/multiple-columns.svg';
import { ReactComponent as SingleColumnSVG } from '../../assets/single-column.svg';
import { ReactComponent as FilterSVG } from '../../assets/filter.svg';
import { ReactComponent as SortSVG } from '../../assets/sort.svg';
import './FiltersMenu.scss';

const handleClearFilters = (dispatch, minProductPrice, maxProductPrice) => {
    dispatch(toggleClearFiltersOption());
    dispatch(changeMinPriceThreshold(parseInt(minProductPrice)));
    dispatch(changeMaxPriceThreshold(parseInt(maxProductPrice)));
}

const FiltersMenu = ({ category }) => {

    const dispatch = useDispatch();
    const isSingleColumnLayout = useSelector(selectIsSingleColumnLayout);
    const showFiltersPanel = useSelector(selectShowFiltersPanel);
    const showClearFiltersOption = useSelector(selectShowClearFiltersOption);
    const showSortPanel = useSelector(selectShowSortPanel);
    const { minProductPrice, maxProductPrice } = useSelector(selectMinMaxPrice(category));
    const filtersPanelBtnRef = useRef();
    const sortPanelBtnRef = useRef();
    const btnContentStyles = { text: { 'marginRight': '1rem' }, SVG: { 'width': '1.9rem', 'height': '1.9rem' } };

    useEffect(() => {
        [changeMinPriceThreshold(minProductPrice), changeMaxPriceThreshold(maxProductPrice)]
            .forEach(action => dispatch(action))
    }, []);

    return (
        <section className='FiltersMenu'>
            <span className='separation-line'></span>
            <div className='FiltersMenu__buttons'>
                <CustomButton ref={filtersPanelBtnRef} onClick={() => { dispatch(toggleFiltersPanel()) }} content={
                    <>
                        <p style={btnContentStyles.text}>Filter</p>
                        <FilterSVG style={btnContentStyles.SVG} />
                    </>
                } modifier={showFiltersPanel ? 'selected' : ''} />
                <CustomButton ref={sortPanelBtnRef} onClick={() => dispatch(toggleSortPanel())} content={
                    <>
                        <p style={btnContentStyles.text}>Sort</p>
                        <SortSVG style={btnContentStyles.SVG} />
                    </>
                } modifier={showSortPanel ? 'selected' : ''} />
            </div>

            {showFiltersPanel ? <FiltersPanel
                filtersPanelBtnRef={filtersPanelBtnRef}
                showClearFiltersOption={showClearFiltersOption}
                category={category}
                toggleFiltersPanel={toggleFiltersPanel}
            /> : ''}

            {showSortPanel ? <SortPanel
                sortPanelBtnRef={sortPanelBtnRef}
            /> : ''}
            <div className='FiltersMenu__layout-icon' onClick={() => dispatch(toggleCollectionLayout())}>
                {isSingleColumnLayout ? <MultipleColumnsSVG /> : <SingleColumnSVG />}
            </div>
            <div onClick={() => handleClearFilters(dispatch, minProductPrice, maxProductPrice)}
                className={`FiltersMenu__clear-filters ${showClearFiltersOption ? 'FiltersMenu__clear-filters--show' : ''}`}>
                <p className='FiltersMenu__clear-filters-text'>&#10005; Remove Filters</p>
            </div>
        </section>)
};

export default FiltersMenu;