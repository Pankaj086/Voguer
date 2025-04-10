import { AppContext } from "../context/AppContext";
import { useContext, useEffect, useState } from "react";
import Heading from "../components/Heading";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const CartTotal = () => {
    const { cartItems, cart } = useContext(AppContext);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();
    const [check, setCheck] = useState(false);

    const location = useLocation();
    useEffect(() => {
        if(location.pathname === "/place-order"){
            setCheck(true);
        }
        else{
            setCheck(false);
        }
    }, [location.pathname])

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
    return(
        <div className="w-full md:w-1/2">
            <div className="text-2xl">
                <Heading text1={"CART"} text2={"TOTALS"} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center border-b border-gray-400 py-2">
                    <p className="text-xl text-gray-700 source-sans-3">Subtotal</p>
                    <p className="text-xl font-bold text-gray-800 source-sans-3">${totalPrice}</p>
                </div>
                <div className="flex justify-between items-center border-b border-gray-400 py-2">
                    <p className="text-xl text-gray-700 source-sans-3">Shipping</p>
                    <p className="text-xl font-bold text-gray-800 source-sans-3">${totalPrice ? 12 : 0}</p>
                </div>
                <div className="flex justify-between items-center border-b border-gray-400 py-2">
                    <p className="text-xl text-gray-700 source-sans-3">Grand Total</p>
                    <p className="text-xl font-bold text-gray-800 source-sans-3">${totalPrice ? 12 + totalPrice : 0}</p>
                </div>
            </div>
            {!check &&
                <div className="flex justify-end">
                    <button onClick={handleCheckout} className="bg-amber-700 text-white py-2 px-4 source-sans-3 cursor-pointer mt-4 w-full lg:w-3/4 hover:bg-amber-800 transition-colors">
                        PROCEED TO CHECKOUT
                    </button>
                </div>
            }
        </div>
    )
}

export default CartTotal;