import { put, takeEvery, call } from 'redux-saga/effects';
import { FETCH_LOGOUT } from './logoutActionTypes';
import { respLogoutError, respLogoutSuccess } from './logoutActions';
import { apiLogout } from '../../../api/auth/apiLogout';

export function* logoutSaga({ payload }) {
  try {
    const data = yield call(apiLogout, payload);

    yield put(respLogoutSuccess(data));
  } catch (error) {
    yield put(respLogoutError(error));
  }
}

export function* logoutWatcher() {
  yield takeEvery(FETCH_LOGOUT, logoutSaga);
}
