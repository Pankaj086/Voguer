import { useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import Heading from "./Heading";
import ProductCard from "./ProductCard";

const NewCollection = () => {
    
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[])

    return (
        <div className="my-10">
            <div className="text-center py-8 text-3xl">
                <Heading text1={"NEW"} text2={"ARRIVALS"} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                    Discover our collection of new arrivals featuring the hottest styles, top trends, and exclusive pieces.
                </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-6 place-items-center">
                {
                latestProducts.map((product, index) => (
                    <ProductCard key={index} product={product}/>
                ))}
            </div>
        </div>
    );
};

export default NewCollection;
