import { createSelector } from 'reselect';
import { CvCard } from '../pages/cvPage/components/cvCards/cvCard';

export const localCv = store => store.userCv || [];

export const selectUserCv = createSelector([localCv], local => {
  const leftColumn = {};
  const rightColumn = {};
  const userCv = local.cv.data;

  Object.entries(userCv || []).map(item => {
    const [path, values] = item;

    values.map((item, id, entries) => {
      if (item.options.area.position === 'left') {
        leftColumn[path] = entries;
      }

      if (item.options.area.position === 'right') {
        rightColumn[path] = entries;
      }
    });
  });

  return {
    leftColumn,
    rightColumn,
  };
});
