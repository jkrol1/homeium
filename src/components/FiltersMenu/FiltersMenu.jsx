import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleCollectionLayout,
  changeMinPriceThreshold,
  changeMaxPriceThreshold,
} from '../../redux/filtersMenu/filtersMenuActions';
import { selectIsSingleColumnLayout } from '../../redux/filtersMenu/filtersMenuSelectors';
import { selectMinMaxPrice } from '../../redux/products/productsSelectors';
import FiltersPanel from '../FilterPanel/FilterPanel';
import SortPanel from '../SortPanel/SortPanel';
import { ReactComponent as MultipleColumnsSVG } from '../../assets/multiple-columns.svg';
import { ReactComponent as SingleColumnSVG } from '../../assets/single-column.svg';
import { ReactComponent as FilterSVG } from '../../assets/filter.svg';
import { ReactComponent as SortSVG } from '../../assets/sort.svg';
import PanelContainer from '../PanelContainer/PanelContainer';
import { Transition } from 'react-spring/renderprops';
import useTransitionSetup from '../../hooks/useTransitionSetup';
import './FiltersMenu.scss';

const FiltersMenu = ({ category }) => {
  const dispatch = useDispatch();
  const [showFiltersPanel, setShowFiltersPanel] = useState(false);
  const [showSortPanel, setShowSortPanel] = useState(false);
  const [showClearFiltersOption, setShowClearFiltersOption] = useState(false);
  const isSingleColumnLayout = useSelector(selectIsSingleColumnLayout);
  const { minProductPrice, maxProductPrice } = useSelector((state) =>
    selectMinMaxPrice(state, category),
  );
  const filtersPanelOptionRef = useRef();
  const sortPanelOptionRef = useRef();
  const transitionSetup = useTransitionSetup('panelTransition');
  const panelPositionAdjustment = { left: 0 };

  const toggleFiltersPanel = () => setShowFiltersPanel(!showFiltersPanel);
  const toggleSortPanel = () => setShowSortPanel(!showSortPanel);
  const toggleClearFiltersOption = () =>
    setShowClearFiltersOption(!showClearFiltersOption);
  const toggleLayout = () => dispatch(toggleCollectionLayout());

  const handleComponentMount = () => {
    if (showClearFiltersOption) toggleClearFiltersOption();
    dispatch(changeMinPriceThreshold(parseInt(minProductPrice)));
    dispatch(changeMaxPriceThreshold(parseInt(maxProductPrice)));
  };

  useEffect(() => {
    handleComponentMount();
  }, [category]);

  return (
    <section className="FiltersMenu">
      <ul className="FiltersMenu__options">
        <li
          className={`FiltersMenu__option ${
            showFiltersPanel ? 'FiltersMenu__option--selected' : ''
          }`}
          onClick={toggleFiltersPanel}
          ref={filtersPanelOptionRef}
        >
          <p className="FiltersMenu__option-name">Filter</p>
          <FilterSVG />
        </li>
        <Transition items={showFiltersPanel} {...transitionSetup}>
          {(showFiltersPanel) =>
            showFiltersPanel
              ? (props) => (
                  <PanelContainer
                    panelPositionAdjustment={panelPositionAdjustment}
                    onClickOutsideOfPanel={toggleFiltersPanel}
                    toggleSourceRef={filtersPanelOptionRef}
                    render={(childElementRef) => (
                      <FiltersPanel
                        style={props}
                        ref={childElementRef}
                        showClearFiltersOption={showClearFiltersOption}
                        category={category}
                        hideFiltersPanel={toggleFiltersPanel}
                        toggleClearFiltersOption={toggleClearFiltersOption}
                      />
                    )}
                  ></PanelContainer>
                )
              : null
          }
        </Transition>
        <li
          className={`FiltersMenu__option ${
            showSortPanel ? 'FiltersMenu__option--selected' : ''
          }`}
          onClick={toggleSortPanel}
          ref={sortPanelOptionRef}
        >
          <p className="FiltersMenu__option-name">Sort</p>
          <SortSVG />
        </li>
        <Transition items={showSortPanel} {...transitionSetup}>
          {(showSortPanel) =>
            showSortPanel
              ? (props) => (
                  <PanelContainer
                    panelPositionAdjustment={panelPositionAdjustment}
                    onClickOutsideOfPanel={toggleSortPanel}
                    toggleSourceRef={sortPanelOptionRef}
                    render={(childElementRef) => (
                      <SortPanel
                        style={props}
                        ref={childElementRef}
                        dispatch={dispatch}
                        hideSortPanel={toggleSortPanel}
                      />
                    )}
                  ></PanelContainer>
                )
              : null
          }
        </Transition>
        <li
          className="FiltersMenu__option FiltersMenu__option--layout"
          onClick={toggleLayout}
        >
          {isSingleColumnLayout ? <MultipleColumnsSVG /> : <SingleColumnSVG />}
        </li>
      </ul>
      <div
        onClick={handleComponentMount}
        className={`FiltersMenu__clear-filters ${
          showClearFiltersOption ? 'FiltersMenu__clear-filters--show' : ''
        }`}
      >
        <p className="FiltersMenu__clear-filters-text">
          &#10005; Remove Filters
        </p>
      </div>
    </section>
  );
};

export default FiltersMenu;
