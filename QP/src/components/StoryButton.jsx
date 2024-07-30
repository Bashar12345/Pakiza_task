import { Button } from "@mui/material";

const StoryButton = ({ children, style, onClick, component, to }) => (
  <Button
    variant="contained"
    component={component}
    to={to}
    onClick={onClick}
    sx={{
      ...style,
      padding: "10px 20px",
      maxWidth: "247px",
      maxHeight: "449px",
      gap: "0px",
      borderRadius: "8px",
      opacity: "0px",
    }}
    
  >
    {children}
  </Button>
);

export default StoryButton;
