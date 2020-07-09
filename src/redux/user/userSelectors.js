import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.activeUser
);

export const selectError = createSelector(
    [selectUser],
    user => user.error
);