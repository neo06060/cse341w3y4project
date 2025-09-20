const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Book & Reviews API',
    description: 'API for managing books and reviews'
  },
  host: 'localhost:3000',
  basePath: '/api',
  schemes: ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/books.js', './routes/reviews.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
