import CartTotal from "../utility/CartTotal"
import { assets } from "../assets/frontend_assets/assets"
import Heading from "../components/Heading"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const PlaceOrder = () => {
    const [selectedPayment, setSelectedPayment] = useState("stripe");

    const navigate = useNavigate();
    return (
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 justify-between mt-12">
            {/* delivery information */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
                <div className="text-2xl">
                    <Heading text1={"DELIVERY"} text2={"INFORMATION"} />
                </div>
                <div className="flex gap-3">
                    <input type="text" placeholder="First Name" className="border border-gray-400 w-full h-10 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700"/>
                    <input type="text" placeholder="Last Name" className="border border-gray-400 w-full h-10 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700"/>
                </div>
                <input type="email" placeholder="Email Addess" className="border border-gray-400 w-full h-10 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700"/>
                <input type="text" placeholder="Street Name" className="border border-gray-400 w-full h-10 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700"/>
                <div className="flex gap-3">
                    <input type="text" placeholder="City" className="border border-gray-400 w-full h-10 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700"/>
                    <input type="text" placeholder="State" className="border border-gray-400 w-full h-10 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700"/>
                </div>
                <div className="flex gap-3">
                    <input type="number" placeholder="Postal Code" className="border border-gray-400 w-full h-10 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700"/>
                    <input type="text" placeholder="Country" className="border border-gray-400 w-full h-10 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700"/>
                </div>
                <input type="tel" placeholder="Phone No" className="border border-gray-400 w-full h-10 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700"/>
            </div>
            {/* cart & payment */}
            <div className="w-full flex flex-col items-end">
                <CartTotal/>
                <div className="text-start text-2xl mt-6 w-full md:w-1/2">
                    <Heading text1={"PAYMENT"} text2={"METHOD"} />
                </div>
                <div className="w-full md:w-1/2 flex justify-between items-center gap-4 sm:gap-2 mt-2 flex-wrap">
                    <div className="flex items-center cursor-pointer" onClick={() => setSelectedPayment("stripe")}>
                        <h1 className={`w-3 h-3 rounded-full border border-gray-400 ${selectedPayment === "stripe" ? "bg-green-500" : "bg-white"}`}></h1>
                        <img className="h-5 mx-4" src={assets.stripe_logo} alt="Stripe"/>
                    </div>
                    <div className="flex items-center cursor-pointer" onClick={() => setSelectedPayment("razorpay")}>
                        <h1 className={`w-3 h-3 rounded-full border border-gray-400 ${selectedPayment === "razorpay" ? "bg-green-500" : "bg-white"}`}></h1>
                        <img className="h-5 mx-4" src={assets.razorpay_logo} alt="Razorpay"/>
                    </div>
                    <div className="flex gap-2 items-center cursor-pointer" onClick={() => setSelectedPayment("cod")}>
                        <h1 className={`w-3 h-3 rounded-full border border-gray-400 ${selectedPayment === "cod" ? "bg-green-500" : "bg-white"}`}></h1>
                        <p className="text-gray-500 text-sm font-medium">CASH ON DELIVERY</p>
                    </div>
                </div>
                <div className="flex justify-start w-full md:w-1/2 mt-6">
                    <button onClick={()=>navigate("/orders")} className="bg-black text-white py-2 px-4 source-sans-3 cursor-pointer w-full lg:w-1/2 transition-colors">
                        PLACE ORDER
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PlaceOrder