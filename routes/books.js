const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');
const validate = require('../middleware/validateRequest');
const { createBookSchema, updateBookSchema } = require('../validators/bookValidator');
const authenticateJWT = require('../middleware/authenticateJWT');

// Public routes
router.get('/', booksController.getAllBooks);
router.get('/:id', booksController.getBook);

// Protected routes
router.post('/', authenticateJWT, validate(createBookSchema), booksController.createBook);
router.put('/:id', authenticateJWT, validate(updateBookSchema), booksController.updateBook);
router.delete('/:id', authenticateJWT, booksController.deleteBook);

module.exports = router;
