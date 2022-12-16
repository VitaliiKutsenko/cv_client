import { ADD_CV_CARD_OPTIONS, ADD_CV_FIELD_OPTIONS, GET_OPTIONS } from './cvOptionsActionTypes';

const initialState = {
  cvCard: {
    background: '',
    borderRadius: '',
  },
  cvFields: {},
  error: null,
};

export const options = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CV_CARD_OPTIONS:
      return {
        ...state,
        cvCard: {
          ...state.cvCard,
          payload,
        },
      };

    case ADD_CV_FIELD_OPTIONS:
      return {
        ...state,
        cvFields: {
          ...state.cvFields,
          payload,
        },
      };

    case GET_OPTIONS:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};
