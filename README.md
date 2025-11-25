# Hospital Backend API

A simple Node.js backend project with MongoDB integration.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Update MongoDB connection string in `.env` file:
```
MONGODB_URI=your_mongodb_connection_string
```

3. Run the server:
```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

## API Endpoints

- `GET /` - Health check
- `GET /api/health` - API health status
- `GET /api/patients` - Get all patients
- `POST /api/patients` - Create new patient
- `GET /api/patients/:id` - Get patient by ID
- `PUT /api/patients/:id` - Update patient
- `DELETE /api/patients/:id` - Delete patient

## Project Structure

- `server.js` - Main API file with all routes
- `db.js` - MongoDB connection configuration
- `.env` - Environment variables (update connection string here)
