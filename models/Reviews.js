const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    book:   { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true},
    reviewer: { type: String, required: true},
    rating: { type: Number, required: true, min: 1, max: 5},
    comment:    { type: String},
    createdAt:  { type: Date, default: Date.now}
});

module.exports = mongoose.model('Review', reviewSchema);