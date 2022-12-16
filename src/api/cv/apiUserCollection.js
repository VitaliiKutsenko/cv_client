import { $api } from '../api.config';

export const getAllCollections = async () => {
  return await $api
    .get(`/collections`)
    .then(({ data }) => data)
    .catch(error => Promise.reject(error.response.data));
};

export const postNewCollection = async payload => {
  return await $api
    .post(`/collections`, payload)
    .then(({ data }) => data)
    .catch(error => Promise.reject(error.response.data));
};

export const deleteCollections = async payload => {
  return await $api
    .delete(`/collections/${payload}`)
    .then(({ data }) => data)
    .catch(error => error.response.data);
};

export const getOneCollection = async payload => {
  return await $api
    .get(`/collections/${payload}`)
    .then(({ data }) => data)
    .catch(error => Promise.reject(error));
};
