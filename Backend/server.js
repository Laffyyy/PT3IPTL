const express = require('express');
const cors = require('cors');
const connectDB = require('./db'); // Import the MongoDB connection setup
require('dotenv').config(); // Load environment variables

const app = express();

// Connect to MongoDB
connectDB();

app.use(cors({
    origin: 'http://localhost:3001' // Replace with your frontend URL
}));
app.use(express.json()); // Parse JSON bodies

app.use('/api/auth', require('./Routers/auth')); // Add this line to include the auth routes

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
