import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Box,
  Link,
  Grid,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import { toast } from "react-toastify";
import { MuiTelInput } from "mui-tel-input";
import axiosInstance from "../api/apiQueries";
import { useAuth } from '../context/AuthContext'; 

const Register = () => {
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    gender: "",
    acceptTerms: false,
    dateOfBirth: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    gender: "",
    acceptTerms: "",
    dateOfBirth: "",
  });

  // Validate the form when submit button is clicked
  const validateForm = () => {
    let valid = true;
    const newErrors = { ...formErrors }; // Make a copy of formErrors

    // Validate firstName
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
      valid = false;
    } else {
      newErrors.firstName = "";
    }

    // Validate lastName
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
      valid = false;
    } else {
      newErrors.lastName = "";
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    } else {
      newErrors.email = "";
    }

    // Validate password
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    } else {
      newErrors.password = "";
    }

    // Validate phoneNumber (optional, adjust as needed)
    if (
      formData.phoneNumber &&
      !/^\+(?:[0-9] ?){6,14}[0-9]$/.test(formData.phoneNumber)
    ) {
      newErrors.phoneNumber = "Phone Number is invalid";
      valid = false;
    } else {
      newErrors.phoneNumber = "";
    }

    // Validate gender
    if (!formData.gender) {
      newErrors.gender = "Gender is required";
      valid = false;
    } else {
      newErrors.gender = "";
    }

    // Validate acceptTerms
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = "You must accept the Terms and Conditions";
      valid = false;
    } else {
      newErrors.acceptTerms = "";
    }

    // console.log("formData:", formData);
    // console.log("newErrors:", newErrors);

    setFormErrors(newErrors); // Update formErrors state with newErrors
    return valid;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phoneNumber: value });
  };

  //   const handlePhoneChange = (value) => {
  //     setFormData((prevState) => ({
  //       ...prevState,
  //       phoneNumber: value,
  //     }));
  //   };

  const handleRegister = async () => {
    if (!validateForm()) {
      toast.error("Form has errors. Please correct them before submitting.");
      return;
    }

    try {
      // const { day, month, year, ...rest } = formData;
      // const dateOfBirth = `${year}-${String(month).padStart(2, "0")}-${String(
      //   day
      // ).padStart(2, "0")}`;
      // // const updatedFormData = { ...rest, dateOfBirth };

      await register(formData);

      // const response = await axiosInstance.post(
      //   "/users/register",
      //   updatedFormData
      // );

      // console.log("Registration successful:", response.data);

      clearForm();
      // console.log("Form submitted successfully. Form data cleared.");
      toast.success("Form submitted successfully. Form data cleared.");
    } catch (error) {
      console.error("Registration error:", error);
      toast.error(error.response?.data?.message || "Registration failed.");
    }
  };

  const clearForm = () => {
    // Replace with logic to reset formData to initial state or empty values
    // Example: Assuming formData is an object with fields like day, month, year
    const initialFormData = {
      day: "",
      month: "",
      year: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
      gender: "",
      acceptTerms: false,
      dateOfBirth: "",
      // Add other fields as needed
    };
    setFormData(initialFormData); // Replace setFormData with your state update function
  };

  return (
    <Box sx={{ background: "#012F41" }}>
      <Box sx={{ margin: "0 auto", maxWidth: "1280px", padding: "0 13px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            // backgroundColor: "#012F41",
            // padding: "20px",
            boxSizing: "border-box",
          }}
        >
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{ width: "100%" }}
          >
            <Grid item xs={12} sm={8}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  height: "40%",
                  gap: { xs: "12px", sm: "27px" },

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
                  Welcome to the first decentralized Social Network in the world
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
                  We are the only decentralized social network that gives you
                  the opportunity to monetize your time, even if you are a
                  regular user who doesn’t create content. Use your earnings to
                  buy any service or goods from the native marketplace.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    width: { xs: "145px", sm: "157px" },
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
                    Login Now!
                  </Typography>
                </Button>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={4}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "20px",
                  borderRadius: "4px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  width: "100%",
                  maxWidth: "400px",
                  boxSizing: "border-box",
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
                  Register your Account
                </Typography>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                      error={!!formErrors.firstName}
                      helperText={formErrors.firstName}
                      InputLabelProps={{
                        sx: { fontFamily: "Manrope" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                      error={!!formErrors.lastName}
                      helperText={formErrors.lastName}
                      InputLabelProps={{
                        sx: { fontFamily: "Manrope" },
                      }}
                    />
                  </Grid>
                </Grid>
                <TextField
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  error={!!formErrors.email}
                  helperText={formErrors.email}
                  InputLabelProps={{
                    sx: { fontFamily: "Manrope" },
                  }}
                />
                <TextField
                  label="Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  error={!!formErrors.password}
                  helperText={formErrors.password}
                  InputLabelProps={{
                    sx: { fontFamily: "Manrope" },
                  }}
                />
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <TextField
                      label="Day"
                      type="number"
                      name="day"
                      value={formData.day}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        sx: { fontFamily: "Manrope" },
                      }}
                      inputProps={{ min: 1, max: 31 }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      label="Month"
                      type="number"
                      name="month"
                      value={formData.month}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        sx: { fontFamily: "Manrope" },
                      }}
                      inputProps={{ min: 1, max: 12 }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      label="Year"
                      type="number"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        sx: { fontFamily: "Manrope" },
                      }}
                      inputProps={{ min: 1900, max: new Date().getFullYear() }}
                    />
                  </Grid>
                </Grid>
                <MuiTelInput
                  label="Phone Number"
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handlePhoneChange}
                  fullWidth
                  margin="normal"
                  // InputProps={{
                  //   startAdornment: (
                  //     <InputAdornment position="start">+880</InputAdornment>
                  //   ),
                  //   sx: { fontFamily: "Manrope" }, // Optional styling for input
                  // }}
                  InputLabelProps={{
                    sx: { fontFamily: "Manrope" }, // Optional styling for label
                  }}
                />

                {/* <PhoneInput
        label="Phone Number"
        country="US" // Default country
        value={formData.phoneNumber}
        onChange={handlePhoneChange}
        fullWidth
        margin="normal"
        inputComponent={TextField}
        InputLabelProps={{
          sx: { fontFamily: "Manrope" }
        }}
        error={false} // Set error state based on your validation logic
        helperText={''} // Set helper text based on your validation logic
      /> */}
                <TextField
                  label="Your Gender"
                  name="gender"
                  select
                  value={formData.gender}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  error={!!formErrors.gender}
                  helperText={formErrors.gender}
                  InputLabelProps={{
                    sx: { fontFamily: "Manrope" },
                  }}
                >
                  <MenuItem value="65018b21577b4590853ef574">Male</MenuItem>
                  <MenuItem value="2">Female</MenuItem>
                  <MenuItem value="000">Other</MenuItem>
                </TextField>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                      name="acceptTerms"
                    />
                  }
                  label={
                    <Typography sx={{ fontSize: "14px" }}>
                      I accept the{" "}
                      <strong style={{ cursor: "pointer", color: "#307777" }}>
                        Terms and Conditions
                      </strong>{" "}
                      of the website
                    </Typography>
                  }
                  sx={{ mt: 1 }}
                  error={!!formErrors.acceptTerms}
                  helperText={formErrors.acceptTerms}
                />

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleRegister}
                  sx={{ mt: 2, backgroundColor: "" }}
                >
                  Complete Registration!
                </Button>

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

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 2,
                  }}
                >
                  <Typography variant="body2">
                    Already have an account?{" "}
                    <Link href="#" underline="none">
                      Login here
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
