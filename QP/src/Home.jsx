import Grid from "@mui/material/Grid";
import CreatePost from "./pages/post/CreatePost";
import NewsFeed from "./pages/NewsFeed";
import { Box } from "@mui/material";
import ContactsAndGroups from "./pages/home/Contacts";
import FriendRequests from "./pages/home/FriendRequests";
import SponsoredList from "./pages/home/Sponsored";
import MayLike from "./pages/home/MayLike";
import MayKnow from "./pages/home/MayKnow";
import NewsSlider from "./pages/home/NewsSlider";

const Home = () => {
  return (
    <Box
      sx={{
        marginInline: { xs: "2px", sm: "8px", xl: "48px" },
      }}
    >
      <Grid container spacing={1}>
        {/* Left Section */}
        <Grid item xs={12} sm={3} sx={{ display: { xs: "none", sm: "block" } }}>
          <NewsSlider />
          <MayLike />
          <MayKnow />
          <SponsoredList />
        </Grid>

        {/* Middle Section */}
        <Grid item xs={12} sm={6}>
          {/* Replace with your content */}

          <CreatePost />
          <NewsFeed />
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} sm={3} sx={{ display: { xs: "none", sm: "block" } }}>
          {/* Replace with your content */}
          <SponsoredList />
          <FriendRequests />
          <ContactsAndGroups />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
