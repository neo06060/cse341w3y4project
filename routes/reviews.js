const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviewsController');
const validate = require('../middleware/validateRequest');
const { createReviewSchema, updateReviewSchema } = require('../validators/reviewValidator');
const authenticateJWT = require('../middleware/authenticateJWT');

// Public
router.get('/', reviewsController.getAllReviews);
router.get('/:id', reviewsController.getReview);

// Protected
router.post('/', authenticateJWT, validate(createReviewSchema), reviewsController.createReview);
router.put('/:id', authenticateJWT, validate(updateReviewSchema), reviewsController.updateReview);
router.delete('/:id', authenticateJWT, reviewsController.deleteReview);

module.exports = router;
