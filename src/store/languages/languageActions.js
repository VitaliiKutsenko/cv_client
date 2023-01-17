import { CHANGE_LANGUAGE } from './languageActionTypes';

export const changeLanguage = payload => ({
  type: CHANGE_LANGUAGE,
  payload,
});
