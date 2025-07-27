import express from 'express';
import { register, login, getProfile } from '../controllers/authController.js'
import { authMiddleware, loginValidationRules, registerValidationRules,validate} from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerValidationRules, validate, register);

router.post('/login', loginValidationRules,validate, login);
router.get('/profile', authMiddleware, getProfile);

export default router;
