import {
  FETCH_ALL_COLLECTIONS,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_ERROR,
  ADD_NEW_COLLECTION,
  REMOVE_COLLECTION,
  CLEAR_COLLECTIONS_MESSAGE,
} from './collectionsActionTypes';

export const fetchAllCollections = payload => ({
  type: FETCH_ALL_COLLECTIONS,
  payload,
});
export const clearCollectionsMessage = payload => ({
  type: CLEAR_COLLECTIONS_MESSAGE,
  payload,
});
export const addNewCollection = payload => ({
  type: ADD_NEW_COLLECTION,
  payload,
});

export const removeCollection = payload => ({
  type: REMOVE_COLLECTION,
  payload,
});

export const fetchCollectionsSuccess = payload => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload,
});
export const fetchCollectionsError = payload => ({
  type: FETCH_COLLECTIONS_ERROR,
  payload,
});
