import { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import Love from "../assets/loovee.png";
import Haha from "../assets/haahaa.png";
import Angry from "../assets/angryy.png";
import Sad from "../assets/sad.png";
import Like from "../assets/Like.jsx";
import LikeIcon from "../assets/likeee.png";
import Wow from "../assets/wow.png";

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
      justifyContent="center"
      color={"#6A6A6B"}
      // marginInline={"16px"}
      position="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      
        <IconButton
          sx={{
            paddingRight: "0px",
            marginRight: "0px",
            cursor: "pointer",
          }}
        >
          <Like />
          <Typography
          sx={{
            marginLeft: "4px",
            marginTop:"2px",
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
          top="-120%" // Positioned below the button
          left="0%"
          transform="translateX(-50%)" // Center horizontally
          bgcolor="white"
           border="1px solid #E5E6EC"
          boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
          borderRadius="18px"
          padding="2px"
         
          zIndex="1000" // Ensure it appears on top
          sx={{
            // Additional styling for better appearance
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "270px" // Adjust as needed
          }}
        >
          <IconButton sx={{ padding: "4px", cursor: "pointer" }}>
          <Box component="img" src={LikeIcon} alt="Like" width={"26px"} />
          </IconButton>
          <IconButton sx={{ padding: "4px", cursor: "pointer" }}>
            <Box component="img" src={Love} alt="Love"  width={"26px"}/>
          </IconButton>
          <IconButton sx={{ padding: "4px", cursor: "pointer" }}>
            <Box component="img" src={Haha} alt="Haha"  width={"26px"}/>
          </IconButton>
          <IconButton sx={{ padding: "4px", cursor: "pointer" }}>
            <Box component="img" src={Sad} alt="Sad"  width={"26px"} />
          </IconButton>
          <IconButton sx={{ padding: "4px", cursor: "pointer" }}>
            <Box component="img" src={Angry} alt="Angry"  width={"26px"} />
          </IconButton>
          <IconButton sx={{ padding: "4px", cursor: "pointer" }}>
            <Box component="img" src={Wow} alt="Wow"  width={"26px"} />
          </IconButton>
          
        </Box>
      )}
    </Box>
  );
};

export default ReactionButton;
