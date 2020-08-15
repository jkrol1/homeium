import windowActionTypes from './windowActionTypes';

const INITIAL_STATE = {
  size: {
    height: 0,
    width: 0,
    documentElementHeight: 0
  }
};

const windowReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case windowActionTypes.GET_WINDOW_SIZE:
      return {
        ...state,
        size: {
          ...state.size,
          height: Number(action.payload.height),
          width: Number(action.payload.width),
          documentElementHeight: Number(action.payload.documentElementHeight)
        }
      }
    default:
      return state
  };
};

export default windowReducer;