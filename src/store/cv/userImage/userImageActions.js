import {
  UPLOAD_USER_IMAGE,
  UPLOAD_USER_IMAGE_SUCCESS,
  UPLOAD_USER_IMAGE_REJECT,
} from './userImageActionTypes';

//triggers
export const uploadUserImage = payload => ({
  type: UPLOAD_USER_IMAGE,
  payload,
});
export const uploadUserImageSuccess = payload => ({
  type: UPLOAD_USER_IMAGE_SUCCESS,
  payload,
});

export const uploadUserImageReject = payload => ({
  type: UPLOAD_USER_IMAGE_REJECT,
  payload,
});
