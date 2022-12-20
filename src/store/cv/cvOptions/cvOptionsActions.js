import { ADD_OPTIONS, ADD_FIELD_OPTIONS } from './cvOptionsActionTypes';

//triggers
export const addFieldOptions = payload => ({
  type: ADD_FIELD_OPTIONS,
  payload,
});
export const addOptions = payload => ({
  type: ADD_OPTIONS,
  payload,
});
