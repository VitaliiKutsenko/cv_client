import { LOGOUT_SUCCESS, LOGOUT_ERROR } from './logoutActionTypes';

const initialState = {
  success: null,
  error: null,
};

export const logout = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGOUT_SUCCESS:
      if (payload?.success) {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
      }

      return {
        ...state,
        error: null,
        success: payload,
      };

    case LOGOUT_ERROR:
      return {
        ...state,
        error: payload,
        success: null,
      };

    default:
      return state;
  }
};
