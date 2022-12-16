import { TOGGLE_LOADER } from './loaderActionTypes';

const initialState = { loader: false };

export const loader = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_LOADER:
      return {
        ...state,
        loader: payload,
      };

    default:
      return state;
  }
};
