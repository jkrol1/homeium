import { createSelector } from 'reselect';

const selectFiltersMenu = state => state.filtersMenu;

export const selectIsSingleColumnLayout = createSelector(
    [selectFiltersMenu],
    filtersMenu => filtersMenu.isSingleColumnLayout
);

export const selectShowFiltersPanel = createSelector(
    [selectFiltersMenu],
    filtersMenu => filtersMenu.showFiltersPanel
)

export const selectShowClearFiltersOption = createSelector(
    [selectFiltersMenu],
    filtersMenu => filtersMenu.showClearFiltersOption
);

export const selectPriceFilter = createSelector(
    [selectFiltersMenu],
    filtersMenu => filtersMenu.priceFilter
);

export const selectSortRule = createSelector(
    [selectFiltersMenu],
    filtersMenu => filtersMenu.sortRule
);

export const selectShowSortPanel = createSelector(
    [selectFiltersMenu],
    filtersMenu => filtersMenu.showSortPanel
)