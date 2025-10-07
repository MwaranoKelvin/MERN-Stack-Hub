// Connection File
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { // Connection String
            useNewUrlParser: true, // To handle MongoDB connection string parsing
            useUnifiedTopology: true, // To opt in to using the MongoDB driver's new connection management engine
        });
        console.log('MongoDB Connected...');
    } catch (error) {
        console.error(error.message);
        process.exit(1); // Exit process with failure
        
    }
};
module.exports = connectDB;