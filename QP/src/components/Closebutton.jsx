import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CloseButton = ({ onClick }) => (
  <IconButton
    aria-label="close"
    onClick={onClick}
    sx={{ position: "absolute", top: 8, right: 8 , color: (theme) => theme.palette.grey[500],}}
  >
    <CloseIcon />
  </IconButton>
);

export default CloseButton;
