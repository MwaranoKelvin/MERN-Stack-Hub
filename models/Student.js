const mongoose = require('mongoose'); // Import mongoose to define schema and model

require('dotenv').config(); // Load environment variables from .env file

// Define Schema. The steps followed to create collections aka tables in the DB
const studentSchema = new mongoose.Schema({
    name: { type: String, requires: true },
    age: { type: Number, required: true },
    email: { type: String, unique: true, required: true }
}, { timestamps: true });

// Create Model (representation of the collection)
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;  // Export the model to use it in other parts of the application