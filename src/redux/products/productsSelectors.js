import { createSelector } from 'reselect';
import getCompareFunction from '../../utils/getCompareFunction';
import { selectPriceFilter, selectSortRule } from '../filtersMenu/filtersMenuSelectors';
import memoize from 'lodash.memoize';

const selectProducts = state => state.products;
const selectChosenCategory = (_, category) => category;

export const selectProductCategories = createSelector(
  [selectProducts],
  products => products.categories
);

export const selectProductsMap = createSelector(
  [selectProductCategories],
  categories => {
    const productsMap = new Map();
    Object.keys(categories).forEach(category => {
      categories[category].collectionItems.forEach(item => productsMap.set(item.id, item));
    });
    return productsMap;
  }
);

export const selectProductCategory = createSelector(
  [selectProductCategories, selectChosenCategory],
  (categories, category) => categories ? categories[category] : null
);

export const selectAreProductsLoaded = createSelector(
  [selectProducts],
  products => Object.keys(products.categories).length > 0 ? true : false
);

export const selectCollectionItems = createSelector(
  [selectProductCategory],
  category => category ? category['collectionItems'] : null
)

export const selectMinMaxPrice = createSelector(
  [selectCollectionItems],
  collectionItems => {
    const prices = (collectionItems.map(item => parseInt(item['price']))).sort();
    return { minProductPrice: prices[0], maxProductPrice: prices[prices.length - 1] };
  }
);

export const selectFilteredProducts = createSelector(
  [selectCollectionItems, selectPriceFilter, selectSortRule],
  (collectionItems, { minPriceThreshold, maxPriceThreshold }, { sortBy, order }) => {
    const filtered = collectionItems.filter(({ price }) => parseInt(price) >= minPriceThreshold && parseInt(price) <= maxPriceThreshold);
    return filtered.sort(getCompareFunction(sortBy, order));
  }
);

export const selectProduct = createSelector(
  [selectProductsMap],
  productsMap => memoize(id => productsMap.get(id))
);

export const selectChosenProducts = createSelector(
  [selectProductsMap],
  productsMap => memoize(ids => ids.map(id => productsMap.get(id)))
);
