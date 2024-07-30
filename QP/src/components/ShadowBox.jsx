import { Box } from "@mui/material";

const ShadowBox = ({ children, style }) => (
  <Box
    sx={{
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
      padding: "4px",
      borderRadius: "8px", // Optional: to give rounded corners
      backgroundColor: "#fff",
      ...style,
    }}
  >
    {children}
  </Box>
);

export default ShadowBox;
