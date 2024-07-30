import React from "react";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  Button,
} from "@mui/material";
import propImage from "../../assets/prop_img-2.png";
import AddFriendIcon from "../../assets/add_friend.png" 

const dummy_users = [
    { id: 1, username: 'Emamily Shakeel', friendsWith: "6", avatar: '' },
    { id: 2, username: 'Anik Islam',  friendsWith: "2", avatar: '' },
    { id: 3, username: 'Cameron Williamson',  friendsWith: "9", avatar: '' },
    { id: 4, username: 'Sarah Johnson',  friendsWith: "6", avatar: '' },
    { id: 5, username: 'John Doe', friendsWith: "4", avatar: '' },
    { id: 6, username: 'Jane Smith',  friendsWith: "5", avatar: '' },
  ];
  

const MayKnow = () => {
  return (
    <Box
      sx={{
        background: "white",
        borderRadius: "8px",
        marginBlock: "0.5rem",
        paddingBlock: "16px",
        // padding: '1rem',
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px",
          //   paddingBlock: "16px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "18.75px",
            textAlign: "center",
            color: "#0B3243",
          }}
        >
          People You May Know
        </Typography>
        <Box onClick={() => {}} sx={{ marginLeft: "1rem" }}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "15px",
              fontWeight: 400,
              lineHeight: "22.5px",
              letterSpacing: "-0.03em",
              textAlign: "left",
              color: "primary.main",
              textTransform: "capitalize",
            }}
          >
            See all
          </Typography>
        </Box>
      </Box>

      <List sx={{ paddingInline: "8px", paddingBlock: "0px" }}>
        {dummy_users.map((user, index) => (
          <ListItem key={index} disableGutters sx={{ padding: "0.5rem 0" }}>
            <ListItemAvatar sx={{ width: "40px", height: "40px" }}>
              <Avatar alt={user.username} src={user.avatar || propImage} />
            </ListItemAvatar>
            <ListItemText
              primary={user.username}
              secondary={ `${user.friendsWith} Friends in common` || "No mutal friends"}
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
            <IconButton aria-label="add-friend">
              <Box component="img" src={AddFriendIcon} width={"24px"} height={"24px"} />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MayKnow;
