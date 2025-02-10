import { products } from "../assets/frontend_assets/assets";
import Heading from "./Heading";
// import { assets } from "../assets/frontend_assets/assets";
import { BiSolidOffer } from "react-icons/bi";

const NewCollection = () => {
    return (
        <div className="my-10">
            <div className="text-center py-8 text-3xl">
                <Heading text1={"NEW"} text2={"ARRIVALS"} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                    Discover our collection of new arrivals featuring the hottest styles, top trends, and exclusive pieces.
                </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-evenly lg:justify-between">
                {products.map((product, index) => (
                    <div key={index} className="h-[22rem] w-[14rem] rounded-sm space-y-2 cursor-pointer">
                        <div className="relative">
                            <img 
                                src={product.image[0]} 
                                className="w-full object-cover rounded-sm transform transition-transform duration-300 hover:scale-105"
                            />
                            <div className="absolute left-0 bottom-0 bg-green-600 px-2 py-1 rounded-bl-sm">
                                <span className="text-white font-light text-xs">{product.off}% Off</span>
                            </div>
                        </div> 
                        <h1 className="source-sans-3 text-gray-700">
                            {product.name.length > 29 ? product.name.substring(0, 27) + "..." : product.name}
                        </h1>
                        <div className="flex items-center gap-3">
                            <div className="flex gap-1 items-center">
                                <BiSolidOffer className="text-green-600" />
                                <p className="source-sans-3 text-green-600">Offer Price: ${product.discountPrice}</p>
                            </div>
                            <p className="source-sans-3 text-sm text-gray-500 line-through">${product.actualPrice}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewCollection;
