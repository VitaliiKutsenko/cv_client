import { $api } from '../api.config';

export const apiRegistration = async payload => {
  return await $api
    .post('/registration', payload)
    .then(({ data }) => data)
    .catch(error => Promise.reject(error.response.data));
};
