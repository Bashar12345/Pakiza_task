// src/pages/Stories.jsx
import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
 
  Tooltip,
  IconButton,
 
  Typography,
  AppBar,
  Toolbar,
  TextField,
  useMediaQuery,
} from "@mui/material";
import {
  Close as CloseIcon,
  Mail as MailIcon,
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
} from "@mui/icons-material";
import MessageIcon from "../../assets/MessageIcon";
import BellIcon from "../../assets/bell";
import logo from "../../assets/op.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "../../components/Arrow";

const StoryList = () => {
  const isXs = useMediaQuery('(max-width:600px)'); 
  const [stories, setStories] = useState([]);
  const sliderSettings = {
    arrows: !isXs,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const users = [
    {
      name: "Alice Johnson",
      image: "https://picsum.photos/200?random=1",
      lastActive: "Just now",
      reactions: { likes: 10 },
    },
    {
      name: "Bob Smith",
      image: "https://picsum.photos/200?random=2",
      lastActive: "1h",
      reactions: { loves: 5 },
    },
    {
      name: "Charlie Brown",
      image: "https://picsum.photos/200?random=3",
      lastActive: "2h",
      reactions: { likes: 15 },
    },
    {
      name: "Diana Prince",
      image: "https://picsum.photos/200?random=4",
      lastActive: "1d",
      reactions: { likes: 8 },
    },
    {
      name: "Edward Cullen",
      image: "https://picsum.photos/200?random=5",
      lastActive: "4h",
      reactions: { likes: 12 },
    },
  ];

  const [images, setImages] = useState([
    "https://picsum.photos/300/200?random=1",
    "https://picsum.photos/300/200?random=2",
    "https://picsum.photos/300/200?random=3",
    "https://picsum.photos/300/200?random=4",
    "https://picsum.photos/300/200?random=5",
  ]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch("/api/stories");
        const data = await response.json();
        setStories(data);
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
    };

    fetchStories();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, boxSizing: "border-box" }}>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        height={60}
        sx={{ zIndex: 1201 , display: { xs: "none", sm: "block" } }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="close"
            sx={{ width: "45px", height: "45px", margin: "4px" }}
          >
            <CloseIcon
              sx={{
                width: "45px",
                height: "45px",
                backgroundColor: "#E4E4E4",
                borderRadius: "26px",
              }}
            />
          </IconButton>

          <Box
            component="img"
            sx={{
              width: "45px",
              height: "45px",
              top: "14px",
              left: "14px",
              gap: "0px",
              opacity: "0px",
            }}
            src={logo}
            alt="Logo"
          />
          <Box sx={{ flexGrow: 1 }}></Box>
          <IconButton
            color="inherit"
            sx={{
              width: "45px",
              height: "45px",
              margin: "4px",
              backgroundColor: "#E4E4E4",
              padding: "8px 5.73px 4.5px 6.77px",
              borderRadius: "26px",
              opacity: 1,
            }}
          >
            <MessageIcon />
          </IconButton>
          <IconButton
            color="inherit"
            sx={{
              width: "45px",
              height: "45px",
              margin: "4px",
              backgroundColor: "#E4E4E4",
              padding: "8px 5.73px 4.5px 6.77px",
              borderRadius: "26px",
              opacity: 1,
            }}
          >
            <BellIcon sx={{ color: "black" }} />
          </IconButton>
          <IconButton
            color="inherit"
            sx={{
              width: "45px",
              height: "45px",
              margin: "4px",
              backgroundColor: "#E4E4E4",
              padding: "8px 5.73px 4.5px 6.77px",
              borderRadius: "26px",
              opacity: 1,
            }}
          >
            <AccountCircleIcon sx={{ color: "black" }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Grid
        container
        direction="row"
        spacing={2}
        // paddingTop={"64px"}
        width={"100vw"}
        height={"100vh"}
      >
        {/* Left Side: Story List */}
        <Grid
          item
          md={3}
          paddingTop={"64px"}
          sx={{
            border: "2px solid black",
            display: { xs: "none", md: "block" },
            backgroundColor: "white",
          }}
        >
          <Box paddingTop={"63px"}>
            <Typography
              sx={{
                fontFamily: "roboto",
                fontSize: "24px",
                fontWeight: 700,
                lineHeight: "18px",
                letterSpacing: "-0.08px",
                textAlign: "left",
                marginLeft: "23px",
                marginTop: "23px",
              }}
            >
              All Stories
            </Typography>
            <List>
              {users.map((user, index) => (
                <React.Fragment key={index}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        alt={user.name}
                        src={user.image}
                        sx={{
                          width: 50,
                          height: 50,

                          border: "4px solid #307777",
                          boxShadow: "0px 0px 0px 4px rgba(0,0,0,0.1)", // Adjust the spread radius (4px) as needed
                        }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={user.name}
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline", marginRight: 1 }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {user.lastActive}
                          </Typography>
                          <Tooltip title="Add Reaction"></Tooltip>
                          {/* Add more reactions/icons as needed */}
                        </React.Fragment>
                      }
                    />
                    {/* Add more secondary actions if necessary */}
                  </ListItem>
                  {/* <Divider variant="inset" component="li" /> */}
                </React.Fragment>
              ))}
            </List>
          </Box>
        </Grid>

        {/* Right Side: Image Slider */}
        <Grid
          item
          xs={12}
          md={9}
          sx={{
            backgroundColor: "black",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 2,
            position: "relative", // Ensure relative positioning for absolute elements
          }}
        >
          {/* Slider */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "506px",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Slider {...sliderSettings} >
              {images.map((image, index) => (
                <Box key={index} sx={{ position: "relative" }}>
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    style={{ width: "506px", height: "100vh" }}
                  />
                  {/* Progress Timer Line */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "65px",
                      left: "50%", // Adjusted to center horizontally
                      transform: "translateX(-50%)", // Translate back by half of its width
                      width: "80%",
                      height: "3px",
                      backgroundColor: "white",
                      opacity: 0.5,
                      zIndex: 2,
                    }}
                  />
                </Box>
              ))}
            </Slider>
            {/* Header with Avatar, Name, Active Time */}

            <Box
              sx={{
                position: "absolute",
                width: "100%",
                top: "86px",
                left: "20px",
                display: "flex",
                alignItems: "center",
                zIndex: 3,
              }}
            >
              <Avatar
                alt={users[0].name}
                src={users[0].image}
                sx={{ width: 40, height: 40, border: "2px solid #307777" }}
              />
              <Box sx={{ marginLeft: 2, flexGrow: 1 }}>
                <Typography variant="body2" sx={{ color: "white" }}>
                  {users[0].name}
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                  {users[0].lastActive}
                </Typography>
              </Box>
              <Box
                sx={{
                  marginRight: 2,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {/* Add the close and three dot icons here */}
                <IconButton sx={{ marginRight:"20px" }}>
                  <CloseIcon sx={{ color: "white" }} />
                </IconButton>
                {/* You can add the three dot icon here as well */}
                {/* <IconButton>
      <ThreeDorIcon sx={{ color: "white" }} />
    </IconButton> */}
              </Box>
            </Box>

            {/* Reply TextField and Emojis */}
            <Box
              sx={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                width: "calc(100% - 40px)",
                display: "flex",
                alignItems: "center",
                zIndex: 3,
              }}
            >
              <TextField
                variant="outlined"
                hiddenLabel
                placeholder="Write a reply..."
                size="small"
                fullWidth
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "8px",
                  // paddingRight: "20px",
                }}
              />
              <IconButton sx={{ color: "white" }}>
                <Typography variant="body1" sx={{ color: "white" }}>
                  😊
                </Typography>
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <Typography variant="body1" sx={{ color: "white" }}>
                  ❤️
                </Typography>
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <Typography variant="body1" sx={{ color: "white" }}>
                  😂
                </Typography>
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <Typography variant="body1" sx={{ color: "white" }}>
                  😢
                </Typography>
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <Typography variant="body1" sx={{ color: "white" }}>
                  😡
                </Typography>
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StoryList;

{
  /* <Typography variant="h6">{story.title}</Typography>
                  <Typography variant="body2">{story.content}</Typography>
                  <Typography variant="caption">
                    By {story.user ? story.user.name : "Unknown"}
                  </Typography>
                  <Typography variant="caption">
                    Likes: {story.likes} | Views: {story.views}
                  </Typography> */
}

// import axiosInstance from "../../api/apiQueries";
// import { Link } from "react-router-dom";

{
  /* <Grid item xs={12}>
          <Button component={Link} to="/post-stories">
            <Typography variant="h5">Post a story</Typography>
          </Button>
        </Grid> */
}

// useEffect(() => {
//   const fetchStories = async () => {
//     try {
//       const response = await axiosInstance.get("/stories");
//       setStories(response.data);
//     } catch (error) {
//       console.error("Error fetching stories:", error);
//     }
//   };

//   fetchStories();
// }, []);
