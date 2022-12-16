import { LOGIN_SUCCESS, LOGIN_ERROR, RESET_LOGIN } from './loginActionTypes';

const initialState = {
  success: null,
  error: null,
};

export const login = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      if (payload?.accessToken) {
        localStorage.setItem('token', payload.accessToken);
        const userIdGenerator = user => {
          const { id, username } = user;

          return `${username}_${id}`;
        };

        localStorage.setItem('userId', userIdGenerator(payload.user));
      }

      return {
        ...state,
        success: payload,
        error: false,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        success: false,
        error: payload,
      };

    case RESET_LOGIN:
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
};
