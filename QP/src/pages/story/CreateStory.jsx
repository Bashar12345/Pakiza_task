import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Drawer,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseButton from "../../components/Closebutton";
import StoryButton from "../../components/StoryButton";
import GalleryIcon from "../../assets/GallaryIcon";
import TextIcon from "../../assets/TextIcon";
import { Link } from "react-router-dom";
import { Close } from "@mui/icons-material";
import StoryLayout from "./StoryLayout";

const CreateStory = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mainDrawerOpen, setMainDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMainDrawerToggle = () => {
    setMainDrawerOpen(!mainDrawerOpen);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };
  const drawerWidth = isMobile ? "0%" : "385px";

  return (
    <Box
      sx={
        {
          // border: "1px solid black",
          width: {xs: "100%", sm: "auto"},
        }
      }
    >
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
            zIndex: 0,
            width: isMobile ? "100%" : 374,
            height: isMobile ? "50%" : "calc(100% - 64px)",
            top: isMobile ? "auto" : "64px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            // border: "2px solid black",
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

          <FormControl fullWidth sx={{ flexGrow: 1 }}>
            {/* <InputLabel id="select-story-type-label">Privacy</InputLabel> */}
            <Select labelId="select-story-type-label" defaultValue="Public">
              <MenuItem value="Public">Public</MenuItem>
              <MenuItem value="Private">Private</MenuItem>
            </Select>
          </FormControl>

          <Box mt={2}>
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

      {/* Main Content */}

      <StoryLayout >
        <Grid
          container
          padding={{xs: "16px", sm: "0px"}}
          width={"100%"}
          height={"100%"}
          // sx={{ border: "2px solid red" }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item xs={12} textAlign={"left"}>
            <Typography
              sx={{
                display: { xs: "none", md: "block" },
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "24px",
                textAlign: "left",
                marginBottom: "8px",
              }}
            >
              Select Story Type
            </Typography>

            {isMobile && (
              <>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginY: "4px",
                  }}
                >
                  <Close
                    sx={{ cursor: "pointer" }}
                    onClick={handleMainDrawerToggle}
                  />
                  <Typography
                    sx={{
                      fontFamily: "Public Sans",
                      fontSize: "16px",
                      fontWeight: "700",
                      lineHeight: "8px",
                      textAlign: "center",
                    }}
                  >
                    Create Story
                  </Typography>
                  <span></span>
                </Box>
              </>
            )}
          </Grid>

          {/*  Select Story Type */}
          <>
            {/* For desktop/tablet view */}
            {!isMobile && (
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  borderRadius: "8px",
                  alignItems: "center",
                }}
                height={{ xs: "50vh", sm: "65vh", md: "78vh" }}
              >
                <Box xs={6}>
                  <StoryButton
                    component={Link}
                    to="/photo-stories"
                    style={{
                      background:
                        "linear-gradient(180deg, #F25268 0%, #FD1EBE 100%)",
                      width: { xs: "154px", md: "247px" },
                      height: { xs: "271px", md: "449px" },
                    }}
                    onClick={isMobile ? handleMainDrawerToggle : null}
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
                      <GalleryIcon />
                      <Typography
                        variant="body1"
                        component="span"
                        marginTop={1}
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: 16,
                          fontWeight: 600,
                          lineHeight: "24px",
                          textAlign: "center",
                        }}
                      >
                        Create Your Photo Story
                      </Typography>
                    </Box>
                  </StoryButton>
                </Box>

                <Box xs={6}>
                  <StoryButton
                    component={Link}
                    to="/stories-form"
                    style={{
                      background:
                        "linear-gradient(180deg, #136CAC 0%, #59DDDD 100%)",
                        width: { xs: "154px", md: "247px" },
                        height: { xs: "271px", md: "449px" },
                    }}
                    onClick={isMobile ? handleMainDrawerToggle : null}
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
                      <TextIcon />
                      <Typography
                        variant="body1"
                        component="span"
                        marginTop={1}
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: 16,
                          fontWeight: 600,
                          lineHeight: "24px",
                          textAlign: "center",
                        }}
                      >
                        Create Your Text Story
                      </Typography>
                    </Box>
                  </StoryButton>
                </Box>
              </Box>
            )}

            {/* For mobile view, render StoryButton components directly without the wrapping Box */}
            {isMobile && (
              <>
                <Grid item xs={6}>
                  <StoryButton
                    component={Link}
                    to="/photo-stories"
                    style={{
                      background:
                        "linear-gradient(180deg, #F25268 0%, #FD1EBE 100%)",
                      width: { xs: "154px", md: "247px" },
                      height: { xs: "271px", md: "449px" },
                      marginRight: "10px", // Adjust margin as needed
                    }}
                    onClick={isMobile ? handleMainDrawerToggle : null}
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
                      <GalleryIcon />
                      <Typography
                        variant="body1"
                        component="span"
                        marginTop={1}
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: 16,
                          fontWeight: 600,
                          lineHeight: "24px",
                          textAlign: "center",
                        }}
                      >
                        Create Your Photo Story
                      </Typography>
                    </Box>
                  </StoryButton>
                </Grid>
                <Grid item xs={6}>
                  <StoryButton
                    component={Link}
                    to="/stories-form"
                    style={{
                      width: { xs: "154px", md: "247px" },
                      height: { xs: "271px", md: "449px" },
                      background:
                        "linear-gradient(180deg, #136CAC 0%, #59DDDD 100%)",
                      // margin: "10px", // Adjust margin as needed
                    }}
                    onClick={isMobile ? handleMainDrawerToggle : null}
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
                      <TextIcon />
                      <Typography
                        variant="body1"
                        component="span"
                        marginTop={1}
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: 16,
                          fontWeight: 600,
                          lineHeight: "24px",
                          textAlign: "center",
                        }}
                      >
                        Create Your Text Story
                      </Typography>
                    </Box>
                  </StoryButton>
                </Grid>
              </>
            )}
          </>

          {/* End of StoryButton components  */}
        </Grid>
      </StoryLayout>
    </Box>
  );
};

export default CreateStory;
