import filtersMenuActionTypes from './filtersMenuActionTypes';

const INITIAL_STATE = {
  isSingleColumnLayout: true,
  priceFilter: { minPriceThreshold: 0, maxPriceThreshold: 1 },
  sortRule: { sortBy: 'price', order: 'ascending' }
};

const filtersMenuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case filtersMenuActionTypes.TOGGLE_COLLECTION_LAYOUT:
      return {
        ...state,
        isSingleColumnLayout: !state['isSingleColumnLayout']
      };
    case filtersMenuActionTypes.CHANGE_MIN_PRICE_THRESHOLD:
      return {
        ...state,
        priceFilter: { ...state.priceFilter, minPriceThreshold: action.payload }
      };
    case filtersMenuActionTypes.CHANGE_MAX_PRICE_THRESHOLD:
      return {
        ...state,
        priceFilter: { ...state.priceFilter, maxPriceThreshold: action.payload }
      };
    case filtersMenuActionTypes.CHANGE_SORT_RULE:
      return {
        ...state,
        sortRule: { ...state.sortRule, sortBy: action.payload.sortBy, order: action.payload.order }
      };
    default:
      return state;
  };
};

export default filtersMenuReducer;