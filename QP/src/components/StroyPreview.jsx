import { Box } from "@mui/material";

const StoryPreview = ({ children, style, onClick }) => (
    <Box
      variant="contained"
      sx={{
        ...style,
        padding: { xs: "0px", sm: "15px 20px", md: "10px 20px" },
        width: { xs: "100vw", sm: "24vw", md:"28vw", lg: "323px" }, // Responsive width
        height: { xs: "100vh", sm: "45vh", md: "60vh",lg: "558px" }, // Responsive height
        maxHeight: "100vh", // Ensure it doesn't exceed the viewport height
        borderRadius: { xs: "0px", sm:"8px",}
       
      }}
     
    >
      {children}
    </Box>
  );

export default StoryPreview;