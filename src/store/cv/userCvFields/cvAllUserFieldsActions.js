import {
  FETCH_USER_FIELDS,
  RESPONSE_USER_FIELDS_DENIED,
  RESPONSE_USER_FIELDS_SUCCESS,
  ADD_FIELDS,
  ADD_NEW_FIELD,
  REMOVE_NEW_FIELD,
  SET_USER_CARD,
} from './cvAllUserFieldsActionTypes';

export const fetchAllUserFields = payload => {
  return {
    type: FETCH_USER_FIELDS,
    payload,
  };
};

export const getAllUserFieldsSuccess = payload => ({
  type: RESPONSE_USER_FIELDS_SUCCESS,
  payload,
});
export const getAllUserFieldsDenied = payload => ({
  type: RESPONSE_USER_FIELDS_DENIED,
  payload,
});

export const addCvData = payload => ({
  type: ADD_FIELDS,
  payload,
});

export const addAdditionalField = payload => ({
  type: ADD_NEW_FIELD,
  payload,
});
export const removeAdditionalField = payload => ({
  type: REMOVE_NEW_FIELD,
  payload,
});
export const setUserCard = payload => {
  return {
    type: SET_USER_CARD,
    payload,
  };
};
