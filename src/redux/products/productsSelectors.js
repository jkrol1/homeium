import { createSelector } from 'reselect';

const selectProducts = state => state.products;

export const selectProductCategories = createSelector(
    [selectProducts],
    products => products.categories
);