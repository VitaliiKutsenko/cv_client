import {
  FETCH_COLLECTIONS_ERROR,
  FETCH_COLLECTIONS_SUCCESS,
  CLEAR_COLLECTIONS_MESSAGE,
} from './collectionsActionTypes';

const initialState = {
  collections: [],
  success: null,
  error: null,
};

export const collections = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: [...payload.collections],
        success: true,
        error: false,
      };

    case FETCH_COLLECTIONS_ERROR:
      return {
        ...state,
        success: false,
        error: payload,
      };

    case CLEAR_COLLECTIONS_MESSAGE:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
