const router = require('express').Router();
const {
  getThoughts,
  getSingleThoughts,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/appController');

// /api/thought
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThoughts)
  .put(updateThought)
  .delete(deleteThought);

// /api/applications/:applicationId/tags
router.route('/:thoughtId/tags').post(addReaction);

// /api/applications/:applicationId/tags/:tagId
router.route('/:thoughtId/reaction/:reactionId').delete(removeReaction);

module.exports = router;
