import { createSelector } from 'reselect';
import getCompareFunction from '../../utils/getCompareFunction';

const selectProducts = state => state.products;

export const selectProductCategories = createSelector(
    [selectProducts],
    products => products.categories
);

export const selectAllProductsMap = createSelector(
    [selectProductCategories],
    categories => {
        const productsMap = new Map();
        Object.keys(categories).forEach(category => {
            categories[category].collectionItems.forEach(item => productsMap.set(item.id, item));
        });
        return productsMap;
    }
)

export const selectProductCategory = categoryName => createSelector(
    [selectProductCategories],
    categories => categories ? categories[categoryName] : null
);

export const selectAreProductsLoaded = createSelector(
    [selectProducts],
    products => Object.keys(products.categories).length > 0 ? true : false
);

export const selectCollectionItems = categoryName => createSelector(
    [selectProductCategory(categoryName)],
    category => category ? category['collectionItems'] : null
)

export const selectMinMaxPrice = categoryName => createSelector(
    [selectCollectionItems(categoryName)],
    collectionItems => {
        const prices = (collectionItems.map(item => parseInt(item['price']))).sort();
        return { minProductPrice: prices[0], maxProductPrice: prices[prices.length - 1] };
    }
);

export const selectFilteredProducts = (categoryName, { minPriceThreshold, maxPriceThreshold }, { sortBy, order }) => createSelector(
    [selectCollectionItems(categoryName)],
    collectionItems => {
        const filtered = collectionItems.filter(({ price }) => parseInt(price) >= minPriceThreshold && parseInt(price) <= maxPriceThreshold);
        return filtered.sort(getCompareFunction(sortBy, order));
    }
);

export const selectProduct = id => createSelector(
    [selectAllProductsMap],
    productsMap => productsMap.get(id)
);
