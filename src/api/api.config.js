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
