import { createSelector } from 'reselect';

export const localCv = state => state?.cvAllUserFields || [];
export const userCv = state => state?.userCv || [];

export const selectUserCards = createSelector([localCv, userCv], (local, user) => {
  const userCv = user.cv.data;

  return {
    ...local,
    ...userCv,
  };
});
