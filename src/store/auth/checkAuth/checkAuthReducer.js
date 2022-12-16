import { CHECK_AUTH_SUCCESS, CHECK_AUTH_ERROR } from './checkAuthActionTypes';

const initialState = { success: false };

export const checkAuth = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHECK_AUTH_SUCCESS:
      return {
        ...state,
        auth: 'accept',
        success: true,
        error: false,
        ...payload,
      };

    case CHECK_AUTH_ERROR:
      return {
        ...state,
        auth: 'decline',
        success: false,
        error: true,
      };

    default:
      return state;
  }
};
