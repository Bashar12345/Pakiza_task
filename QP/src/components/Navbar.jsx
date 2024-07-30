import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import DrawerList from "./DrawerList";

import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
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

// import InboxIcon from "@mui/icons-material/MoveToInbox";

import { Tabs, Tab, Drawer } from "@mui/material";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../api/apiQueries";
import useUserInfo from "../api/getUserInfo";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#f2f3f6", // Add your desired background color here
  "&:hover": {
    backgroundColor: "#f1f1f1", // Optional: Change background color on hover
  },
  // backgroundColor: alpha(theme.palette.common.white, 0.85),
  // "&:hover": {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25),
  // },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const { userInfo, loading, error, profileImagePath } = useUserInfo();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogout = async () => {
    try {
      const response = await axiosInstance.get("/api/logout");
      // console.log("Logout Successful:", response.data); // Assuming your API returns a success message
      toast.success("Logout Successful");

      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

    } catch (error) {
      console.error("Logout Error:", error);
    } finally {
      setAnchorEl(null);
      handleMobileMenuClose();
      window.location.reload();
    }
  };

  const menuId = "primary-search-account-menu";

  // Menu Start
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );
  // Menu end

  // Mobile Menu
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <img src={profileImagePath} alt="Profile" />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  // Mobile Menu end

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const [tabValue, setTabValue] = React.useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    // Add any other logic you need based on tab change
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="navbar"
        sx={{ boxShadow: { xs: "none" } }}
      >
        <Toolbar sx={{ boxShadow: { xs: "none" } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
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
          </IconButton>
          <Box sx={{ flexGrow: 0 }} />

          <Search
            sx={{
              display: { xs: "none", sm: "block" },
              backgroundColor: "#E4E4E4",
              borderRadius: "10px",
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          {/* Tabs */}
          <Box sx={{ flexGrow: 1 }} />
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="navigation tabs"
            sx={{
              display: { xs: "none", sm: "flex" },
              flexGrow: 1,
              alignSelf: "flex-end",
              justifyContent: "center",
              "& .MuiTab-root": {
                padding: "12px 54px", // Adjust padding for tabs
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

          <Box sx={{ flexGrow: 1 }} />

          {/* Right-aligned icon buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <IconButton
              size="large"
              color="inherit"
              sx={{
                backgroundColor: "#E4E4E4",
              }}
            >
              <Badge badgeContent={4} color="primary">
                <MessageIcon />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              color="inherit"
              sx={{
                marginLeft: "4px",
                padding: "0px 14px 4px 14px",
                backgroundColor: "#E4E4E4",
              }}
            >
              <BellIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Box
              component="img"
              src={profileImagePath}
                sx={{
                  width: "45px",
                  height: "46.8px",
                  top: "-1px",
                  gap: "0px",
                  borderRadius: "30px",
                  opacity: "0px",
                }}
              />
            </IconButton>
          </Box>
          {/* right-aligned icon buttons End of  */}
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="left">
        <DrawerList toggleDrawer={toggleDrawer(false)} />
      </Drawer>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
