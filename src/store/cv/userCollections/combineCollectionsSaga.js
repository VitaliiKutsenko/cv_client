import { all, takeEvery } from 'redux-saga/effects';
import { collectionsSaga, addNewCollectionSaga, removeCollectionSaga } from './collectionsSaga';

import {
  FETCH_ALL_COLLECTIONS,
  REMOVE_COLLECTION,
  ADD_NEW_COLLECTION,
} from './collectionsActionTypes';

export function* addNewCollectionWatcher() {
  yield takeEvery(ADD_NEW_COLLECTION, addNewCollectionSaga);
}

export function* fetchAllCollections() {
  yield takeEvery(FETCH_ALL_COLLECTIONS, collectionsSaga);
}

export function* removeCollectionWatcher() {
  yield takeEvery(REMOVE_COLLECTION, removeCollectionSaga);
}

export function* collectionsSagaWatchers() {
  yield all([fetchAllCollections(), addNewCollectionWatcher(), removeCollectionWatcher()]);
}
