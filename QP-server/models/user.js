const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  user_role: { type: String, default: "1" },
  gender: { type: String },
  day: { type: Number }, // Added day, month, year fields
  month: { type: Number },
  year: { type: Number },
});

module.exports = mongoose.model("User", userSchema);
