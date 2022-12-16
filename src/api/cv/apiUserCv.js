import { $api } from '../api.config';

export const getAllUserFields = async payload => {
  return await $api
    .get(`/cv/${payload.username}/${payload.name}`)
    .then(({ data }) => {
      return { ...data };
    })
    .catch(error => Promise.reject(error.response.data));
};

export const deleteUserField = async payload => {
  return await $api
    .delete(`/cv/${payload.path}/${payload.id}`)
    .then(({ data }) => data)
    .catch(error => Promise.reject(error.response.data));
};

export const postUserCvField = async payload => {
  return await $api
    .post(`/cv`, payload)
    .then(({ data }) => data)
    .catch(error => Promise.reject(error.response.data));
};

export const postUserImage = async payload => {
  console.log(payload.get('collectionId'));

  return await $api
    .post(`/upload`, payload)
    .then(({ data }) => data)
    .catch(error => Promise.reject(error.response.data));
};
