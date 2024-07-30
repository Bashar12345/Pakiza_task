// controllers/authController.js

const User = require('../models/User');

// Registration controller
exports.registerUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login controller
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) throw new Error('User not found');
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

// User info controller
exports.userInfo = async (req, res) => {
  // Implement logic to fetch user info
};

// Logout controller
exports.logoutUser = async (req, res) => {
  // Implement logout logic
};
