import { put, takeEvery, call } from 'redux-saga/effects';
import { apiLogin } from '../../../api/auth/apiLogin';
import { respLoginError, respLoginSuccess } from './loginActions';
import { SET_LOGIN_FIELDS } from './loginActionTypes';

export function* loginSaga({ payload }) {
  try {
    const data = yield call(apiLogin, payload);

    yield put(respLoginSuccess(data));
  } catch (error) {
    yield put(respLoginError(error));
  }
}

export function* loginWatcher() {
  yield takeEvery(SET_LOGIN_FIELDS, loginSaga);
}
