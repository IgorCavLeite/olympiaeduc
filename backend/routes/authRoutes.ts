import express from 'express';
const router = express.Router();
import { login } from '../controllers/authController';

// Rota de login
router.post('/login', login);

export default router;