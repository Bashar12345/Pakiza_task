const express = require('express');
const router = express.Router();
const storyController = require('../controllers/storiesController.js');

// Routes for stories
router.get('/stories', storyController.getAllStories);
router.get('/stories/:id', storyController.getStoryById);
router.post('/stories', storyController.createStory);
router.put('/stories/:id', storyController.updateStory);
router.delete('/stories/:id', storyController.deleteStory);

module.exports = router;
// export default router; 