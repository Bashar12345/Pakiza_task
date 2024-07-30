import {
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";

import { KeyboardArrowRight } from "@mui/icons-material";
import { InsertEmoticon } from "@mui/icons-material";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import useUserInfo from "../../api/getUserInfo";
import propImage from "../../assets/props_img.jpeg";
import propImageTwo from "../../assets/prop_img-2.png";

import PlusIcon from "../../assets/PlusIcon";
import CameraIcon from "../../assets/CameraIcon";
// import PlusIcon from "../../assets/PlusIcon";

import { color, display } from "@mui/system";
import PhotoIcon from "../../assets/PhotoIcon";
import PhotoIconTwo from "../../assets/PhotoIconTwo";
import { useEffect, useRef, useState } from "react";
import useSavePost from "../../api/uploadAPost";

const btnTypoStyleProps = {
  fontFamily: "poppins",
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "21px",
  textAlign: "left",
  color: "#9FA2A6",
};

const CreatePost = () => {
  const { userInfo, profileImagePath } = useUserInfo();
  const [postDescription, setPostDescription] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const { savePost } = useSavePost();

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await savePost(postDescription, selectedFiles);
    if (result.success) {
      console.log("Post created successfully");
      // Reset form fields
      setPostDescription("");
      setSelectedFiles([]);
    } else {
      console.error("Error creating post:", result.error);
    }
  };

  console.log(userInfo);

  const featuredUsers = [
    { id: 1, name: "John Doe", profilePic: propImage, share_reel_id: 101 },
    { id: 2, name: "Jane Smith", profilePic: propImage }, // No share_reel_id
    { id: 3, name: "Mike Johnson", profilePic: propImage, share_reel_id: 103 },
    { id: 4, name: "Emily Smith", profilePic: propImage }, // No share_reel_id
    { id: 5, name: "Lola Johnson", profilePic: propImage, share_reel_id: 105 },
    { id: 6, name: "James Brown", profilePic: propImage, share_reel_id: 106 },
    { id: 7, name: "Anna White", profilePic: propImage }, // No share_reel_id
    { id: 8, name: "Robert Black", profilePic: propImage, share_reel_id: 108 },
    { id: 10, name: "David Blue", profilePic: propImage, share_reel_id: 110 },
    { id: 12, name: "Karen Grey", profilePic: propImage, share_reel_id: 112 },
    // Add more as needed
  ];
  const [slidesToShow, setSlidesToShow] = useState(4); // Initial slides to show

  const scrollRef = useRef(null);
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // overflow: "visible",
    variableWidth: true, // Allow slides to have variable width
    centerMode: false, // Disable center mode to reduce gaps
    swipeToSlide: true, // Enable swipe to slide
  };




  const handleNextClick = () => {
    if (scrollRef.current) {
      scrollRef.current.slickNext(); // Using slickNext() to slide to the next set
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        backgroundColor: "#fff",
        borderRadius: "2px",
        p: { xs: 0, sm: "20px" },
        boxShadow: 3,
        pt: 5,
        height: { xs: "234px", md: "474px" },
        borderBottom: "1px solid #E5E5E5",
      }}
    >
      {/* Input Field */}
      <Box
        display="flex"
        alignItems="center"
        width="100%"
        my={{ xs: 0, sm: 2 }}
        paddingTop={1}
        paddingInline={{ xs: 1, sm: 2 }}
      >
        <Avatar
          alt={userInfo?.last_name}
          src={profileImagePath || propImage}
          // src={propImage}
          sx={{
            width: "59px",
            height: "59px",
            marginRight: "1rem", // Adjust margin right as needed
            borderRadius: { xs: "10px", sm: "50%" },
          }}
        />

        <TextField
          fullWidth
          placeholder={`What's on your mind, ${userInfo?.last_name}?`}
          InputProps={{
            sx: {
              "& .MuiOutlinedInput-notchedOutline": {
                border: { xs: "0px", md: "1px" }, // light border
              },

              borderRadius: { xs: "4px", md: "160px" },
              paddingInline: { xs: "4px", sm: "16px" },
              backgroundColor: { xs: "none", sm: "#EEEEEE" },
              fontFamily: "Poppins",
              fontSize: { xs: "12px", sm: "14px" },
              fontWeight: 400,
              lineHeight: { xs: "18px", sm: "21px" },
              letterSpacing: "0.01em",
              textAlign: "left",
              color: "#000", // text color
              "&::placeholder": {
                // backgroundColor:
                color: "#B0B3B8", // placeholder color
              },
            },
          }}
        />
        <IconButton
          sx={{
            display: { xs: "block", sm: "none" },
            backgroundColor: "#EEEEEE",
            borderRadius: "8px",
          }}
          component="label"
        >
          <PhotoIconTwo sx={{ padding: "4px" }} />
          <input
            type="file"
            multiple
            hidden
            onChange={handleFileChange}
          />
        </IconButton>
      </Box>

      {/* Divider */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          border: "1px solid rgba(227, 237, 237, 0.6)",
          width: "100%",
        }}
      />

      {/* Post Buttons */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "space-around",
          alignItems: "center",
          marginBlock: "0.6rem",
        }}
        width="100%"
      >
        <Button startIcon={<CameraIcon />} sx={{ textTransform: "none" }}
          component="label">
          <Typography sx={btnTypoStyleProps}>Live Video</Typography>
          <input
            type="file"
            multiple
            hidden
            onChange={handleFileChange}
          />
        </Button>
        <Button startIcon={<PhotoIcon />} sx={{ textTransform: "none" }}
          component="label">
          <Typography sx={btnTypoStyleProps}>Photo/Video</Typography>
          <input
            type="file"
            multiple
            hidden
            onChange={handleFileChange}
          />
        </Button>
        <Button
          startIcon={
            <InsertEmoticon
              sx={{ width: "24px", height: "24px", color: "#F6B83C" }}
            />
          }
          sx={{ textTransform: "none" }}
          component="label"
        >
          <Typography sx={btnTypoStyleProps}>Feeling/activity</Typography>
          <input
            type="file"
            multiple
            hidden
            onChange={handleFileChange}
          />
        </Button>
      </Box>

      {/* Divider */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          border: "1px solid rgba(227, 237, 237, 0.6)",
          width: "100%",
        }}
      />

      {/* Featured Users */}

      <Box position="relative" width="100%" height="100%" overflow="visible">



        <Slider
          {...settings}
          className="slick-slider"
          ref={scrollRef}
          style={{
            width: "100%", // Adjust to occupy full width
            maxWidth: "100%", // Ensure it takes full available width
            height: { xs: "144px", sm: "264px" }, // Update height based on screen size
            // whiteSpace: "nowrap", // Prevent wrapping of items
            // display: "flex", // Ensure it behaves as a flex container
            // alignItems: "center", // Center items vertically
          }}
        >
          {/* Featured User Cards */}
          {featuredUsers.map((featuredUser, index) => (
            <Box
              key={index}
              ml={{ xs: 1, sm: 0 }}
              mr={{ xs: 0, sm: "5px" }}
              display="inline-block"
              sx={{
                width: "auto",
                maxWidth: { xs: "80px", sm: "150px" }, // Adjust width based on screen size
                height: { xs: "142px", sm: "264px" }, // Adjust height based on screen size

              }}
            >
              <Box
                position="relative"
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                  width: "auto",
                  maxWidth: { xs: "80px", sm: "150px" },
                  height: { xs: "142px", sm: "264px" },
                  margin: "0 auto", // Center align the slide within the Slider container

                }}
              >
                <Avatar
                  alt={featuredUser.name}
                  src={featuredUser.profilePic}
                  sx={{
                    width: { xs: "80px", sm: "150px" },
                    height: { xs: "118px", sm: "214px" },
                    borderRadius: "16px",
                    border: "1.5px solid",
                    borderImageSource:
                      "linear-gradient(0deg, #2DB9B9, #2DB9B9)",
                  }}
                />
                <Box
                  position="absolute"
                  bottom={{ xs: "-1%", sm: "0%" }}
                  transform="translate(-50%, -50%)"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  {index === 0 ? (
                    <IconButton component="label">
                      <PlusIcon />
                      <input
                        type="file"
                        multiple
                        hidden
                        onChange={handleFileChange} />

                    </IconButton>
                  ) : (
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                    >
                      <Avatar
                        sx={{
                          width: { xs: "22px", sm: "40px" },
                          height: { xs: "22px", sm: "40px" },
                          border: "2px solid #307777",
                          borderRadius: "50%",
                        }}
                        alt={featuredUser.name}
                        src={propImageTwo}
                      />
                      <Typography
                        sx={{
                          marginTop: "2px",
                          fontSize: "10px",
                          fontWeight: 400,
                          fontFamily: "SF Pro Text",
                          lineHeight: "6px",
                        }}
                      >
                        {featuredUser.name}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>

        {/* Next Arrow */}
        <IconButton
          sx={{
            display: { xs: "none", md: "block" },
            position: "absolute",
            right: "16px", // Adjust as necessary
            width: "50px",
            height: "50px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1000,
            backgroundColor: "rgba(255, 255, 255, 0.8)", // Background to make it more visible
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 1)",
            },
          }}
          onClick={handleNextClick} // Add click handler for sliding functionality
        >
          <KeyboardArrowRight style={{ zIndex: 1000, right: "16px" }} />
        </IconButton>

      </Box>


    </Box>
  );
};

export default CreatePost;
