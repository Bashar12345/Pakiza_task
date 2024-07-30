import { Box, IconButton, Typography, Avatar, TextField, Modal, Grid } from "@mui/material";
import CommentIcon from "../../assets/CommentIcon.jsx";
import ShareIcon from "../../assets/ShareIcon.jsx";
import ReactionButton from "../../components/ReactionButton.jsx";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useState } from "react";

const PostActions = ({ imagePath, post, isOpen, onCommentClick }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);

    const shareLinks = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
        twitter: `https://twitter.com/intent/tweet?url=${window.location.href}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`
    };

    return (
        <>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mx={1}
                my={1}
                color={"#6A6A6B"}
                marginInline={"16px"}
            >
                {/* Like */}
                <ReactionButton />

                {/* Comment */}
                <Box display="flex" alignItems="center">
                    <IconButton
                        sx={{
                            padding: 0,
                            margin: 0,
                            marginBottom: "4px",
                        }}
                        onClick={onCommentClick}
                    >
                        <CommentIcon />
                        <Typography
                            marginLeft={1}
                            sx={{
                                marginTop: "2px",
                                fontFamily: "Poppins",
                                fontSize: "16px",
                                fontWeight: 500,
                                lineHeight: "24px",
                            }}
                        >
                            Comment
                        </Typography>
                    </IconButton>
                </Box>

                {/* Share */}
                <Box display="flex" alignItems="center">
                    <IconButton
                        sx={{
                            padding: 0,
                            margin: 0,
                            marginBottom: "4px",
                        }}
                        onClick={handleOpen}
                    >
                        <ShareIcon />
                        <Typography
                            marginLeft={1}
                            sx={{
                                marginTop: "2px",
                                fontFamily: "Poppins",
                                fontSize: "16px",
                                fontWeight: 500,
                                lineHeight: "24px",
                            }}
                        >
                            Share
                        </Typography>
                    </IconButton>
                </Box>
            </Box>

            {/* Modal for Share Options */}
            <Modal
                open={modalOpen}
                onClose={handleClose}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    bgcolor="white"
                    borderRadius="8px"
                    boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
                    p={2}
                    width="300px"
                    height="auto"
                >
                    <Typography
                        variant="h6"
                        sx={{
                            marginBottom: '16px',
                            textAlign: 'center',
                            fontFamily: "Poppins",
                        }}
                    >
                        Share this post
                    </Typography>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item>
                            <IconButton
                                sx={{ padding: "4px", cursor: "pointer" }}
                                onClick={() => window.open(shareLinks.facebook, "_blank")}
                            >
                                <FacebookIcon />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton
                                sx={{ padding: "4px", cursor: "pointer" }}
                                onClick={() => window.open(shareLinks.twitter, "_blank")}
                            >
                                <TwitterIcon />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton
                                sx={{ padding: "4px", cursor: "pointer" }}
                                onClick={() => window.open(shareLinks.linkedin, "_blank")}
                            >
                                <LinkedInIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>

            {/* Conditional Input Field */}
            {isOpen && (
                <Box
                    display="flex"
                    justifyContent={"space-between"}
                    alignItems="center"
                    width="95%"
                    m={2}
                >
                    <Avatar
                        src={`${imagePath}/${post?.user_id?.profile_pic}`}
                        sx={{
                            width: "59px",
                            height: "59px",
                            marginRight: "1rem",
                            borderRadius: { xs: "10px", sm: "50%" },
                        }}
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder={`Write a Public comment...`}
                        InputProps={{
                            sx: {
                                "& .MuiOutlinedInput-notchedOutline": {
                                    border: { xs: "0px", md: "1px" },
                                },
                                borderRadius: { xs: "4px", md: "16px" },
                                paddingInline: { xs: "4px", sm: "16px" },
                                backgroundColor: "#EEEEEE",
                                fontFamily: "Poppins",
                                fontSize: { xs: "12px", sm: "14px" },
                                fontWeight: 400,
                                lineHeight: { xs: "18px", sm: "21px" },
                                letterSpacing: "0.01em",
                                textAlign: "left",
                                color: "#000",
                                "&::placeholder": {
                                    color: "#B0B3B8",
                                },
                            },
                        }}
                    />
                </Box>
            )}
        </>
    );
};

export default PostActions;
