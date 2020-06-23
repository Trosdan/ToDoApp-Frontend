import axios from 'axios';
import { toast } from 'react-toastify';
import history from './history';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

api.interceptors.request.use(async config => {
  const token = localStorage.getItem('@user:Token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    config.headers.Authorization = ``;
  }
  return config;
});

api.interceptors.response.use(
  res => res,
  error => {
    if (error.response.status === 401) {
      localStorage.clear();
      toast('Sessão expirada.', { type: 'warning' });
      history.push('/');
    }
    return error;
  }
);

export default api;
