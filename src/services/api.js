import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:2123'
});

export default api;