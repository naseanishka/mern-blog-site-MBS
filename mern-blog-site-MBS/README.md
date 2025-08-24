# mern-blog-site-MBS

This project is a MERN stack application that includes a React frontend and an Express backend. Below is an overview of the project structure and how to set it up.

## Project Structure

```
mern-blog-site-MBS
├── client                # Frontend application
│   ├── src               # Source files for React
│   │   ├── App.jsx       # Main application component
│   │   └── main.jsx      # Entry point for React application
│   ├── public            # Public assets
│   │   └── index.html    # Main HTML file
│   ├── package.json      # Client-side dependencies and scripts
│   ├── vite.config.js    # Vite configuration for React
│   └── README.md         # Client-side documentation
├── server                # Backend application
│   ├── src               # Source files for Express
│   │   ├── app.js        # Entry point for server application
│   │   ├── models        # Mongoose models
│   │   │   └── index.js  # Model definitions
│   │   ├── routes        # API routes
│   │   │   └── index.js  # Route definitions
│   │   └── controllers   # Controller logic
│   │       └── index.js  # Controller functions
│   ├── package.json      # Server-side dependencies and scripts
│   └── README.md         # Server-side documentation
├── .env                  # Environment variables
└── README.md             # Root project documentation
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd mern-blog-site-MBS
   ```

2. Set up the environment variables:
   - Create a `.env` file in the root of the project and add your MongoDB connection string:
     ```
     MONGO_URI=your_mongodb_connection_string
     ```

3. Install dependencies for the client:
   ```
   cd client
   npm install
   ```

4. Install dependencies for the server:
   ```
   cd ../server
   npm install
   ```

### Running the Application

1. Start the server:
   ```
   cd server
   npm start
   ```

2. Start the client:
   ```
   cd ../client
   npm run dev
   ```

### Usage

- The client will be available at `http://localhost:5173` (or the port specified by Vite).
- The server will be available at `http://localhost:3000`.

### Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

### License

This project is licensed under the MIT License.