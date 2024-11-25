import { Router } from "express";
import { register, login ,getUserInfo } from '../controllers/authController.js';
import {verifyToken} from '../middleware/authMiddleware.js';

const authRoutes = Router();

// Signup Route
authRoutes.post('/register', register);

// Login Route
authRoutes.post('/login', login);

authRoutes.get('/me', verifyToken, getUserInfo);

export default authRoutes;
