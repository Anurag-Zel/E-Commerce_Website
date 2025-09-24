import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5001';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const normalizedError = new Error(
      error?.response?.data?.message || error?.message || 'Something went wrong'
    );
    normalizedError.status = error?.response?.status;
    normalizedError.data = error?.response?.data;
    return Promise.reject(normalizedError);
  }
);

export default apiClient;
