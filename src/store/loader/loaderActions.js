import { TOGGLE_LOADER } from './loaderActionTypes';

export const toggleLoader = payload => ({
  type: TOGGLE_LOADER,
  payload,
});
