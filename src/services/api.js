import axios from 'axios';

const baseURL = 'http://localhost:5000'; // Replace with your backend URL

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
