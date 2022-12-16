import {
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  RESET_REGISTRATION,
} from './registrationActionTypes';

const initialState = {
  success: null,
  error: null,
};

export const registration = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        success: payload,
        error: null,
      };

    case REGISTRATION_ERROR:
      return {
        ...state,
        success: null,
        error: payload,
      };

    case RESET_REGISTRATION:
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
};
