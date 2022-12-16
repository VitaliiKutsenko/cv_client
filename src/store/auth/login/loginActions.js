import { SET_LOGIN_FIELDS, LOGIN_SUCCESS, LOGIN_ERROR, RESET_LOGIN } from './loginActionTypes';

export const setLoginFields = payload => ({
  type: SET_LOGIN_FIELDS,
  payload,
});
export const respLoginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload,
});
export const respLoginError = payload => ({
  type: LOGIN_ERROR,
  payload,
});
export const clearLoginStore = payload => ({
  type: RESET_LOGIN,
  payload,
});
