import { Divider, Box } from "@mui/material";

const DividerWithIcon = ({ icon: Icon }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
    >
      <Divider
        sx={{
          width: "100%",
          border: "1px solid rgba(0, 0, 0, 0.12)",
          position: "relative",
          "&::before, &::after": {
            border: "none",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            padding: "0 4px",
          }}
        >
          <Icon />
        </Box>
      </Divider>
    </Box>
  );
};

export default DividerWithIcon;
