import { $api } from '../api.config';

export const apiCheckAuth = async () => {
  return await $api
    .get('/auth_me')
    .then(({ data }) => data)
    .catch(error => Promise.reject(error.response.data.message));
};
