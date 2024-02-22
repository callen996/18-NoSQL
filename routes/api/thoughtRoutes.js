const router = require('express').Router();
const {
  getThoughts,
  getSingleThoughts,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// /api/thought
router.route('/thoughts').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/thoughts/:thoughtId')
  .get(getSingleThoughts)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/thoughts/:thoughtId/reactions').post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/thoughts/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
