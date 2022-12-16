import { combineReducers } from 'redux';
import { checkAuth } from './checkAuth/checkAuthReducer';
import { login } from './login/loginReducer';
import { logout } from './logout/logoutReducer';
import { registration } from './registration/registrationReducer';
import { resetPassword } from './resetPassword/resetPasswordReducer';

export const auth = combineReducers({
  checkAuth,
  login,
  logout,
  registration,
  resetPassword,
});
