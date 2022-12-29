import axios from 'axios';

export const API_URL = `https://cv-server-taupe.vercel.app/api`;
// export const API_URL = `http://localhost:5000/api`;

export const $api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

$api.interceptors.request.use(async config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

  return config;
});

export const promiseSuccess = () => {
  return ({ data }) => {
    return { ...data };
  };
};

export const promiseReject = () => {
  return error => Promise.reject(error.response.data);
};
