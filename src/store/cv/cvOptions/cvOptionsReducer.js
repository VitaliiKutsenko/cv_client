import { ADD_OPTIONS, ADD_FIELD_OPTIONS } from './cvOptionsActionTypes';

const initialState = {
  cvCardOptions: {},
  cvCardFieldOptions: {},
};

export const cvOptions = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_OPTIONS:
      return {
        ...state,
        cvCardOptions: {
          ...state.cvCardOptions,
          ...payload,
        },
      };

    case ADD_FIELD_OPTIONS:
      return {
        ...state,
        cvCardFieldOptions: {
          ...state.cvCardFieldOptions,
          ...payload,
        },
      };

    default:
      return state;
  }
};
