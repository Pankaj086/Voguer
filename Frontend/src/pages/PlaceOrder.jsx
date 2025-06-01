import CartTotal from "../utility/CartTotal"
import { assets } from "../assets/frontend_assets/assets"
import Heading from "../components/Heading"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../context/AppContext"
import axios from "axios"
import { toast } from "react-toastify"

const PlaceOrder = () => {

    const [selectedPayment, setSelectedPayment] = useState("cod");
    const navigate = useNavigate();
    const { BACKEND_URL, cartItems, setCartItems, token, cartTotal, deliveryCharge, products } = useContext(AppContext);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: "",
    });

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData((prev) => ({ ...prev, [name]: value }));
    }
    console.log("cartitems", cartItems);
    const submitHandler = async (e) => {
        e.preventDefault();

        try {

            const orderItems = [];


            for (const items in cartItems) {
                for (const item in cartItems[items]) {
                    if (cartItems[items][item] > 0) {
                        const itemInfo = structuredClone(
                            products.find((product) => {
                                return product._id === items
                            })
                        )
                        if (itemInfo) {
                            itemInfo.size = item;
                            itemInfo.quantity = cartItems[items][item];
                            orderItems.push(itemInfo);
                        }
                    }
                }
            }

            let orderData = {
                address: formData,
                items: orderItems,
                amount: cartTotal+deliveryCharge
            }

            switch(selectedPayment){
                // cod
                case "cod":
                    const response = await axios.post(
                        BACKEND_URL+"/api/v1/order/cod",
                        { orderData },
                        {
                            withCredentials: true,
                            headers: { 
                                Authorization: `Bearer ${token}`
                            }
                        }
                    );
                    console.log("my response",response);
                    if(response.data.success){
                        setCartItems({});
                        toast.success(response.data.message);
                        navigate("/orders")
                    }
                    else{
                        toast.error(response.data.message);
                    }
                break;

                default:
                    break;
            }
            

        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    return (
        <form onSubmit={submitHandler} className="flex flex-col sm:flex-row gap-8 sm:gap-0 justify-between mt-12">
            {/* delivery information */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
                <div className="text-2xl">
                    <Heading text1={"DELIVERY"} text2={"INFORMATION"} />
                </div>
                <div className="flex gap-3">
                    <input onChange={onChangeHandler} type="text" name="firstName" value={formData.firstName} required placeholder="First Name" className="border border-gray-400 w-full h-10 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700" />
                    <input onChange={onChangeHandler} type="text" name="lastName" value={formData.lastName} required placeholder="Last Name" className="border border-gray-400 w-full h-10 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700" />
                </div>
                <input onChange={onChangeHandler} type="email" name="email" value={formData.email} required placeholder="Email Addess" className="border border-gray-400 w-full h-10 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700" />
                <input onChange={onChangeHandler} type="text" name="street" value={formData.street} placeholder="Street Name" className="border border-gray-400 w-full h-10 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700" />
                <div className="flex gap-3">
                    <input onChange={onChangeHandler} type="text" name="city" value={formData.city} required placeholder="City" className="border border-gray-400 w-full h-10 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700" />
                    <input onChange={onChangeHandler} type="text" name="state" value={formData.state} required placeholder="State" className="border border-gray-400 w-full h-10 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700" />
                </div>
                <div className="flex gap-3">
                    <input onChange={onChangeHandler} type="number" name="zipcode" value={formData.zipcode} required placeholder="Postal Code" className="border border-gray-400 w-full h-10 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700" />
                    <input onChange={onChangeHandler} type="text" name="country" value={formData.country} required placeholder="Country" className="border border-gray-400 w-full h-10 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700" />
                </div>
                <input onChange={onChangeHandler} type="tel" name="phone" value={formData.phone} required placeholder="Phone No" className="border border-gray-400 w-full h-10 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700" />
            </div>
            {/* cart & payment */}
            <div className="w-full flex flex-col items-end">
                <CartTotal />
                <div className="text-start text-2xl mt-6 w-full md:w-1/2">
                    <Heading text1={"PAYMENT"} text2={"METHOD"} />
                </div>
                <div className="w-full md:w-1/2 flex justify-between items-center gap-4 sm:gap-2 mt-2 flex-wrap">
                    <div className="flex items-center cursor-pointer" onClick={() => setSelectedPayment("stripe")}>
                        <h1 className={`w-3 h-3 rounded-full border border-gray-400 ${selectedPayment === "stripe" ? "bg-green-500" : "bg-white"}`}></h1>
                        <img className="h-5 mx-4" src={assets.stripe_logo} alt="Stripe" />
                    </div>
                    <div className="flex items-center cursor-pointer" onClick={() => setSelectedPayment("razorpay")}>
                        <h1 className={`w-3 h-3 rounded-full border border-gray-400 ${selectedPayment === "razorpay" ? "bg-green-500" : "bg-white"}`}></h1>
                        <img className="h-5 mx-4" src={assets.razorpay_logo} alt="Razorpay" />
                    </div>
                    <div className="flex gap-2 items-center cursor-pointer" onClick={() => setSelectedPayment("cod")}>
                        <h1 className={`w-3 h-3 rounded-full border border-gray-400 ${selectedPayment === "cod" ? "bg-green-500" : "bg-white"}`}></h1>
                        <p className="text-gray-500 text-sm font-medium">CASH ON DELIVERY</p>
                    </div>
                </div>
                <div className="flex justify-start w-full md:w-1/2 mt-6">
                    <button type="submit" className="bg-black text-white py-2 px-4 source-sans-3 cursor-pointer w-full lg:w-1/2 transition-colors">
                        PLACE ORDER
                    </button>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder