import axios from 'axios';

// Create Axios instance
export const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Pointing to the new Node backend
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add interceptor to inject auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('edunova_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Export a generic mock delay if still needed for UI purposes
export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
