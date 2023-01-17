import {
  RESPONSE_USER_FIELDS_DENIED,
  RESPONSE_USER_FIELDS_SUCCESS,
  ADD_FIELDS,
  ADD_NEW_FIELD,
  REMOVE_NEW_FIELD,
} from './cvAllUserFieldsActionTypes';
import { modalFieldsSchema } from '../../../features/cvMenu/schema/modalFields';
import { cvReducerServices } from './cvAllUserFieldsReducerServices';
import { contentFieldsSchema } from '../../../features/cvMenu/schema/contentFields';

const initialState = { ...contentFieldsSchema };

export const cvAllUserFields = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FIELDS:
      return {
        ...state,
        ...cvReducerServices.addAdditionalFields(state, payload),
      };

    case ADD_NEW_FIELD:
      return {
        ...state,
        ...cvReducerServices.addAdditionalPage(modalFieldsSchema, state, payload),
      };

    case REMOVE_NEW_FIELD:
      return {
        ...state,
        ...cvReducerServices.removeAdditionalPage(state, payload),
      };

    case RESPONSE_USER_FIELDS_SUCCESS:
      return {
        ...state,
        ...payload.data,
      };

    case RESPONSE_USER_FIELDS_DENIED:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};
