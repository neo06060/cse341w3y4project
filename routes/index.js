const router = require('express').Router();

// Mount all route files
router.use('/books', require('./books'));
router.use('/reviews', require('./reviews'));

module.exports = router;
