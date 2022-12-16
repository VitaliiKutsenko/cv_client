import { $api } from '../api.config';

export const apiLogout = async () => {
  return await $api
    .post('/logout')
    .then(({ data }) => data)
    .catch(error => Promise.reject(error.response.data));
};
