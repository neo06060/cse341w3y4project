const Review = require('../models/Reviews');

exports.getAllReviews = async (req, res) => {
    const reviews = await Review.find();
    res.json({ success: true, count: reviews.length, data: reviews});
};

exports.getReview = async (req, res) => {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ success: false, message: 'Review not found, try again.'});
    res.json({ success: true, data: review});
};

exports.createReview = async (req, res) => {
    const review = await Review.create(req.body);
    res.status(201).json({ success: true, data: review});
};

exports.updateReview = async (req, res) => {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
    if (!review) return res.status(404).json({ success: false, message: 'Review not found, try again.'});
    res.json({ success: true, data: review});
};

exports.deleteReview = async (req, res) => {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) return res.status(404).json({ success: false, message: 'Review not found, try again.'});
    res.json({ success: true, message: 'Review successfully deleted'});
};
