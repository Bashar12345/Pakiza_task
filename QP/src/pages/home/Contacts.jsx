import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Badge,
  IconButton,
  Typography,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";
import propImage from "../../assets/props_img.jpeg";
import CakeIcon from "@mui/icons-material/Cake";
import PlusIcon from "../../assets/PlusIcon";
import SearchIcon from "../../assets/SearchIcon";

SearchIcon;

const contacts = [
  {
    name: "Mubashra Ansari",
    lastActive: "39m",
    active: false,
    birthday: "2024-07-07",
  },
  {
    name: "Walija Ansari",
    lastActive: null,
    active: true,
    birthday: "2024-07-08",
  },
  {
    name: "Esther Howard",
    lastActive: "50m",
    active: false,
    birthday: "2024-07-07",
  },
  {
    name: "Brooklyn Simmons",
    lastActive: "2h",
    active: false,
    birthday: "2024-07-09",
  },
  {
    name: "Leslie Alexander",
    lastActive: "39m",
    active: false,
    birthday: "2024-07-07",
  },
  {
    name: "Aoun Haider",
    lastActive: "20m",
    active: false,
    birthday: "2024-07-10",
  },
];

const groups = [
  { id: 1, name: "3 idiots", lastActive: null, active: true },
  { id: 2, name: "Life peras", lastActive: null, active: false },
  { id: 3, name: "Local Driver", lastActive: null, active: true },
];

const headerStyles = {
  fontFamily: "Raleway",
  fontSize: "16px",
  fontWeight: 600,
  lineHeight: "16px",
  letterSpacing: "0.03em",
  textAlign: "left",
};

const ActiveBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-dot": {
    backgroundColor: "green",
    height: 10,
    minWidth: 10,
    borderRadius: "50%",
  },
  "& .MuiBadge-anchorOriginBottomRightCircular": {
    transform: "translate(20%, 20%)",
  },
}));

const InactiveBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "gray",
    color: "white",
    fontSize: "0.75rem",
    padding: "0 4px",
    borderRadius: "4px",
    height: "auto",
    minWidth: "auto",
  },
  "& .MuiBadge-anchorOriginBottomRightCircular": {
    transform: "translate(20%, 20%)",
  },
}));

const ContactsAndGroups = () => {
  const today = new Date().toISOString().split("T")[0];
  const birthdaysToday = contacts.filter(
    (contact) => contact.birthday === today
  );

  const firstBirthdayName =
    birthdaysToday.length > 0 ? birthdaysToday[0].name : "";
  const additionalBirthdaysCount = birthdaysToday.length - 1;

  return (
    <Box>
      {/* Birthdays */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 16px",
          backgroundColor: "background.paper",
        }}
      >
        <Typography sx={headerStyles}>Birthdays</Typography>
      </Box>
      {birthdaysToday.length > 0 && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "background.paper",
            padding: "12px",
          }}
        >
          {/* <Badge color="secondary" badgeContent={birthdaysToday.length}> */}
          <CakeIcon />
          {/* </Badge> */}
          <Typography
            sx={{
              marginLeft: "8px",
              fontFamily: "Raleway",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "18px",
              letterSpacing: "-0.08px",
              textAlign: "left",
            }}
          >
            <strong> {firstBirthdayName} </strong> and{" "}
            <strong>
              {additionalBirthdaysCount > 0 &&
                `${additionalBirthdaysCount} other${
                  additionalBirthdaysCount > 1 ? "s" : ""
                }`}
            </strong>{" "}
            have birthday today.
          </Typography>
        </Box>
      )}

      <Divider sx={{ borderBottom: "1px solid #E3EDED" }} />

      {/* Contact List */}
      <Box sx={{ bgcolor: "background.paper" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "8px 16px",
          }}
        >
          <Typography sx={headerStyles}>Contacts</Typography>
          <Box paddingRight={2}>
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Box>
        </Box>

        <List>
          {contacts.map((contact, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                {contact.active ? (
                  <ActiveBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                  >
                    <Avatar src={propImage}>{contact.name[0]}</Avatar>
                  </ActiveBadge>
                ) : (
                  <InactiveBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    badgeContent={contact.lastActive}
                  >
                    <Avatar src={propImage}>{contact.name[0]}</Avatar>
                  </InactiveBadge>
                )}
              </ListItemAvatar>
              <ListItemText primary={contact.name} />
            </ListItem>
          ))}
        </List>
      </Box>

      <Divider sx={{ borderBottom: "1px solid #E3EDED" }} />

      {/* Grops Conversations */}
      <Box sx={{ bgcolor: "background.paper" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "8px 16px",
          }}
        >
          <Typography sx={headerStyles}>Group Conversations</Typography>
          <Box paddingRight={2}>
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Box>
        </Box>

        <List>
          {groups.map((contact, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                {contact.active ? (
                  <ActiveBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                  >
                    <Avatar src={propImage}>{contact.name[0]}</Avatar>
                  </ActiveBadge>
                ) : (
                  <InactiveBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    badgeContent={contact.lastActive}
                  >
                    <Avatar src={propImage}>{contact.name[0]}</Avatar>
                  </InactiveBadge>
                )}
              </ListItemAvatar>

              <ListItemText primary={contact.name} />
            </ListItem>
          ))}
          <ListItem button onClick={() => {}}>
            <ListItemAvatar>
              <Avatar color="primary" aria-label="create new group">
                <PlusIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={"Create New Group"} />
          </ListItem>
        </List>

        <Box
          sx={{ display: "flex", justifyContent: "center", paddingTop: "16px" }}
        >
          <Typography
            variant="body2"
            color="primary"
            sx={{ marginLeft: "8px", cursor: "pointer" }}
          ></Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactsAndGroups;
