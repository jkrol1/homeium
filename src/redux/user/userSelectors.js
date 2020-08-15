import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.activeUser
);

export const selectAuthError = createSelector(
  [selectUser],
  user => user.error
);

export const selectShowSignInError = createSelector(
  [selectUser],
  user => user.showSignInError
);

export const selectShowSignUpError = createSelector(
  [selectUser],
  user => user.showSignUpError
);