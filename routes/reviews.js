const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviewsController');
const validate = require('../middleware/validateRequest');
const { createReviewSchema, updateReviewSchema } = require('../validators/reviewValidator');

/**
 * @route GET /api/reviews
 * @summary Get all reviews
 */
router.get('/', reviewsController.getAllReviews);

/**
 * @route GET /api/reviews/:id
 * @summary Get a review by ID
 */
router.get('/:id', reviewsController.getReview);

/**
 * @route POST /api/reviews
 * @summary Create a new review
 */
router.post('/', validate(createReviewSchema), reviewsController.createReview);

/**
 * @route PUT /api/reviews/:id
 * @summary Update a review by ID
 */
router.put('/:id', validate(updateReviewSchema), reviewsController.updateReview);

/**
 * @route DELETE /api/reviews/:id
 * @summary Delete a review by ID
 */
router.delete('/:id', reviewsController.deleteReview);

module.exports = router;
