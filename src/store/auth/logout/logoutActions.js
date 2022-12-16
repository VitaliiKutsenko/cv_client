import { FETCH_LOGOUT, LOGOUT_SUCCESS, LOGOUT_ERROR } from './logoutActionTypes';

export const fetchLogout = payload => ({
  type: FETCH_LOGOUT,
  payload,
});
export const respLogoutSuccess = payload => ({
  type: LOGOUT_SUCCESS,
  payload,
});
export const respLogoutError = payload => ({
  type: LOGOUT_ERROR,
  payload,
});
