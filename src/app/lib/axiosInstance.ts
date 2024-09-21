// lib/axiosInstance.ts
import axios from 'axios';

// Membuat instance axios
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Ganti dengan base URL API Anda
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Tambahkan token ke header Authorization jika ada
    const savedAuthData = localStorage.getItem('authData')
    let token = '';
    if(savedAuthData) {
        token = JSON.parse(savedAuthData).token
    }
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Tangani error di sini, misalnya redirect ke login jika token tidak valid
    if (error.response.status === 401) {
      // Misalnya redirect ke halaman login jika unauthorized
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
