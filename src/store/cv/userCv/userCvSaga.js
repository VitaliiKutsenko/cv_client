import { put, takeEvery, call } from 'redux-saga/effects';
import { FETCH_USER_CV, ADD_CV_FIELD, REMOVE_CV_FIELD } from './userCvActionTypes';
import { cv } from '../../../api/cv/apiUserCv';
import {
  addCvFieldSuccess,
  fetchUserCvSuccess,
  rejectUserCv,
  removeCvFieldSuccess,
} from './userCvActions';
import { menuFieldsDenied, menuFieldsSuccess } from '../menuFields/cvAllUserFieldsActions';
import { toggleLoader } from '../../loader/loaderActions';

export function* userCvWatcher() {
  yield takeEvery(FETCH_USER_CV, getUserCvSaga);
  yield takeEvery(ADD_CV_FIELD, postUserCvFieldSaga);
  yield takeEvery(REMOVE_CV_FIELD, removeUserCvSaga);
}

export function* getUserCvSaga({ payload }) {
  yield put(toggleLoader(true));
  try {
    const data = yield call(cv.get.userField, payload);

    yield put(fetchUserCvSuccess(data));
    yield put(menuFieldsSuccess(data));
  } catch (error) {
    yield put(rejectUserCv(error));
    yield put(menuFieldsDenied(error));
  }

  yield put(toggleLoader(false));
}

export function* postUserCvFieldSaga({ payload }) {
  try {
    const data = yield call(cv.post.userField, payload);

    yield put(addCvFieldSuccess(data));
  } catch (error) {
    yield put(rejectUserCv(error));
  }
}

export function* removeUserCvSaga({ payload }) {
  if (payload.id) {
    const data = yield call(cv.delete.userField, payload);

    try {
      yield put(removeCvFieldSuccess(data));
    } catch (hasError) {
      yield put(rejectUserCv(data));
    }
  }
}
