import { all } from 'redux-saga/effects';

import { checkAuthWatcher } from './checkAuth/checkAuthSaga';
import { loginWatcher } from './login/loginSaga';
import { logoutWatcher } from './logout/logoutSaga';
import { registrationWatcher } from './registration/registrationSaga';
import { resetPasswordWatcher } from './resetPassword/resetPasswordSaga';

export function* authSagaWatchers() {
  yield all([
    checkAuthWatcher(),
    loginWatcher(),
    logoutWatcher(),
    registrationWatcher(),
    resetPasswordWatcher(),
  ]);
}
