import { put, takeEvery, call } from 'redux-saga/effects';
import { respCheckAuthError, respCheckAuthSuccess } from './checkAuthActions';
import { FETCH_CHECK_AUTH } from './checkAuthActionTypes';
import { apiCheckAuth } from '../../../api/auth/apiCheckAuth';
import ye from 'react-datepicker';
import { toggleLoader } from '../../loader/loaderActions';

export function* checkAuthSaga({ payload }) {
  yield put(toggleLoader(true));

  try {
    const data = yield call(apiCheckAuth, payload);

    yield put(
      respCheckAuthSuccess({
        success: true,
        data,
      })
    );
  } catch (error) {
    yield put(
      respCheckAuthError({
        success: false,
        error,
      })
    );
  }

  yield put(toggleLoader(false));
}

export function* checkAuthWatcher() {
  yield takeEvery(FETCH_CHECK_AUTH, checkAuthSaga);
}
