import { createSelector } from 'reselect';

const selectFiltersMenu = state => state.filtersMenu;

export const selectIsSingleColumnLayout = createSelector(
  [selectFiltersMenu],
  filtersMenu => filtersMenu.isSingleColumnLayout
);

export const selectPriceFilter = createSelector(
  [selectFiltersMenu],
  filtersMenu => filtersMenu.priceFilter
);

export const selectSortRule = createSelector(
  [selectFiltersMenu],
  filtersMenu => filtersMenu.sortRule
);