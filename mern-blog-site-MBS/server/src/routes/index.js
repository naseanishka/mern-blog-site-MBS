import express from 'express';
import { someControllerFunction } from '../controllers/index.js';

const router = express.Router();

// Define your API routes here
router.get('/example', someControllerFunction);

// Add more routes as needed

export default router;