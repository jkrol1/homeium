import productsActionTypes from './productsActionTypes';

const INITIAL_STATE = {
  categories: {},
  errorMessage: undefined
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productsActionTypes.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      }
    case productsActionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        categories: { ...action.payload }
      }
    default:
      return state;
  };
};

export default productsReducer;


