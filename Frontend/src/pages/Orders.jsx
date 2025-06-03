import Heading from "../components/Heading";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const Orders = () => {
    const { cart, BACKEND_URL, token } = useContext(AppContext);

    const [orders, setOrders] = useState([]);

    const getUserOrder = async() => {
        try {
            const response = await axios.post(
                BACKEND_URL+"/api/v1/order/userorders",
                {},
                {
                    withCredentials: true,
                    headers: { 
                        Authorization: `Bearer ${token}`
                    }
                }
            )
    
            if(response.data.success){
                // console.log(response.data.userOrders);
                let orderItems = [];
                response.data.userOrders.map((order)=>(
                    order.items.map((item)=>(
                        item['status'] = order.status,
                        item['payment'] = order.payment,
                        item['paymentMethod'] = order.paymentMethod,
                        item['data'] = order.date,
                        orderItems.push(item)
                    ))
                ))
                // console.log(orderItems);
                setOrders(orderItems.reverse());
            }
            else{
                console.log(error.response.data.message);
                toast.error(error.response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    let items = [];

    useEffect(()=>{
        getUserOrder();
    },[])


    return (
        <div className="min-h-screen">
            <div className="">
                <Heading text1={"YOUR"} text2={"ORDERS"} />
            </div>
            <div>
                {
                    orders.map((item,index)=>(
                        <div key={index} className="border-b border-gray-300 py-4 flex justify-between items-center gap-4">
                            <div className="flex justify-start items-start gap-4 mb-4 sm:mb-0">
                                <img src={item?.images[0]} alt="" className="w-20 h-20 object-cover rounded-md" />
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-sm sm:text-base text-gray-800 source-sans-3 font-semibold">{item.name}</h2>
                                    <div className="flex gap-2">
                                    <p className="text-sm text-gray-600 source-sans-3">${item.discount * item.quantity}</p>
                                    <p className="text-sm text-gray-600 source-sans-3">Size: {item.size}</p>
                                    <p className="text-sm text-gray-600 source-sans-3">Quantity: {item.quantity}</p>
                                    </div>
                                    <p className="text-sm text-gray-600 source-sans-3">Order Date: {new Date(item.date).toDateString()}</p>
                                    <p className="text-sm text-gray-600 source-sans-3">Payment: {item.paymentMethod}</p>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <h1 className="w-3 h-3 rounded-full bg-green-500"></h1>
                                <p className="text-sm text-gray-600 source-sans-3">{item.status}</p>
                            </div>

                            <div>
                                <button onClick={getUserOrder} className="border border-black py-2 px-4 source-sans-3 cursor-pointer transition-colors rounded-sm">
                                    Track Order
                                </button>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Orders