import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { codOrderPlace, stripeOrderPlace, razorpayOrderPlace, displayAllOrders, getUserOrders, updateOrderStatus } from "../controllers/order.controller.js";
import adminAuth from "../middleware/admin.auth.middleware.js";

const orderRouter = Router();

// payment method
orderRouter.route("/cod").post(verifyJWT, codOrderPlace);
orderRouter.route("/stripe").post(verifyJWT, stripeOrderPlace);
orderRouter.route("/razorpay").post(verifyJWT, razorpayOrderPlace);

// user order
orderRouter.route("/userorders").post(verifyJWT, getUserOrders);

// adminn routes
orderRouter.route("/list").post(adminAuth, displayAllOrders);
orderRouter.route("/status").post(adminAuth, updateOrderStatus);


export default orderRouter;