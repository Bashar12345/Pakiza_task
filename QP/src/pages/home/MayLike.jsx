import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import propImage from "../../assets/prop_img-2.png";

// Assuming dummy_users is an array of user objects like { id, username, occupation, avatar }
const dummy_users = [
  {
    id: 1,
    username: "Emamily Shakeel",
    occupation: "Software Engineer",
    avatar: "",
  },
  {
    id: 2,
    username: "Anik Islam",
    occupation: "Software Engineer",
    avatar: "",
  },
  {
    id: 3,
    username: "Cameron Williamson",
    occupation: "Software Engineer",
    avatar: "",
  },
  {
    id: 4,
    username: "Cameron Williamson",
    occupation: "Software Engineer",
    avatar: "",
  },
];

const MayLike = () => {
  return (
    <Box
      sx={{
        background: "white",
        borderRadius: "8px",
        marginTop: "1.5rem",
        marginBottom: "0.5rem",
        paddingBlock: "20px",
      }}
    >
      <Typography
        variant="h6"
        component="div"
        gutterBottom
        sx={{
          fontFamily: "Roboto",
          fontSize: "16px",
          fontWeight: 700,
          lineHeight: "18.75px",
          textAlign: "center",
          color: "#0B3243",
        }}
      >
        Pages You Might Like
      </Typography>
      <List sx={{ paddingInline: "8px", paddingBlock: "0px" }}>
        {dummy_users.map((user, index) => (
          <ListItem
            key={index}
            disableGutters
            sx={{ paddingInline: "4px", paddingBlock: "0.5rem" }}
          >
            <ListItemAvatar sx={{ width: "40px", height: "40px" }}>
              <Avatar alt={user.username} src={user.avatar || propImage} />
            </ListItemAvatar>
            <ListItemText
              primary={user.username}
              secondary={user.occupation || "Occupation not specified"}
              primaryTypographyProps={{
                style: {
                  fontFamily: "Roboto",
                  fontSize: "14px",
                  fontWeight: 700,
                  lineHeight: "16.41px",
                  textAlign: "left",
                  color: "#0B3243",
                },
              }}
              secondaryTypographyProps={{
                style: {
                  fontFamily: "Poppins",
                  fontSize: "10px",
                  fontWeight: 400,
                  lineHeight: "15px",
                  textAlign: "left",
                  color: "#307777",
                },
              }}
            />
            <Button
              variant="contained"
              size="small"
              style={{
                width: "54px",
                height: "22px",
                borderRadius: "4px 4px",
                opacity: 1,
                textTransform: "capitalize",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "14px",
                letterSpacing: "0.5px",
              }}
            >
              Follow
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MayLike;
