import { UPLOAD_USER_IMAGE_SUCCESS, UPLOAD_USER_IMAGE_REJECT } from './userImageActionTypes';

const initialState = {
  image: null,
  success: null,
  error: null,
};

export const userImage = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPLOAD_USER_IMAGE_SUCCESS:
      return {
        ...state,
        success: true,
        error: null,
        image: { ...payload },
      };

    case UPLOAD_USER_IMAGE_REJECT:
      return {
        ...state,
        success: false,
        image: null,
        error: payload,
      };

    default:
      return state;
  }
};
