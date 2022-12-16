import { $api } from '../api.config';

export const apiLogin = async payload => {
  return await $api
    .post('/login', payload)
    .then(({ data }) => data)
    .catch(error => Promise.reject(error.response.data));
};
