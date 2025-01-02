const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware (adds functionality to your server)
app.use(cors()); // Allows communication with the frontend
app.use(express.json()); // Parses JSON data

// Test Route
app.get('/', (req, res) => {
  res.send('Backend is running...');
});

// Start the server
const PORT = process.env.PORT || 5000; // Use the port from .env or default to 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
