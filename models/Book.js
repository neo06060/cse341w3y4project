const mongoose = require ('mongoose');

const bookSchema = new mongoose.Schema({
    title:  { type: String, required: true},
    author: { type: String, required: true},
    isbn:   { type: String, required: true, unique: true},
    publisher:  { type: String},
    publishedDate:  { type: Date},
    pages:  { type: Number},
    genre:  { type: String},
    price:  { type: Number},
    createdAt:  { type: Date, default: Date.now}
});

module.exports = mongoose.model('Book', bookSchema);