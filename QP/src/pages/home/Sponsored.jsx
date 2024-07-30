import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import propImage from "../../assets/props_img.jpeg";

const Sponsored = ({ primaryText, secondaryText, avatarSrc }) => {
  return (
    <ListItem button sx={{ paddingInline: "0px", paddingBlock: "4px" }}>
      <ListItemAvatar>
        <Avatar
          sx={{ width: "110px", height: "107px", borderRadius: "8px" }}
          alt="Sponsored Avatar"
          src={avatarSrc || propImage} // Use avatarSrc from props
        />
      </ListItemAvatar>
      <ListItemText
        sx={{ marginLeft: "4px", paddingInline: "4px" }}
        primary={
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "13px",
              fontWeight: 500,
              lineHeight: "19.5px",
              letterSpacing: "0.02em",
              //   textAlign: "center",
            }}
          >
            {primaryText}
          </Typography>
        }
        secondary={
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "10px",
              fontWeight: 500,
              lineHeight: "15px",
              letterSpacing: "0.02em",
              //   textAlign: "center",
            }}
          >
            {secondaryText}
          </Typography>
        }
      />
    </ListItem>
  );
};

// Example dummy contents
const dummyContents = [
  {
    primaryText: "আপনার অফিসের লাঞ্চ",
    secondaryText: "homefectionery.com",
    avatarSrc: "", // Replace with actual image source
  },
  {
    primaryText: "Special Offer!",
    secondaryText: "example.com",
    avatarSrc: "", // Replace with actual image source
  },
];

const SponsoredList = () => {
  return (
    <Box
      sx={{
        // maxWidth: "250px",
        minHeight: "290px",
        backgroundColor: "background.paper",
        borderRadius: "8px 8px 2px 2px",
        borderBottom: "1px solid #E3EDED",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: "21px",
          letterSpacing: "0.02em",
          textAlign: "left",
          paddingInline: "8px",
          paddingBlock: "8px",
        }}
      >
        Sponsored
      </Typography>

      <List
        sx={{
          width: "100%",
          paddingInline: "8px",
          paddingBlock: "8px",
        }}
      >
        {dummyContents.map((content, index) => (
          <Sponsored key={index} {...content} />
        ))}
      </List>
    </Box>
  );
};

export default SponsoredList;
