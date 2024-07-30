import { useState } from "react";
import {
  Box,
  Button,
  Drawer,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Slider,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import axiosInstance from "../../api/apiQueries";
import CloseButton from "../../components/Closebutton";
import PublishOutlinedIcon from "@mui/icons-material/PublishOutlined";
import ZoomOutMapOutlinedIcon from "@mui/icons-material/ZoomOutMapOutlined";
import ZoomInMapOutlinedIcon from "@mui/icons-material/ZoomInMapOutlined";
import StoryPreview from "../../components/StroyPreview";
import { toast } from "react-toastify";
import { styled } from "@mui/material/styles";
import StoryLayout from "./StoryLayout";

const ColorOption = styled("div")({
  width: "23px",
  height: "23px",
  borderRadius: "50%",
  display: "inline-block",
  marginRight: "8px",
  cursor: "pointer",
});

const PhotoStroy = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mainDrawerOpen, setMainDrawerOpen] = useState(false);

  const [uploadedFile, setUploadedFile] = useState(null);
  const [zoomValue, setZoomValue] = useState(100);

  // State variables
  const [storyText, setStoryText] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#2DB9B9"); // Default background color
  const [privacy, setPrivacy] = useState("Public"); // Default privacy option

  // Handler for text input change
  const handleTextChange = (e) => {
    setStoryText(e.target.value);
  };

  // Handler for background color change
  const handleBackgroundColorChange = (color) => {
    setBackgroundColor(color);
  };

  // Handler for privacy option change
  const handlePrivacyChange = (e) => {
    setPrivacy(e.target.value);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMainDrawerToggle = () => {
    setMainDrawerOpen(!mainDrawerOpen);
  };

  const handleZoomChange = (newValue) => {
    setZoomValue(newValue);
    // Implement zoom logic here if necessary
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
      // Optional: You can also upload the file to your server here
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, if needed
    // For example, submit form data to another endpoint
    const formData = new FormData();
    formData.append("text", storyText);
    formData.append("file", uploadedFile);
    axiosInstance
      .post("/story", formData)
      .then((response) => {
        console.log("Form submitted successfully:", response.data);
        toast.success("Form submitted successfully");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        toast.error("Error submitting form");
      });
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* Sidebar */}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? drawerOpen : true}
        onClose={handleDrawerToggle}
        anchor={isMobile ? "bottom" : "left"}
        ModalProps={{ keepMounted: true }} // Better performance on mobile
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: isMobile ? "100%" : 374,
            height: isMobile ? "50%" : "calc(100% - 64px)",
            top: isMobile ? "auto" : 64,
            zIndex: 0,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "21px",
            height: "100%",
            overflowY: "auto",
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: "600",
              lineHeight: "36px",
              textAlign: "left",
              marginBottom: "20px",
            }}
          >
            Create Your Story
          </Typography>

          <TextField
            multiline
            rows={10}
            fullWidth
            placeholder="Start Typing"
            hiddenLabel
            value={storyText}
            onChange={handleTextChange}
          />

          <Box sx={{ marginTop: 2 }}>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "18px",
                textAlign: "left",
                marginBottom: "10px",
              }}
            >
              Background Color
            </Typography>
            <Box
              sx={{
                border: "1px solid #CED0D4",
                padding: "12px 10px 6px 10px",
                borderRadius: "4px",
              }}
            >
              {[
                "#2DB9B9",
                "#0019FE",
                "#1C5A76",
                "#00A3FF",
                "#F25268",
                "#FF6928",
                "#F8D000",
                "#A9E400",
                "#EE0000",
              ].map((color) => (
                <ColorOption
                  key={color}
                  style={{ backgroundColor: color }}
                  onClick={() => handleBackgroundColorChange(color)}
                />
              ))}
            </Box>
          </Box>

          <FormControl fullWidth sx={{ marginTop: 2, flexGrow: 1 }}>
            <Select value={privacy} onChange={handlePrivacyChange}>
              <MenuItem value="Public">Public</MenuItem>
              <MenuItem value="Private">Private</MenuItem>
            </Select>
          </FormControl>

          <Box sx={{ marginTop: 2 }}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
            >
              Create Story
            </Button>
          </Box>
        </Box>
      </Drawer>
      {/*  sidebar end */}

      {/* Main Content */}
      <StoryLayout>


        
        <Grid container justifyContent="space-between">
          <Grid item xs={12}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "24px",
                textAlign: "left",
                marginBottom: "8px",
              }}
            >
              Preview
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: { xs: "100vh", sm: "742px" },
                backgroundColor: "#F0F2F5",
                borderRadius: "8px",
                padding: {
                  xs: "19px 18px 19px 18px",
                  sm: "71px 281px 79px 281px",
                },
                position: "relative", // Ensure relative positioning for absolute elements
              }}
            >
              <StoryPreview
                style={{
                  background: "whitesmoke",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // width: "100%",
                  // height: "100%",
                  position: "relative", // Ensure relative positioning for absolute elements
                }}
                onClick={isMobile ? handleMainDrawerToggle : null}
              >
                {/* Image Preview */}
                {uploadedFile && (
                  <img
                    src={URL.createObjectURL(uploadedFile)}
                    alt="Uploaded"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain", // Fit image to the container
                      borderRadius: "8px", // Optional: Add border radius
                      transform: `scale(${zoomValue / 100})`, // Apply zoom level
                    }}
                  />
                )}

                {/* Upload Button */}
                {!uploadedFile && (
                  <label htmlFor="upload-file">
                    <input
                      id="upload-file"
                      type="file"
                      accept="image/*" // Adjust file type if necessary
                      style={{ display: "none" }}
                      onChange={handleFileUpload}
                    />
                    <IconButton component="span">
                      <PublishOutlinedIcon fontSize="large" />
                    </IconButton>
                  </label>
                )}

                {/* Volume Rocker (Zoom Control) */}
                {uploadedFile && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "10px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <IconButton
                      onClick={() => handleZoomChange(zoomValue - 10)}
                    >
                      <ZoomInMapOutlinedIcon />
                    </IconButton>
                    <Slider
                      value={zoomValue}
                      onChange={(e, newValue) => handleZoomChange(newValue)}
                      min={10}
                      max={200}
                      step={1}
                      style={{ width: "100px", marginLeft: "10px" }}
                    />
                    <IconButton
                      onClick={() => handleZoomChange(zoomValue + 10)}
                    >
                      <ZoomOutMapOutlinedIcon
                        style={{ transform: "rotate(180deg)" }}
                      />
                    </IconButton>
                  </div>
                )}
              </StoryPreview>
            </Box>
          </Grid>
        </Grid>



      </StoryLayout>
      {/* Main Content end */}
    </Box>
  );
};

export default PhotoStroy;
