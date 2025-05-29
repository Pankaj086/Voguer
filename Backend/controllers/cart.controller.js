import { Product } from '../models/product.model.js';
import { User } from '../models/user.model.js';

// add product to user cart
const addToCart = async(req, res) => {
    try {
        
        const { productId, size } = req.body;
        const user = req?.user;

        let cart = await user.cart;

        if(cart[productId]){
            if(cart[productId][size]){
                cart[productId][size] += 1;
            }
            else{
                cart[productId][size] = 1;
            }
        }
        else{
            cart[productId] = {};
            cart[productId][size] = 1;
        }

        await User.findByIdAndUpdate(user._id,{cart})

        return res.status(200).json({
            success:true,
            message: "Added to Cart",
        })

    } catch (error) {
        console.log(error);
        res.status(501).json({
            success: false,
            message: error.message,
        })
        
    }
}

// update the cart
const updateCart = async(req, res) => {
    try {
        
        const { productId, size, quantity } = req.body;
        const user = req.user;

        let cart = await user.cart;

        cart[productId][size] = quantity;

        await User.findByIdAndUpdate(user._id,{cart})

        return res.status(200).json({
            success:true,
            message: "Cart Updated"
        })

    } catch (error) {
        console.log(error);
        res.status(501).json({
            success: false,
            message: error.message
        })
    }
}

const removeItemFromCart = async(req, res) => {

    const { productId, size } = req.body;
    const user = req?.user;

    let cart = await user.cart;

    if(cart[productId]){
        if(cart[productId][size]){
            delete cart[productId][size];

            if(Object.keys(cart[productId]).length === 0){
                delete cart[productId];
            }
        }
    }
    else{
        return res.status(404).json({
            message:"Item does not exist",
            success:false
        })
    }

    await User.findByIdAndUpdate(user._id,{cart});

    return res.status(200).json({
        success:true,
        message: "Item removed from Cart",
    })

}

// get user cart
const getUserCart = async(req, res) => {
    try {
        
        const user  = req.user;

        const cart = await user.cart;
        
        return res.status(200).json({
            success:true,
            message: "Cart Fetched",
            cart,
        })

    } catch (error) {
        console.log(error);
        res.status(501).json({
            success: false,
            message: error.message
        })
    }
}


export { addToCart, updateCart, getUserCart, removeItemFromCart };