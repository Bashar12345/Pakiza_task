import { AppBar, Badge, Box, Tab, Tabs, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

import logo from ".././assets/op.png";
import HomeIcon from ".././assets/homeicon";
import VideoIcon from ".././assets/videoicon";
import GroupIcon from ".././assets/groupIcon.png";
import Cart from ".././assets/cart";
import StorefrontIcon from ".././assets/StorefrontIcon";
import MessageIcon from ".././assets/MessageIcon";
import BellIcon from ".././assets/bell";

import { Link } from "react-router-dom";
import { useState } from "react";

const NavbarMobile = () => {
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    // Add any other logic you need based on tab change
  };
  return (
    <Box sx={{ display: { xs: "block", sm: "none" } }}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          margin: "0px",
          padding: "0px",
          boxShadow: "none",
          border: "0px"
        }}
      >
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="navigation tabs"
          sx={{
            // alignSelf: "flex-end",
            // justifyContent: "center",
            "& .MuiTab-root": {
              padding: "2px", // Adjust padding for tabs
              backgroundColor: "background.paper",
              border : "0px",
            },
          }}
        >
          <Tab icon={<HomeIcon />} component={Link} to="/home" />
          <Tab icon={<VideoIcon />} component={Link} to="/videos" />
          <Tab
            icon={<img src={GroupIcon} />} // Ensure GroupIcon component renders correctly
            component={Link}
            to="/groups"
          />
          <Tab icon={<StorefrontIcon />} component={Link} to="/marketplace" />
          <Tab
            icon={
              <Badge badgeContent={3} color="primary">
                <Cart />
              </Badge>
            }
            component={Link}
            to="/cart"
          />
        </Tabs>
      </Toolbar>
    </Box>
  );
};

export default NavbarMobile;
