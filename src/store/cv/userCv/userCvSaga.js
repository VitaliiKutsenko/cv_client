import { put, takeEvery, call } from 'redux-saga/effects';
import { deleteUserField, getAllUserFields, postUserCvField } from '../../../api/cv/apiUserCv';
import { FETCH_USER_CV, ADD_CV_FIELD, REMOVE_CV_FIELD } from './userCvActionTypes';
import {
  addCvFieldSuccess,
  fetchUserCv,
  fetchUserCvSuccess,
  rejectUserCv,
  removeCvField,
  removeCvFieldSuccess,
} from './userCvActions';

export function* userCvWatcher() {
  yield takeEvery(FETCH_USER_CV, getUserCvSaga);
  yield takeEvery(ADD_CV_FIELD, postUserCvFieldSaga);
  yield takeEvery(REMOVE_CV_FIELD, removeUserCvSaga);
}

export function* getUserCvSaga({ payload }) {
  try {
    const data = yield call(getAllUserFields, payload);

    yield put(fetchUserCvSuccess(data));
  } catch (error) {
    yield put(rejectUserCv(error));
  }
}

export function* postUserCvFieldSaga({ payload }) {
  try {
    const data = yield call(postUserCvField, payload);

    yield put(addCvFieldSuccess(data));
  } catch (error) {
    yield put(rejectUserCv(error));
  }
}

export function* removeUserCvSaga({ payload }) {
  if (payload.id) {
    const data = yield call(deleteUserField, payload);

    try {
      yield put(removeCvFieldSuccess(data));
    } catch (hasError) {
      yield put(rejectUserCv(data));
    }
  }
}
