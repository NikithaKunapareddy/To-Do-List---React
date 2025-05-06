# Todo List Application

A full-stack Todo List application built with React, Express.js, and MongoDB.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB installed and running locally
- npm or yarn package manager

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following content:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/todo-app
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Features

- Create new todos
- Mark todos as complete/incomplete
- Delete todos
- Responsive design with Tailwind CSS
- Real-time updates
- MongoDB persistence

## Tech Stack

- Frontend:
  - React with TypeScript
  - Axios for API calls
  - Tailwind CSS for styling

- Backend:
  - Express.js with TypeScript
  - MongoDB with Mongoose
  - CORS for cross-origin resource sharing 