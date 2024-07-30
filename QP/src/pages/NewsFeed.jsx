import useFetchPosts from "../api/getAllusersPosts";
import PostList from "../pages/post/PostList";
import { Container, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const NewsFeed = () => {
  const { posts, loading, error, loadMore } = useFetchPosts();
  const location = useLocation();

  if (error)
    return <Typography>Error loading posts: {error.message}</Typography>;

  // Conditionally render based on location pathname
  return (
    <>
      {location.pathname === "/posts" && (
        <Container>
          <PostList
            posts={posts}
            loading={loading}
            loadMore={loadMore}
            error={error}
          />
        </Container>
      )}
      {location.pathname !== "/posts" && (
        <PostList
          posts={posts}
          loading={loading}
          loadMore={loadMore}
          error={error}
        />
      )}
    </>
  );
};

export default NewsFeed;
