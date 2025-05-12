import { Router } from 'express';
import { registerUser, loginUser, logoutUser, adminLogin } from '../controllers/user.controller.js';
import { verifyJWT } from '../middleware/auth.middleware.js';                                      

const userRouter = Router();

userRouter.route("/register").post(registerUser);
userRouter.route("/login").post(loginUser);

// secured routes
userRouter.route("/logout").post(verifyJWT, logoutUser);
userRouter.route("/admin").post(adminLogin);

export default userRouter;   

