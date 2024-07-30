import { Outlet, useLocation } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import NavbarMobile from "../components/NavbarMobile";

const LayoutContainer = styled(Box)({
  marginInline: { xs: "0.1rem", sm: "1rem", xl: "4rem" },
  // display: "flex",
});

const AppLayout = () => {
  const location = useLocation();

  // Check if the current route matches "/stories-lists"
  const isStoryListRoute = location.pathname.includes("/stories-lists");

  return (
    <>
      {!isStoryListRoute && (
        <Navbar
          position="fixed"
          style={{ zIndex: 1500, backgroundColor: "#fff" }}
        />
      )}

      <Box sx={{ marginTop: { xs: "0px", sm: "6px" } }}>
        <CssBaseline />
        {!isStoryListRoute && <NavbarMobile sx={{ zIndex: 1200 }} />}
        <LayoutContainer>
          <Outlet />
        </LayoutContainer>
      </Box>
    </>
  );
};

export default AppLayout;
