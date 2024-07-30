import { useState, useEffect } from 'react';
import axiosInstance from './apiQueries';

const useFetchPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(`/api/get-all-users-posts?page=${page}&limit=10`);
        // console.log(response);
        setPosts(prevPosts => [...prevPosts, ...response.data.posts]);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  const loadMore = () => setPage(prevPage => prevPage + 1);

  return { posts, loading, error, loadMore };
};

export default useFetchPosts;
