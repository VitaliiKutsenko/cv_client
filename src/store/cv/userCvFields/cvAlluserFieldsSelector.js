import { createSelector } from 'reselect';

export const localCv = state => state?.cvAllUserFields || [];
export const userCv = state => state?.userCv || [];

export const selectUserCards = createSelector([localCv, userCv], (local, user) => {
  const userCv = user.cv.data;
  const data = {};

  Object.entries(local).map(item => {
    const [keys, values] = item;

    values.map(item => {
      if (userCv[keys]) {
        const findField = userCv[keys].map(items => {
          if (items.id === item.id) {
            return items;
          }

          return items;
        });

        return (data[keys] = findField);
      }

      return (data[keys] = item);
    });
  });

  return { ...data };
});
