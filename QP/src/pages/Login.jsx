import { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Box,
  Link,
  InputAdornment,
  IconButton,
  Grid,
} from "@mui/material";
import { useFormik } from "formik";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const Navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  console.log("isAuthenticated ",isAuthenticated);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // If already authenticated, redirect to homepage
  useEffect(() => {
    if (isAuthenticated) {
      Navigate("/");
    }
  }, [isAuthenticated, Navigate]);


  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validate: (values) => {
      const errors = {};

      // Basic validation example, add more as needed
      if (!values.email) {
        errors.email = "Required";
      } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
        errors.email = "Invalid email address";
      }

      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters long";
      }

      return errors;
    },
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      // console.log("Login:", values);
      // Add your login logic here, e.g., API calls
      try {
        await login(values.email, values.password);
        // If login successful, you can redirect or perform other actions
        Navigate("/");
      } catch (error) {
        setFieldError("password", "Invalid credentials"); // Example error handling
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Box sx={{ background: "#012F41" }}>
      <Box sx={{ margin: "0 auto", maxWidth: "1280px", padding: "0 13px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: "100vh",
            backgroundColor: "#012F41",
            // padding: "20px",
            boxSizing: "border-box",
          }}
        >
          <Grid
            container
            // spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{ width: "100%" }}
          >
            <Grid item xs={12} sm={8}>
              {/* Left Side: Informational Content */}

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: { xs: "12px", sm: "27px" },
                  height: "35%",

                  marginTop: { xs: "20px", sm: "40px" },
                  padding: { xs: "10px", sm: "40px" },
                }}
              >
                <Typography
                  variant="h2"
                  component="h1"
                  color="#fff"
                  gutterBottom
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: "600",
                    fontSize: { xs: "22px", sm: "52px" },
                    lineHeight: { xs: "26.63px", sm: "70px" },
                    textAlign: "left",
                  }}
                >
                  Welcome to the first decentralised Social Network in the world
                </Typography>
                <Typography
                  variant="body1"
                  color="#fff"
                  paragraph
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: "300",
                    fontSize: { xs: "12px", sm: "16px" },
                    lineHeight: { xs: "18px", sm: "27px" },
                    textAlign: "left",
                  }}
                >
                  We are the only decentralised social network that gives
                  opportunity to monetise your time even if you are a normal
                  user who doesn’t create any content and use the earning to buy
                  any service or goods from the native marketplace.
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    width: { xs: "145px", sm: "183px" },
                    height: { xs: "43px", sm: "60px" },
                    borderRadius: "8px",
                    backgroundColor: "primary.main",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Raleway",
                      textTransform: "capitalize",
                      fontWeight: { xs: 500, sm: 600 },
                      fontSize: { xs: "16px", sm: "20px" },
                      lineHeight: "16px",
                      color: "#FFFFFF",
                    }}
                  >
                    Register Now!
                  </Typography>
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              {/* Rgight Side: Form Content */}

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    padding: "24px",
                    borderRadius: "4px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    maxWidth: "400px",
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={{
                      fontFamily: "Open Sans",
                      fontSize: "20px",
                      fontWeight: { xs: 700, sm: 600 },
                      color: "#307777",
                      lineHeight: "27.24px",
                      textAlign: "left",
                    }}
                  >
                    Login to your Account
                  </Typography>

                  <form
                    onSubmit={formik.handleSubmit}
                    style={{ fontFamily: "Manrope" }}
                  >
                    <TextField
                      id="email"
                      name="email"
                      label="Email Address"
                      type="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      id="password"
                      name="password"
                      label="Password"
                      type={showPassword ? "text" : "password"}
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
                      fullWidth
                      margin="normal"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        // marginTop: "16px",
                      }}
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            id="rememberMe"
                            name="rememberMe"
                            checked={formik.values.rememberMe}
                            onChange={formik.handleChange}
                            sx={{ padding: "0px 0px 0px 8px" }}
                          />
                        }
                        label={
                          <Typography
                            sx={{
                              fontSize: "14px",
                              fontFamily: "Manrope",
                              fontWeight: "400",
                              lineHeight: "19.12px",
                            }}
                          >
                            Remember me
                          </Typography>
                        }
                      />

                      <Link href="#" underline="none">
                        <Typography
                          variant="body2"
                          sx={{ fontFamily: "Manrope", fontSize: "12px" }}
                        >
                          Forgot Password?
                        </Typography>
                      </Link>
                    </Box>

                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{ marginTop: "16px", backgroundColor: "" }}
                    >
                      Login
                    </Button>
                  </form>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      gap: "8px",
                      marginTop: "16px",
                      textAlign: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "16px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          width: "80%",
                        }}
                      >
                        <hr style={{ flex: 1, borderTop: "2px solid #000" }} />
                        <Typography
                          variant="body2"
                          sx={{
                            padding: "0 10px",
                            fontFamily: "Manrope",
                          }}
                        >
                          or sign up
                        </Typography>
                        <hr style={{ flex: 1, borderTop: "2px solid #000" }} />
                      </div>
                    </Box>
                    <Typography variant="body2">
                      Don't have an account?{" "}
                      <Link href="#" underline="none">
                        Sign up here
                      </Link>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
