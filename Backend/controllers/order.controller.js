import { Order } from "../models/order.model.js";
import { User } from '../models/user.model.js';

// cash on delivery
const codOrderPlace = async(req, res) => {
    
    try {
        
        const { items, amount, address } = req.body.orderData;
        const user = req.user;
        const userId = user._id;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:"COD",
            payment: false,
            date: Date.now(),
        }
        
        const newOrder = new Order(orderData);

        await newOrder.save();

        await User.findByIdAndUpdate(userId,{cart:{}})

        res.status(200).json({
            success:true,
            message: "Order Placed Successfully"
        })
        
    } catch (error) {
        console.log(error);
        res.status(501).json({
            success: false,
            message: error.message
        })
    }
}

// using stripe

const stripeOrderPlace = async(req, res) => {
    
}


// using razorpay

const razorpayOrderPlace = async(req, res) => {
    
}

// all orders data for admin panel

const displayAllOrders = async(req, res) => {

}

// get user order

const getUserOrders = async(req, res) => {

}

// update order status(admin only)
const updateOrderStatus = async(req, res) => {

}

export { codOrderPlace, razorpayOrderPlace, stripeOrderPlace, displayAllOrders, getUserOrders, updateOrderStatus };