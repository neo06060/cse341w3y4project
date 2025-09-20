require('dotenv').config();
require('express-async-errors');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');
const apiRoutes = require('./routes/index'); // central router
const errorHandler = require('./middleware/errorHandler');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger.json');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Mount all API routes under /api
app.use('/api', apiRoutes);

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Health check
app.get('/', (req, res) => res.send('Book API is running'));

// Error handler
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3000;
connectDB(process.env.MONGO_URI).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
