import { FETCH_CHECK_AUTH, CHECK_AUTH_SUCCESS, CHECK_AUTH_ERROR } from './checkAuthActionTypes';

export const fetchCheckAuth = payload => ({
  type: FETCH_CHECK_AUTH,
  payload,
});
export const respCheckAuthSuccess = payload => ({
  type: CHECK_AUTH_SUCCESS,
  payload,
});
export const respCheckAuthError = payload => ({
  type: CHECK_AUTH_ERROR,
  payload,
});
