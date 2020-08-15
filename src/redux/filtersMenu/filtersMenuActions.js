import filtersMenuActionTypes from './filtersMenuActionTypes';

export const toggleCollectionLayout = () => ({
  type: filtersMenuActionTypes.TOGGLE_COLLECTION_LAYOUT
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