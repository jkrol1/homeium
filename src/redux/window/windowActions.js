import windowActionTypes from './windowActionTypes';

export const getWindowSize = size => ({
  type: windowActionTypes.GET_WINDOW_SIZE,
  payload: size
});
