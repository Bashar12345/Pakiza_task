import { Box, useMediaQuery, useTheme } from "@mui/material";

const StoryLayout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const drawerWidth = isMobile ? "0%" : "385px";
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        // border: "2px solid black",
        width: "100%",
        padding:  { xs: "0px", sm: "16px" } ,
        paddingTop:  { xs: "0px", sm: "21px" } ,
      }}
    >
      {/* Sidebar */}
      <Box width={"375px"}>
       <span></span>
      </Box>
      <Box
        sx={{
          backgroundColor: "white",
          maxWidth: { xs: "100%", md: `calc(100% - ${drawerWidth})` },
          height: "auto",
          // maxHeight: { xs: "100%", md: "85vh" },
          marginBlock: { xs: "0px", md: "24px" },
          marginInline: { xs: "0px" },
          padding:  { xs: "0px", sm: "20px 19px 20px 19px" },
          borderRadius: "8px",
          marginLeft: { sm: drawerWidth },
          // border: "2px solid black",
          // opacity: 0px;
          // border: "2px solid black",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default StoryLayout;
