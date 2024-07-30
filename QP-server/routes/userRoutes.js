const express = require("express");
const {
  registerUser,
  loginUser,
  userInfo,
  logoutUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

// User info route
router.post("/user-login", userInfo);

// Logout route
router.post("/logout", logoutUser);

module.exports = router;
