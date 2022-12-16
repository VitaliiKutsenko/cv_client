import {
  FETCH_USER_CV,
  REMOVE_CV_FIELD,
  FETCH_USER_CV_SUCCESS,
  ADD_CV_FIELD,
  ADD_CV_FIELD_SUCCESS,
  REMOVE_CV_FIELD_SUCCESS,
  REJECT_USER_CV,
  CHANGE_OPTIONS,
} from './userCvActionTypes';

//triggers
export const fetchUserCv = payload => ({
  type: FETCH_USER_CV,
  payload,
});
export const changeOptions = payload => ({
  type: CHANGE_OPTIONS,
  payload,
});

export const addCvField = payload => ({
  type: ADD_CV_FIELD,
  payload,
});
export const removeCvField = payload => ({
  type: REMOVE_CV_FIELD,
  payload,
});
// success
export const addCvFieldSuccess = payload => ({
  type: ADD_CV_FIELD_SUCCESS,
  payload,
});

export const removeCvFieldSuccess = payload => ({
  type: REMOVE_CV_FIELD_SUCCESS,
  payload,
});

export const fetchUserCvSuccess = payload => ({
  type: FETCH_USER_CV_SUCCESS,
  payload,
});

//error
export const rejectUserCv = payload => ({
  type: REJECT_USER_CV,
  payload,
});
