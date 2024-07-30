const Story = require("./models/Story");

// Get all stories
const getAllStories = async (req, res) => {
  try {
    const stories = await Story.find();
    res.status(200).json(stories);
  } catch (err) {
    console.error("Error getting stories:", err);
    res.status(500).json({ error: "Error getting stories" });
  }
};

// Get a single story by ID
const getStoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const story = await Story.findById(id);
    if (!story) {
      return res.status(404).json({ error: "Story not found" });
    }
    res.status(200).json(story);
  } catch (err) {
    console.error("Error getting story by ID:", err);
    res.status(500).json({ error: "Error getting story" });
  }
};

// Create a new story
const createStory = async (req, res) => {
  try {
    // Create a new story instance with the entire request body
    const newStory = new Story(req.body);

    // Save the story to MongoDB
    const savedStory = await newStory.save();

    res.status(201).json(savedStory); // Respond with the saved story
  } catch (err) {
    console.error("Error creating story:", err);
    res.status(500).json({ error: "Error creating story" });
  }
};

// Update an existing story
const updateStory = async (req, res) => {
  const { id } = req.params;
  const { author, content, backgroundColor, privacy } = req.body;
  try {
    const updatedStory = await Story.findByIdAndUpdate(
      id,
      { author, content, backgroundColor, privacy },
      { new: true }
    );
    if (!updatedStory) {
      return res.status(404).json({ error: "Story not found" });
    }
    res.status(200).json(updatedStory);
  } catch (err) {
    console.error("Error updating story:", err);
    res.status(500).json({ error: "Error updating story" });
  }
};

// Delete an existing story
const deleteStory = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedStory = await Story.findByIdAndDelete(id);
    if (!deletedStory) {
      return res.status(404).json({ error: "Story not found" });
    }
    res.status(200).json({ message: "Story deleted successfully" });
  } catch (err) {
    console.error("Error deleting story:", err);
    res.status(500).json({ error: "Error deleting story" });
  }
};

module.exports = {
  getAllStories,
  getStoryById,
  createStory,
  updateStory,
  deleteStory,
};
