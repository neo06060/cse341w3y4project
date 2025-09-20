const Joi = require ('joi');

const createBookSchema = Joi.object({
    title: Joi.string().min(1).required(),
    author: Joi.string().min(1).required(),
    isbn: Joi.string().min(1).required(),
    publisher: Joi.string().optional().allow(''),
    publishedDate: Joi.date().optional(),
    pages: Joi.number().integer().min(1).optional(),
    genre: Joi.string().optional().allow(''),
    price: Joi.number().precision(2).min(0).optional()
});

const updateBookSchema = Joi.object({
    title: Joi.string().min(1).optional(),
    author: Joi.string().min(1).optional(),
    isbn: Joi.string().min(1).optional(),
    publisher: Joi.string().optional().allow(''),
    publishedDate: Joi.date().optional(),
    pages: Joi.number().integer().min(1).optional(),
    genre: Joi.string().optional().allow(''),
    price: Joi.number().precision(2).min(0).optional()
}).min(1);

module.exports = {createBookSchema, updateBookSchema};