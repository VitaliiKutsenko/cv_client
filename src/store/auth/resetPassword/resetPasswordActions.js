import {
  SET_RESET_PASSWORD_FIELDS,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
} from './resetPasswordActionTypes';

export const setResetPasswordFields = payload => ({
  type: SET_RESET_PASSWORD_FIELDS,
  payload,
});
export const respResetPasswordSuccess = payload => ({
  type: RESET_PASSWORD_SUCCESS,
  payload,
});
export const respResetPasswordError = payload => ({
  type: RESET_PASSWORD_ERROR,
  payload,
});
