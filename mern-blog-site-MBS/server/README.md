# Server Documentation

## Overview

This is the server-side application for the MERN Blog Site project. It is built using Node.js and Express, and it connects to a MongoDB database using Mongoose.

## Getting Started

To get started with the server, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd mern-blog-site-MBS/server
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root of the project and add your MongoDB connection string:
   ```
   MONGO_URI=your_mongodb_connection_string
   ```

4. **Run the server**:
   ```
   npm start
   ```

## API Endpoints

The server exposes several API endpoints for the client application. Refer to the routes defined in `server/src/routes/index.js` for more details.

## Folder Structure

- `src/app.js`: Entry point for the server application.
- `src/models`: Contains Mongoose models.
- `src/routes`: Defines API routes.
- `src/controllers`: Contains logic for handling requests.

## License

This project is licensed under the MIT License. See the LICENSE file for details.