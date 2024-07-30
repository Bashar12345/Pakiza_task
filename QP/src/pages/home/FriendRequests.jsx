import { Box, Avatar, Typography, Button, Grid } from "@mui/material";
import propImage from "../../assets/prop_img-2.png";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)(({ theme }) => ({
  fontFamily: "Roboto", // Responsive paddingtheme.spacing(1.5, 3.1),
  fontSize: "18px",
  fontWeight: 500,
  lineHeight: "14.06px",
  textAlign: "center",
  borderRadius: "8px",
  textTransform: "capitalize",
  // marginRight: theme.spacing(1), // Use theme spacing for consistent spacing
}));

const friendRequests = [
  { id: 1, name: "Harmain Shakeel", time: "2h", avatar: "path/to/avatar1.jpg" },
  { id: 2, name: "Wade Warren", time: "2d", avatar: "path/to/avatar2.jpg" },
  {
    id: 3,
    name: "Cameron Williamson",
    time: "2h",
    avatar: "path/to/avatar3.jpg",
  },
];

const FriendRequests = () => {
  return (
    <Box
      sx={{
        minWidth: "268px",
        borderBottom: "1px solid #E3EDED",
        paddingBlock: "10px",
        paddingInline: "8px",
        backgroundColor: "background.paper",
      }}
    >
      {/* Friends Requests Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBlock: "2px",
        }}
      >
        <Typography
          variant="h6" // Adjust variant as needed (e.g., h6, subtitle1)
          sx={{
            fontFamily: "Poppins",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "21px",
            letterSpacing: "0.02em",
            textAlign: "left",
          }}
        >
          Friends Requests
        </Typography>
        <Button onClick={() => {}}>
          <Typography
            variant="body1" // Adjust variant as needed (e.g., body1, subtitle2)
            sx={{
              fontFamily: "Poppins",
              fontSize: "15px",
              fontWeight: 400,
              lineHeight: "22.5px",
              letterSpacing: "-0.03em",
              textAlign: "left",
              color: "primary.main",
              textTransform: "capitalize",
            }}
          >
            See all
          </Typography>
        </Button>
      </Box>
      {friendRequests.map((request, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBlock: "4px",
          }}
        >
          <Avatar
            src={propImage || request.avatar}
            alt={request.name}
            sx={{
              width: 56,
              height: 56,
              marginRight: 2,
              borderRadius: "25px",
            }}
          />
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "21px",
                  letterSpacing: "-0.03em",
                  textAlign: "left",
                  paddingBlock: "8px",
                }}
              >
                {request.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  marginRight: 2,
                  fontFamily: "Poppins",
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "18px",
                  letterSpacing: "-0.03em",
                  textAlign: "left",

                  color: "primary.main",
                }}
              >
                {request.time} •
              </Typography>
            </Grid>

            <Grid container>
              <Grid item>
                <StyledButton
                  variant="contained"
                  color="primary"
                  sx={{
                    marginRight: 1,
                    marginBottom: 1,
                    width: { xs: "3rem", sm: "4rem", md: "6rem" },
                    height: { xs: "30px", sm: "40px", md: "50px" },
                  }}
                >
                  Confirm
                </StyledButton>
              </Grid>
              <Grid item>
                <StyledButton
                  variant="contained"
                  color="secondary"
                  sx={{
                    marginRight: 0,
                    width: { xs: "3rem", sm: "4rem", md: "6rem" },
                    height: { xs: "30px", sm: "40px", md: "50px" },
                   
                  }}
                >
                  Delete
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default FriendRequests;
