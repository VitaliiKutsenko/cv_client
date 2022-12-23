import { $api, promiseReject, promiseSuccess } from '../api.config';

export const cv = {
  get: {
    userField: async payload => {
      return await $api
        .get(`/cv/${payload.username}/${payload.name}`)
        .then(promiseSuccess())
        .catch(promiseReject());
    },
  },
  post: {
    userImage: async payload => {
      return await $api.post(`/upload`, payload).then(promiseSuccess()).catch(promiseReject());
    },
    userField: async payload => {
      return await $api.post(`/cv`, payload).then(promiseSuccess()).catch(promiseReject());
    },
  },
  put: {},
  delete: {
    userField: async payload => {
      return await $api
        .delete(`/cv/${payload.path}/${payload.id}`)
        .then(promiseSuccess())
        .catch(promiseReject());
    },
  },
};
