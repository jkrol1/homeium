import { createSelector } from 'reselect';

const selectFiltersMenu = state => state.filtersMenu;

export const selectIsSingleColumnLayout = createSelector(
    [selectFiltersMenu],
    filtersMenu => filtersMenu.isSingleColumnLayout
);

export const selectShowFiltersWindow = createSelector(
    [selectFiltersMenu],
    filtersMenu => filtersMenu.showFiltersWindow
)

export const selectShowClearFiltersOption = createSelector(
    [selectFiltersMenu],
    filtersMenu => filtersMenu.showClearFiltersOption
);

export const selectPriceFilter = createSelector(
    [selectFiltersMenu],
    filtersMenu => filtersMenu.priceFilter
);
