import { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import Love from "../assets/87a2e354a5342e2971aca3c1c36d9994.png";
import Haha from "../assets/b5ff2eb06261e3566ba8299e5afb8f27.png";
// import Angry from "./icons/Angry";
// import Sad from "./icons/Sad";
import Like from "../assets/Like.jsx";

const ReactionButton = () => {
  const [showReactions, setShowReactions] = useState(false);

  const handleMouseEnter = () => {
    setShowReactions(true);
  };

  const handleMouseLeave = () => {
    setShowReactions(false);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      color={"#6A6A6B"}
      marginInline={"16px"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Box display="flex" alignItems="center" justifyContent={"center"} position="relative">
        <IconButton
          sx={{
            paddingRight: "0px",
            marginRight: "0px",
            marginBottom: "4px",
            cursor: "pointer",
          }}
        >
          <Like />
          <Typography
          sx={{
            marginLeft: "4px",
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "24px",
            cursor: "pointer",
          }}
        >
          Like
        </Typography>
        </IconButton>
       
        {showReactions && (
          <Box
            display="flex"
            position="absolute"
            bottom="40px"
            left="0"
            bgcolor="white"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
            borderRadius="8px"
            padding="4px"
          >
            <IconButton sx={{ padding: "4px", cursor: "pointer" }}>
              <Like />
            </IconButton>
            <IconButton sx={{ padding: "4px", cursor: "pointer" }}>
              <Box component="img" src={Love} />
            </IconButton>
            <IconButton sx={{ padding: "4px", cursor: "pointer" }}>
              <Haha />
            </IconButton>
            <IconButton sx={{ color: "white", cursor: "pointer" }}>
              <Typography
                variant="body1"
                sx={{ color: "white", padding: "4px", cursor: "pointer" }}
              >
                😢
              </Typography>
            </IconButton>
            <IconButton sx={{ color: "white", cursor: "pointer" }}>
              <Typography
                variant="body1"
                sx={{ color: "white", padding: "4px", cursor: "pointer" }}
              >
                😡
              </Typography>
            </IconButton>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ReactionButton;
