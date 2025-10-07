

const express = require('express');
const router = express.Router();
const Student = require('../models/Student');


                                        // CRUD OPERATIONS

// Get all students ( fetch all ) READ operation
router.get("/", async ( req, res ) => { // When someone hits this endpoint, execute the callback function below
    try {
        const students = await Student.find(); // Please wait for the DB operation to complete. When done, store the result in students variable
        res.json(students); // Send the fetched students as JSON response to the client aka frontend
    } catch (error) {
        res.status(500).json({ message: error.message }) // If error occurs, send 500 status code with error message to the client
        
    }
});

// Create a new student ( create one )
router.post("/", async ( req, res ) => {
    const { name, age, email} = req.body; // Directly from the client request body
    try {
        const student = new Student({ name, age, email});
        const saved = await student.save() ;
        res.status(201).json(saved);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update a student by ID ( update one )
router.put("/:id", async ( req, res ) => {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // returns the updated document
        );
        res.json(student); // Send the updated student as JSON response to the client
    } catch (error) { 
        res.status(400).json({ message: error.message });
    }
});

// Delete a student by ID ( delete one )
router.delete("/:id", async ( req, res ) => {
    try {
        await Student.findByIdAndDelete(
            req.params.id
        );
        res.json({ message: "Student Deleted, Bye" });
    } catch (error) {
        res.status(500).json({ message: error.message });
        
    }
});

module.exports = router;


// HTTPS MESSAGES