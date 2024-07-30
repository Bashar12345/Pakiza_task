import { createTheme } from "@mui/material/styles";

// Import the fonts
import "typeface-manrope";
import "typeface-raleway";
import "typeface-open-sans";
import 'typeface-public-sans';
import "typeface-inter";
import "typeface-poppins";
import "typeface-roboto";

const theme = createTheme({
  palette: {
    primary: {
      main: "#307777",
    },
    secondary: {
      main: "#203521",
    },
    tertiary: {
      main: "#E5E6EC",
    },
    text: {
      primary: "#000000",
      secondary: "#000000",
    },
    navbar: {
      main: "#ffffff",
    },
    card: {
      main: "#ffffff",
    },
    border: {
      main: "#E3EDED",
    },
    background: {
      default: "#E5E6EC", // Set default background color to white
      // default: "#000000",
      // default: "rgba(0, 0, 0, 0.9)",
    },
  },
});

export default theme;
