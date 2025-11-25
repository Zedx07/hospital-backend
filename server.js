const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Health check route
app.get('/', (req, res) => {
  res.json({ message: 'Hospital Backend API is running!' });
});

// Sample API routes - Add your APIs here
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'API is healthy' });
});

// Example: Get all patients
app.get('/api/patients', (req, res) => {
  res.json({ message: 'Get all patients' });
});

// Example: Create new patient
app.post('/api/patients', (req, res) => {
  res.json({ message: 'Create new patient', data: req.body });
});

// Example: Get patient by ID
app.get('/api/patients/:id', (req, res) => {
  res.json({ message: `Get patient with ID: ${req.params.id}` });
});

// Example: Update patient
app.put('/api/patients/:id', (req, res) => {
  res.json({ message: `Update patient with ID: ${req.params.id}`, data: req.body });
});

// Example: Delete patient
app.delete('/api/patients/:id', (req, res) => {
  res.json({ message: `Delete patient with ID: ${req.params.id}` });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
