import { RiVerifiedBadgeFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSupportAgent } from "react-icons/md";
import Heading from "./Heading";

const Services = () => {
    return (
        <div className="my-10">
            <div className="text-center py-8 text-xl sm:text-3xl">
                <Heading text1={"SUPPORT &"} text2={"ASSISTANCE"}/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 gap-y-6">
                <div className="flex flex-col gap-1 items-center">
                    <RiVerifiedBadgeFill className="text-gray-700 w-16 h-16"/>
                    <p className="source-sans-3 text-gray-700 font-semibold text-lg">ASSURED QUALITY</p>
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <TbTruckDelivery className="text-gray-700 w-16 h-16"/>
                    <p className="source-sans-3 text-gray-700 font-semibold text-lg">FREE SHIPPING & RETURNS</p>
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <MdSupportAgent className="w-16 h-16 text-gray-700"/>
                    <p className="source-sans-3 text-gray-700 font-semibold text-lg">24/7 CUSTOMER SUPPORT</p>
                </div>
            </div>
        </div>
    )
}

export default Services