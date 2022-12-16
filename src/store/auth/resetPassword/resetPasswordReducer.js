import { RESET_PASSWORD_SUCCESS, RESET_PASSWORD_ERROR } from './resetPasswordActionTypes';

const initialState = {};

export const resetPassword = (state = initialState, { type, payload }) => {
  switch (type) {
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        ...payload,
      };

    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};
