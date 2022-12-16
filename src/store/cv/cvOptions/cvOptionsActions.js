import { ADD_CV_CARD_OPTIONS, ADD_CV_FIELD_OPTIONS, GET_OPTIONS } from './cvOptionsActionTypes';

//triggers
export const getOptions = payload => ({
  type: GET_OPTIONS,
  payload,
});
export const addCvCardOptions = payload => ({
  type: ADD_CV_CARD_OPTIONS,
  payload,
});

export const addCvFieldOptions = payload => ({
  type: ADD_CV_FIELD_OPTIONS,
  payload,
});
