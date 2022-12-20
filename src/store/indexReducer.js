import { combineReducers } from 'redux';

import { cvAllUserFields } from './cv/userCvFields/cvAllUserFieldsReducer';
import { userCv } from './cv/userCv/userCvReducer';
import { auth } from './auth/authReducers';
import { loader } from './loader/loaderReducer';
import { collections } from './cv/userCollections/collectionsReducer';
import { userImage } from './cv/userImage/userImageReducer';
import { cvOptions } from './cv/cvOptions/cvOptionsReducer';

export const appReducer = combineReducers({
  auth,
  collections,
  cvAllUserFields,
  userCv,
  loader,
  userImage,
  cvOptions,
});

export const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_SUCCESS') {
    state = undefined;
  }

  return appReducer(state, action);
};
