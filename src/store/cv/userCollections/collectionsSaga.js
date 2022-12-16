import { put, call } from 'redux-saga/effects';
import {
  deleteCollections,
  getAllCollections,
  postNewCollection,
} from '../../../api/cv/apiUserCollection';
import { fetchCollectionsSuccess, fetchCollectionsError } from './collectionsActions';

export function* collectionsSaga({ payload }) {
  try {
    const data = yield call(getAllCollections, payload);

    yield put(fetchCollectionsSuccess(data));
  } catch (error) {
    yield put(fetchCollectionsError(error));
  }
}

export function* addNewCollectionSaga({ payload }) {
  try {
    const data = yield call(postNewCollection, payload);

    yield put(fetchCollectionsSuccess(data));
  } catch (error) {
    yield put(fetchCollectionsError(error));
  }
}

export function* removeCollectionSaga({ payload }) {
  try {
    const data = yield call(deleteCollections, payload);

    yield put(fetchCollectionsSuccess(data));
  } catch (error) {
    yield put(fetchCollectionsError(error));
  }
}
