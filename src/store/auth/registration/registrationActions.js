import {
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  SET_REGISTRATION_FIELDS,
  RESET_REGISTRATION,
} from './registrationActionTypes';

export const setRegistrationFields = payload => ({
  type: SET_REGISTRATION_FIELDS,
  payload,
});
export const resetRegistration = payload => ({
  type: RESET_REGISTRATION,
  payload,
});
export const respRegistrationSuccess = payload => ({
  type: REGISTRATION_SUCCESS,
  payload,
});
export const respRegistrationError = payload => ({
  type: REGISTRATION_ERROR,
  payload,
});
