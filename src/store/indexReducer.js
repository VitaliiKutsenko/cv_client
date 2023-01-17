import { combineReducers } from 'redux';

import { cvAllUserFields } from './cv/menuFields/cvAllUserFieldsReducer';
import { userCv } from './cv/userCv/userCvReducer';
import { auth } from './auth/authReducers';
import { loader } from './loader/loaderReducer';
import { collections } from './cv/userCollections/collectionsReducer';
import { userImage } from './cv/userImage/userImageReducer';
import { cvOptions } from './cv/cvOptions/cvOptionsReducer';
import { languages } from './languages/languagesReducer';

export const appReducer = combineReducers({
  auth,
  collections,
  cvAllUserFields,
  userCv,
  loader,
  userImage,
  cvOptions,
  languages,
});

export const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_SUCCESS') {
    state = undefined;
  }

  return appReducer(state, action);
};
