const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');
const validate = require('../middleware/validateRequest');
const { createBookSchema, updateBookSchema } = require('../validators/bookValidator');

/**
 * @route GET /api/books
 * @summary Get all books
 */
router.get('/', booksController.getAllBooks);

/**
 * @route GET /api/books/:id
 * @summary Get a book by ID
 */
router.get('/:id', booksController.getBook);

/**
 * @route POST /api/books
 * @summary Create a new book
 */
router.post('/', validate(createBookSchema), booksController.createBook);

/**
 * @route PUT /api/books/:id
 * @summary Update a book by ID
 */
router.put('/:id', validate(updateBookSchema), booksController.updateBook);

/**
 * @route DELETE /api/books/:id
 * @summary Delete a book by ID
 */
router.delete('/:id', booksController.deleteBook);

module.exports = router;
