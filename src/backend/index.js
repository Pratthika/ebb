// index.js

const express = require('express');
const connectDB = require('./db'); // Import database connection function
const userRoutes = require('./routes/userRoutes'); // Import user routes

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use('/api/users', userRoutes); // Mount user routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Connect to the database
connectDB()
  .then(() => console.log('MongoDB connected'))
  .catch(error => console.error('MongoDB connection error:', error));
