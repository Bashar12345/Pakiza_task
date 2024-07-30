import { Typography, Box } from '@mui/material';
import { formatDistanceToNow } from 'date-fns';

function TimeFormat({ post }) {
  const timeAgo = formatDistanceToNow(new Date(post), { addSuffix: true });

  return (
    <Typography
      color="textSecondary"
      display="flex"
      alignItems="center"
      sx={{
        fontFamily: "Poppins",
        fontSize: "13px",
        fontWeight: 400,
        lineHeight: "10.5px",
        textAlign: "left",
      }}
    >
      {timeAgo} •{" "}
    </Typography>
  );
}

export default TimeFormat;
