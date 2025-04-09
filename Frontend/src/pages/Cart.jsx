import { AppContext } from "../context/AppContext";
import { useContext, useEffect, useState } from "react";
import { Trash2 } from 'lucide-react';
import Heading from "../components/Heading";
import { useNavigate } from "react-router-dom";


const Cart = () => {
    const { cartItems, addToCart, products, removeFromCart, deleteFromCart } = useContext(AppContext);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();

    const cart = [];

    for(let productId in cartItems){
        for(let size in cartItems[productId]){
            const product = products.find(product => product._id === productId);
            if(!product) continue;
            cart.push({product, size, quantity: cartItems[productId][size]})
        }
    }

    useEffect(()=>{
        let total = 0;
        cart.map(item=>{
            total += item.product.discountPrice * item.quantity;
        })
        setTotalPrice(total);
    }, [cartItems, cart])

    const handleCheckout = () => {
        if(cart.length === 0) return;
        navigate("/place-order");
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Your Bag</h1>
            
            {/* Header - Hidden on mobile */}
            <div className="hidden sm:grid sm:grid-cols-6 mt-4 place-items-center border-b border-gray-400 pb-2">
                <p className="text-lg sm:text-xl text-amber-700 source-sans-3">Product</p>
                <p className="text-lg sm:text-xl text-amber-700 source-sans-3">Size</p>
                <p className="text-lg sm:text-xl text-amber-700 source-sans-3">Price</p>
                <p className="text-lg sm:text-xl text-amber-700 source-sans-3">Quantity</p>
                <p className="text-lg sm:text-xl text-amber-700 source-sans-3">Total</p>
                <p className="text-lg sm:text-xl text-amber-700 source-sans-3">Remove</p>
            </div>

            <div className="space-y-4">
                {cart.map((item, index) => (
                    <div key={index} className="sm:grid sm:grid-cols-6 py-4 place-items-center border-b border-gray-400">
                        {/* Product Info */}
                        <div className="flex justify-start sm:justify-center items-start gap-4 mb-4 sm:mb-0">
                            <img src={item.product.image[0]} alt="" className="w-20 h-20 object-cover rounded-md" />
                            <div>
                                <h2 className="text-sm sm:text-base text-gray-800 source-sans-3 font-semibold">{item.product.name}</h2>
                                <p className="text-sm source-sans-3 text-gray-500">{item.product.subCategory}</p>
                                {/* Mobile: Show size and price */}
                                <div className="sm:hidden mt-2 space-y-1">
                                    <p className="text-sm text-gray-600">Size: {item.size}</p>
                                    <p className="text-sm text-gray-600">Price: ${item.product.discountPrice}</p>
                                </div>
                            </div>
                        </div>

                        {/* Size - Hidden on mobile */}
                        <p className="hidden sm:block">{item.size}</p>

                        {/* Price - Hidden on mobile */}
                        <p className="hidden sm:block">${item.product.discountPrice}</p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 justify-center mb-4 sm:mb-0">
                            <button 
                                onClick={() => removeFromCart(item.product._id, item.size)}
                                className="border border-gray-600 w-7 h-7 text-xl flex items-center justify-center hover:bg-gray-100"
                            >
                                -
                            </button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <button 
                                onClick={() => addToCart(item.product._id, item.size)}
                                className="border border-gray-600 w-7 h-7 text-xl flex items-center justify-center hover:bg-gray-100"
                            >
                                +
                            </button>
                        </div>

                        {/* Total */}
                        <div className="flex justify-between items-center sm:block w-full sm:w-auto mb-4 sm:mb-0">
                            <span className="sm:hidden">Total:</span>
                            <p className="font-medium">${item.quantity * item.product.discountPrice}</p>
                        </div>

                        {/* Remove Button */}
                        <button 
                            onClick={() => deleteFromCart(item.product._id, item.size)}
                            className="text-red-600 hover:text-red-800 transition-colors cursor-pointer w-full sm:w-auto flex justify-center"
                        >
                            <Trash2 className="w-5 h-5"/>
                        </button>
                    </div>
                ))}
            </div>

            {/* Empty Cart Message */}
            {cart.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">Your bag is empty</p>
                </div>
            )}

            {/* Checkout Button */}
            <div className="flex justify-end mt-8">
            {cart.length > 0 && (
                <div className="w-full md:w-1/2 2xl:w-1/3">
                    <div className="text-2xl">
                        <Heading text1={"CART"} text2={"TOTALS"} />
                    </div>
                    <div>
                        <div className="flex justify-between items-center border-b border-gray-400 py-2">
                            <p className="text-xl text-gray-700 source-sans-3">Subtotal</p>
                            <p className="text-xl font-bold text-gray-800 source-sans-3">${totalPrice}</p>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-400 py-2">
                            <p className="text-xl text-gray-700 source-sans-3">Shipping</p>
                            <p className="text-xl font-bold text-gray-800 source-sans-3">$12</p>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-400 py-2">
                            <p className="text-xl text-gray-700 source-sans-3">Grand Total</p>
                            <p className="text-xl font-bold text-gray-800 source-sans-3">${totalPrice + 12}</p>
                        </div>
                    </div>
                    <div className="flex justify-end">
                    <button onClick={handleCheckout} className="bg-amber-700 text-white py-2 px-4 source-sans-3 cursor-pointer mt-4 w-full lg:w-3/4 hover:bg-amber-800 transition-colors">
                        PROCEED TO CHECKOUT
                    </button>
                    </div>
                </div>
            )}
            </div>
        </div>
    );
}

export default Cart;