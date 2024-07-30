import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Link as MuiLink,
  Box,
} from "@mui/material";

const LinkCard = ({ post, imagePath, alterImage }) => {
  return (
    <Card variant="outlined" sx={{ margin: 3, padding: 0, border: "none",  }}>
      {/* Render the link */}
      {post.link && (
        <MuiLink
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ textDecoration: "none" ,color:"inherit" }}
        >
          {/* Conditionally render the media */}
          {post?.link_image && (
            <CardMedia
              component="img"
              sx={{ margin: "0px", padding: "0px", objectFit: "cover" }}
              height="auto"
              width="auto"
              // image={post.media[0] || alterImage}
              // image={alterImage || "https://picsum.photos/200"}
              // image={`${imagePath}/${post.link_image}` || alterImage}
              image={`${post.link_image}`}
              alt="Post media"
            />
          )}

          <CardContent  sx={{  padding: "0px", marginTop: "8px" }} >
            {/* Conditionally render the title */}
            {post?.link_title && (
              <Typography gutterBottom variant="h5" component="div">
                {post.link_title}
              </Typography>
            )}
            {/* Conditionally render the description */}
            {post?.link_description && (
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "18.5px",
                  textAlign: "left",
                  color: "gray",
                }}
              >
                {post?.link_description}
              </Typography>
            )}
          </CardContent>
        </MuiLink>
      )}
    </Card>
  );
};

export default LinkCard;
