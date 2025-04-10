import Heading from "../components/Heading";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Orders = () => {
    const { cart } = useContext(AppContext);
    return (
        <div className="min-h-screen">
            <div className="">
                <Heading text1={"YOUR"} text2={"ORDERS"} />
            </div>
            <div>
                {
                    cart.map((item,index)=>(
                        <div key={index} className="border-b border-gray-300 py-4 flex justify-between items-center gap-4">
                            <div className="flex justify-start items-start gap-4 mb-4 sm:mb-0">
                                <img src={item.product.image[0]} alt="" className="w-20 h-20 object-cover rounded-md" />
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-sm sm:text-base text-gray-800 source-sans-3 font-semibold">{item.product.name}</h2>
                                    <div className="flex gap-2">
                                    <p className="text-sm text-gray-600 source-sans-3">${item.product.discountPrice * item.quantity}</p>
                                    <p className="text-sm text-gray-600 source-sans-3">Size: {item.size}</p>
                                    <p className="text-sm text-gray-600 source-sans-3">Quantity: {item.quantity}</p>
                                    </div>
                                    <p className="text-sm text-gray-600 source-sans-3">Order Date: 25-05-25</p>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <h1 className="w-3 h-3 rounded-full bg-green-500"></h1>
                                <p className="text-sm text-gray-600 source-sans-3">Ready to ship</p>
                            </div>

                            <div>
                                <button className="border border-black py-2 px-4 source-sans-3 cursor-pointer transition-colors rounded-sm">
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