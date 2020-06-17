import filtersMenuActionTypes from './filtersMenuActionTypes';

const INITIAL_STATE = {
    isSingleColumnLayout: true,
    showFiltersWindow: false,
    showClearFiltersOption: false,
    priceFilter: { minPriceThreshold: 0, maxPriceThreshold: 1 },
    sortRule: { sortBy: 'name', order: 'ascending' }
};

const filtersMenuReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case filtersMenuActionTypes.TOGGLE_COLLECTION_LAYOUT:
            return {
                ...state,
                isSingleColumnLayout: !state['isSingleColumnLayout']
            };
        case filtersMenuActionTypes.TOGGLE_FILTERS_WINDOW:
            return {
                ...state,
                showFiltersWindow: !state['showFiltersWindow']
            };
        case filtersMenuActionTypes.TOGGLE_CLEAR_FILTERS_OPTION:
            return {
                ...state,
                showClearFiltersOption: !state['showClearFiltersOption']
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
                priceFilter: { ...state.sortRule, sortBy: action.payload.sortBy, order: action.payload.order }
            };
        default:
            return state;
    };
};

export default filtersMenuReducer;