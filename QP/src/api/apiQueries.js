// axiosConfig.js

import axios from "axios";
console.log(import.meta.env.VITE_BASE_URL)

// Create an instance of axios with default configuration
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // Replace with your base URL
  timeout: 30000, // Example timeout
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

// Optionally, you can set up interceptors for handling requests and responses
axiosInstance.interceptors.request.use(
  (config) => {
    //Modify config, such as adding headers or logging
        const token = localStorage.getItem("accessToken");
        // console.log(token)
        // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTE0MTQ3Mzc2NTk0MjY0YjExMDNlZmUiLCJpYXQiOjE3MjAyNTEyMzMsImV4cCI6MTcyMDI5NDQzM30.pUZ0c5O-3Qv3F2X1otZ23sN1LjtsN2sgDWS62Df7tsw
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

export default axiosInstance;
