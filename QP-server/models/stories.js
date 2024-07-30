const mongoose = require("mongoose");

// Define Story schema
const storySchema = new mongoose.Schema({
  title: { type: String, required: false },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  privacy: { type: String, enum: ["Public", "Private"], default: "Public" },
  likes: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  additionalFields: { type: Schema.Types.Mixed }, // To handle additional dynamic fields
  // Add more fields as needed
});


// Create Story model
const Story = mongoose.model("Story", storySchema);

module.exports = Story;
