const express = require('express');
const connectDB = require('./config/db'); // Connect to MongoDB
const parkingRoutes = require('./routes/parkingRoutes'); // Import parking routes

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', parkingRoutes); // Use the parking routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));