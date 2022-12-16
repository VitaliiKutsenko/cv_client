import { all } from 'redux-saga/effects';

import { userCvWatcher } from '../cv/userCv/userCvSaga';
import { authSagaWatchers } from '../auth/authSaga';
import { collectionsSagaWatchers } from '../cv/userCollections/combineCollectionsSaga';
import { uploadImageWatcher } from '../cv/userImage/userImageSaga';

export function* rootSaga() {
  yield all([authSagaWatchers(), collectionsSagaWatchers(), userCvWatcher(), uploadImageWatcher()]);
}
