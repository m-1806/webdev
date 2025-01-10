// Description: This file contains the main application logic for the REST API project.
'use strict';

// Import necessary modules
const express = require('express');
const morgan = require('morgan');
const { sequelize } = require('./models');
const cors = require('cors');

// Enable global error logging if the environment variable is set
const enableGlobalErrorLogging = process.env.ENABLE_GLOBAL_ERROR_LOGGING === 'true';

// Import routes
const userRouter = require('./routes/users');
const courseRouter = require('./routes/courses');

// Initialize Express app
const app = express();

// Configure HTTP request logging
app.use(morgan('dev'));

// Enable CORS for the frontend
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

// Handle preflight requests
app.options('*', cors());

// Parse JSON payloads
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the REST API project!' });
});

// Register routes
app.use('/api', userRouter);
app.use('/api', courseRouter);

// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({ message: 'Route Not Found' });
});

// Global error handler
app.use((err, req, res, next) => {
  if (enableGlobalErrorLogging) {
    console.error(`Global error handler: ${JSON.stringify(err.stack)}`);
  }
  res.status(err.status || 500).json({
    message: err.message,
    error: {},
  });
});

// Set server port
app.set('port', process.env.PORT || 5001);

// Test database connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection successful.');
  } catch (error) {
    console.error('Database connection error:', error);
  }
})();

// Start the server
sequelize.authenticate()
  .then(() => {
    const server = app.listen(app.get('port'), () => {
      console.log(`Server is running on port ${server.address().port}`);
    });
  });