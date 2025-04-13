import { Router } from 'express';
import { registerUser } from '../controllers/user.controller.js';
// import { verifyToken } from '../middleware/auth.js';

const router = Router();

router.route("/register").post(registerUser);

export default router;

