import { Card, CardContent, Typography } from "@mui/material";

const SharedPostCard = ({ post }) => {
  return (
    <Card variant="outlined" sx={{ margin: 3, padding: 0 }}>
      <CardContent>
        <Typography
          sx={{
            fontFamily: "poppins",
            fontSize: "15px",
            fontWeight: 400,
            lineHeight: "18.5px",
            textAlign: "left",
          }}
        >
          {post.share_post_id.description || "No shared post description"}
        </Typography>
        <Typography
          color="textSecondary"
          sx={{
            fontFamily: "Poppins",
            fontSize: "12px",
            fontWeight: 400,
            lineHeight: "18.5px",
            textAlign: "left",
            color: "gray",
          }}
        >
          {`Shared from ${post.share_post_id.user_id.first_name} ${post.share_post_id.user_id.last_name}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SharedPostCard;
