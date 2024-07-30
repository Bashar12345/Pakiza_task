import { useState, useEffect } from 'react';
import axiosInstance from './apiQueries';

const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        // Get access token from localStorage (adjust this based on your token storage method)
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
          throw new Error('Access token not found');
        }

        // Decode the access token to extract email and password (assuming it's JWT)
        // Example assuming token is in JWT format
        // const decodedToken = decodeURIComponent(escape(atob(accessToken.split('.')[1])));
        // const { email, password } = JSON.parse(decodedToken);
        // console.log(email, password);

        // Make a POST request with x-www-form-urlencoded content type
        const formData = new URLSearchParams();
        formData.append('email', "anik.ba@pakizatvl.com");
        formData.append('password', "12345678As@");

        // Replace 'user-login' with your actual API endpoint
        const response = await axiosInstance.post('/api/user-login', formData);
        // console.log(response.data);

        setUserInfo(response.data.user);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  // Construct imagePath based on userInfo
  const profileImagePath = userInfo
    ? `${import.meta.env.VITE_BASE_URL}/uploads/${userInfo.profile_pic}`
    : null;
  // console.log(userInfo)

  return { userInfo, loading, error, profileImagePath };
};

export default useUserInfo;
