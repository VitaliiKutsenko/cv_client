import { put, takeEvery, call } from 'redux-saga/effects';
import { apiRegistration } from '../../../api/auth/apiRegistration';
import { SET_REGISTRATION_FIELDS } from './registrationActionTypes';
import { respRegistrationError, respRegistrationSuccess } from './registrationActions';

export function* registrationSaga({ payload }) {
  try {
    const data = yield call(apiRegistration, payload);

    yield put(respRegistrationSuccess(data));
  } catch (error) {
    yield put(respRegistrationError(error));
  }
}

export function* registrationWatcher() {
  yield takeEvery(SET_REGISTRATION_FIELDS, registrationSaga);
}
