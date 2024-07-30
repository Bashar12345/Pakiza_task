import { createContext, useContext, useEffect, useState, useCallback } from "react";
import axiosInstance from "../api/apiQueries"; // Adjust path as per your project structure
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Initialize as false initially
  const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken") || null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const setTokens = (accessToken, refreshToken) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    setAccessToken(accessToken);
  };

  const clearTokens = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setAccessToken(null);
  };

  const login = async (email, password) => {
    try {
      const response = await axiosInstance.post("/api/login", { email, password });

      const { accessToken, refreshToken } = response.data;
      setTokens(accessToken, refreshToken);

      setIsAuthenticated(true);
      // console.log("Login successful", response.data);
      toast.success("Login successful");
    } catch (error) {
      console.error("Login error:", error);
      setIsAuthenticated(false);
      throw new Error("Login failed");
    }
  };

  const logout = useCallback(() => {
    clearTokens();
    setIsAuthenticated(false);
    console.log("Logged out");
  }, []);

  const register = async (formData) => {
    try {
      const response = await axiosInstance.post("/api/signup", formData);

      const { accessToken, refreshToken } = response.data;
      setTokens(accessToken, refreshToken);

      setIsAuthenticated(true);
      // console.log("Registration successful", response.data);
      toast.success("Registration successful");
    } catch (error) {
      console.error("Registration error:", error);
      setIsAuthenticated(false);
      throw new Error("Registration failed");
    }
  };

  const refreshAccessToken = useCallback(async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) throw new Error("No refresh token available");

      const response = await axiosInstance.post("/api/refresh-token", { refreshToken });
      const { accessToken: newAccessToken } = response.data;

      localStorage.setItem("accessToken", newAccessToken);
      setAccessToken(newAccessToken);
      // console.log("Access token refreshed");
      toast.warning("Access token refreshed");
    } catch (error) {
      console.error("Failed to refresh access token:", error);
      logout();
    }
  }, [logout]);

  useEffect(() => {
    const interval = setInterval(() => {
      const tokenExpiry = 20 * 60 * 1000; // 15 minutes
      refreshAccessToken();
    }, 19 * 60 * 1000); // 14 minutes

    return () => clearInterval(interval);
  }, [refreshAccessToken]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, register, refreshAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
