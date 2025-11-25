const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Update this connection string with your MongoDB URI
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/hospital-db';
    
    await mongoose.connect(mongoURI);
    
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
