import { put, takeEvery, call } from 'redux-saga/effects';
import { SET_RESET_PASSWORD_FIELDS } from './resetPasswordActionTypes';
import { respResetPasswordError, respResetPasswordSuccess } from './resetPasswordActions';
import { apiResetPassword } from '../../../api/auth/apiResetPassword';

export function* resetPasswordSaga({ payload }) {
  const data = yield call(apiResetPassword, payload);

  try {
    yield put(respResetPasswordSuccess(data));
  } catch (hasError) {
    yield put(respResetPasswordError({ ...data }));
  }
}

export function* resetPasswordWatcher() {
  yield takeEvery(SET_RESET_PASSWORD_FIELDS, resetPasswordSaga);
}
