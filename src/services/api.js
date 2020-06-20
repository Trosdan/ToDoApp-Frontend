import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

api.interceptors.request.use(async config => {
  const token = localStorage.getItem('@user:Token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // const token = localStorage.getItem('@user:Token');
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }
  return config;
});

export default api;
