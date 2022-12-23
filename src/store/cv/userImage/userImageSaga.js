import { put, takeEvery, call } from 'redux-saga/effects';
import { postUserImage } from '../../../api/cv/apiUserCv';
import { UPLOAD_USER_IMAGE } from './userImageActionTypes';
import { uploadUserImageReject, uploadUserImageSuccess } from './userImageActions';
import { cv } from '../../../api/cv/apiUserCv';

export function* uploadImageWatcher() {
  yield takeEvery(UPLOAD_USER_IMAGE, uploadImageSaga);
}

export function* uploadImageSaga({ payload }) {
  try {
    const data = yield call(cv.post.userImage, payload);

    yield put(uploadUserImageSuccess(data));
  } catch (error) {
    yield put(uploadUserImageReject(error));
  }
}
