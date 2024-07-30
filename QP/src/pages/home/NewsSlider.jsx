import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";

const newsItems = [
    {
      id: 1,
      title: "Breaking News 1",
      description: "Ut enim ad minim veniam.",
      imageUrl: "https://picsum.photos/200?random=1",
    },
    {
      id: 2,
      title: "Latest Update",
      description: "Consectetur adipiscing elit.",
      imageUrl: "https://picsum.photos/200?random=2",
    },
    {
      id: 3,
      title: "Important Announcement",
      description: "Description for news item 3",
      imageUrl: "https://picsum.photos/200?random=3",
    },
    {
      id: 4,
      title: "Local News",
      description:
        "content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "https://picsum.photos/200?random=4",
    },
    // Add more news items with image URLs here
  ];


const NewsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };



  return (
    <Box sx={{ position: "relative" }}>
      <Slider {...settings}>
        {newsItems.map((item, index) => (
          <div key={index} style={{ position: "relative" }}>
            <div
              style={{
                backgroundImage: `url(${item.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "300px", // Adjust the height as needed
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                color: "#fff",
                padding: "20px",
                boxSizing: "border-box",
                borderRadius: "8px",
              }}
            >
              <Box>
                {/* <Typography variant="body1">{item.title}</Typography> */}
                <Typography variant="subtitle2" sx={{ lineHeight: "20px"}}>{item.title} {' '} - {item.description}  </Typography>
              </Box>
            </div>
          </div>
        ))}
      </Slider>
      <Box
        sx={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          zIndex: 2,
        }}
      >
        <Button
          variant="contained"
          size="small"
          sx={{
            padding: "1px 8px",
            background: "#007bff",
            backgroundColor: "primary.main",

            borderRadius: "8px",
            cursor: "pointer",
            textTransform: "capitalize",
          }}
        >
          See More
        </Button>
      </Box>
    </Box>
  );
};

export default NewsSlider;
