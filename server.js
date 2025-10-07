const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware: parse JSON
app.use(express.json());

// Connect to DB
connectDB()

// Routes
app.use("/students", require("./routes/studentRoutes"));

// Default Route aka HOME page
app.get("/", ( req, res ) => {
    res.send("API Server for Express JS is up and running smoothly....");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on port http://local:${PORT}`));