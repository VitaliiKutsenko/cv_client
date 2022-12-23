import {
  ADD_CV_FIELD_SUCCESS,
  FETCH_USER_CV_SUCCESS,
  REJECT_USER_CV,
  REMOVE_CV_FIELD_SUCCESS,
  CHANGE_OPTIONS,
} from './userCvActionTypes';

const initialState = {
  cv: {},
  success: null,
  error: null,
};

export const userCv = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_OPTIONS:
      const { id, options, path } = payload;

      const changeOptionsItem = {
        ...state.cv.data,

        [path]: state.cv.data[path].map(item => {
          if (item.id === id) {
            return {
              ...item,
              options,
            };
          }

          return item;
        }),
      };

      return {
        ...state,
        success: true,
        error: null,
        cv: {
          ...state.cv,
          data: { ...changeOptionsItem },
        },
      };

    case FETCH_USER_CV_SUCCESS:
      return {
        ...state,
        success: true,
        error: null,
        cv: { ...payload },
      };

    case ADD_CV_FIELD_SUCCESS:
      const keys = Object.keys(payload);

      return {
        ...state,
        success: true,
        error: null,
        cv: {
          ...state.cv,
          data: {
            ...state.cv.data,
            [keys]: payload[keys],
          },
        },
      };

    case REMOVE_CV_FIELD_SUCCESS:
      return {
        ...state,
        success: true,
        error: null,
        cv: { ...payload },
      };

    case REJECT_USER_CV:
      return {
        ...state,
        success: false,
        error: payload,
      };

    default:
      return state;
  }
};
