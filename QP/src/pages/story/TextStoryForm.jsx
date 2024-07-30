import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Drawer,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { toPng } from "html-to-image";

import CloseButton from "../../components/Closebutton";

import StoryPreview from "../../components/StroyPreview";
import { styled } from "@mui/material/styles";
import axiosInstance from "../../api/apiQueries";
import StoryLayout from "./StoryLayout";
import { toast } from "react-toastify";

const ColorOption = styled("div")({
  width: "23px",
  height: "23px",
  borderRadius: "50%",
  display: "inline-block",
  marginRight: "8px",
  cursor: "pointer",
});

const TextStoryForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mainDrawerOpen, setMainDrawerOpen] = useState(false);

  // State variables
  const [storyText, setStoryText] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#2DB9B9"); // Default background color
  const [privacy, setPrivacy] = useState("Public"); // Default privacy option
  const storyPreviewRef = useRef(null);

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

  const handleSubmit = async () => {
    try {
      // Convert StoryPreview to image
      const dataUrl = await toPng(storyPreviewRef.current);

      // Create FormData to send the image file
      const formData = new FormData();
      formData.append("image", dataUrlToFile(dataUrl), "story-preview.png"); // 'image' is the field name your backend expects

      // Example Axios POST request to your backend
      const response = await axiosInstance.post("/story", formData);

      console.log("Image uploaded successfully:", response.data);
      toast.success("Image uploaded successfully");
      // Handle success (e.g., show message to user)
    } catch (error) {
      console.error("Error uploading image:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  const dataUrlToFile = (dataUrl) => {
    const blobBin = atob(dataUrl.split(",")[1]);
    const array = [];
    for (let i = 0; i < blobBin.length; i++) {
      array.push(blobBin.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], { type: "image/png" });
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
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
            display: isMobile ? "none" : "block", // Hide drawer on mobile
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
      {/* Preview Section */}
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
                display: isMobile ? "none" : "block", // Hide on mobile
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
                backgroundColor: "#F0F2F5",
                borderRadius: "8px",
                paddingBlock: "71px",
                overflow: "hidden",
              }}
            >
              {/* Preview */}
              <StoryPreview
                style={{
                  background: backgroundColor,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={isMobile ? handleMainDrawerToggle : null}
              >
                <Typography
                  variant="body1"
                  component="span"
                  sx={{
                    color: `rgba(255, 255, 255, ${storyText ? 1 : 0.3})`,
                    fontFamily: "Poppins",
                    fontSize: "24px",
                    fontWeight: 600,
                    lineHeight: "36px",
                    textAlign: "left",
                    wordBreak: "break-word", // Break words when they are too long
                    overflowWrap: "break-word", // Break words when they are too long
                    whiteSpace: "pre-wrap", // Preserve whitespace and wrap text
                  }}
                >
                  {storyText || "Start Typing"}
                </Typography>
              </StoryPreview>
            </Box>
          </Grid>
        </Grid>
      </StoryLayout>
      {/* Main Content end */}

      {isMobile && (
        <Drawer
          variant="temporary"
          open={mainDrawerOpen}
          onClose={handleMainDrawerToggle}
          anchor="bottom"
          ModalProps={{ keepMounted: true }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
              height: "100%",
            },
          }}
        >
          <Box sx={{ padding: "21px", height: "100%", overflowY: "auto" }}>
            <Grid container spacing={3} justifyContent="center">
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <CloseButton onClick={handleMainDrawerToggle} />
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "400px",
                    backgroundColor: backgroundColor,
                    borderRadius: "8px",
                  }}
                >
                  <StoryPreview
                    style={{
                      background: "linear-gradient(to right, #00b4db, #0083b0)",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="body1"
                        component="span"
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: 16,
                          fontWeight: 600,
                          lineHeight: "24px",
                          textAlign: "center",
                        }}
                      >
                        {storyText || "Start Typing"}
                      </Typography>
                    </Box>
                  </StoryPreview>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default TextStoryForm;
