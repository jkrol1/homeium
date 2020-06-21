import filtersMenuActionTypes from './filtersMenuActionTypes';

export const toggleCollectionLayout = () => ({
    type: filtersMenuActionTypes.TOGGLE_COLLECTION_LAYOUT
});

export const toggleFiltersPanel = () => ({
    type: filtersMenuActionTypes.TOGGLE_FILTERS_PANEL
});

export const toggleSortPanel = () => ({
    type: filtersMenuActionTypes.TOGGLE_SORT_PANEL
})

export const toggleClearFiltersOption = () => ({
    type: filtersMenuActionTypes.TOGGLE_CLEAR_FILTERS_OPTION
});

export const changeMinPriceThreshold = price => ({
    type: filtersMenuActionTypes.CHANGE_MIN_PRICE_THRESHOLD,
    payload: price
});

export const changeMaxPriceThreshold = price => ({
    type: filtersMenuActionTypes.CHANGE_MAX_PRICE_THRESHOLD,
    payload: price
});

export const changeSortRule = sortRule => ({
    type: filtersMenuActionTypes.CHANGE_SORT_RULE,
    payload: sortRule
});