import { createSelector } from 'reselect';

const selectWindow = state => state.window;

export const selectWindowSize = createSelector(
  [selectWindow],
  window => window.size
);

export const selectWindowWidth = createSelector(
  [selectWindowSize],
  size => size.width
);

export const selectWindowHeight = createSelector(
  [selectWindowSize],
  size => size.height
);

export const selectDocumentHeight = createSelector(
  [selectWindowSize],
  size => size.documentElementHeight
);