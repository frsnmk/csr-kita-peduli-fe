// lib/axiosInstance.ts
import axios from "axios";
import toast from "react-hot-toast";

// Membuat instance axios
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Ganti dengan base URL API Anda
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Tambahkan token ke header Authorization jika ada
    let savedAuthData;
    if (typeof window != "undefined") {
      savedAuthData = localStorage.getItem("authData");
    }

    let token = "";
    if (savedAuthData) {
      token = JSON.parse(savedAuthData).token;
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
      console.log(error);
      // Misalnya redirect ke halaman login jika unauthorized
      toast.error('Sesi sudah habis, silahkan login lagi')
      // localStorage.removeItem('authData'); // Hapus token dari localStorage
      // window.location.href = '/profiles'; // R
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
