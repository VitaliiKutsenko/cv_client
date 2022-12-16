import { $api } from '../api.config';

export const apiResetPassword = async payload => {
  return await $api
    .post('/authorization/reset-password', payload)
    .then(({ data }) => data)
    .catch(error => Promise.reject(error.response.data));
};
