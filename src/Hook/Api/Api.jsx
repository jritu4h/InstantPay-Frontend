import axios from 'axios';

const api = axios.create({
  baseURL: 'https://instant-pay-server.vercel.app', // Make sure to use the correct backend URL
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access-token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
