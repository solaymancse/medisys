import axios from 'axios';
import { getToken, removeToken } from './token';

// Base Axios instance
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API, // Replace with your API URL
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor to include token in headers
axiosInstance.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle errors and token-related issues
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            console.error('Unauthorized! Token might be expired. Redirecting to login...');
            removeToken();
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
