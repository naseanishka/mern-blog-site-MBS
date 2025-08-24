# Client-Side Application Documentation

This is the client-side of the MERN Blog Site application. It is built using React and Vite.

## Project Structure

- `src/`: Contains the source code for the React application.
  - `App.jsx`: The main application component that defines the UI structure and behavior.
  - `main.jsx`: The entry point for the React application, rendering the `App` component.
  
- `public/`: Contains static files.
  - `index.html`: The main HTML file where the React app is mounted.

- `package.json`: Configuration file for the client-side application, listing dependencies and scripts.

- `vite.config.js`: Configuration for Vite, including server proxy settings and plugins.

## Getting Started

1. **Clone the repository**:
   ```
   git clone <repository-url>
   ```

2. **Navigate to the client directory**:
   ```
   cd client
   ```

3. **Install dependencies**:
   ```
   npm install
   ```

4. **Run the application**:
   ```
   npm run dev
   ```

## Environment Variables

Make sure to create a `.env` file in the root of the project with the following line:
```
MONGO_URI=your_mongodb_connection_string
```

## Contributing

Feel free to submit issues or pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License.