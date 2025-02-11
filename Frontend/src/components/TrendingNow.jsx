import { useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import Heading from "./Heading";
import ProductCard from "./ProductCard";

const TrendingNow = () => {
    
    const [trendingProducts, setTrendingProducts] = useState([]);

    useEffect(()=>{
        const tempProducts = products.filter((product)=>(product.bestseller===true))
        setTrendingProducts(tempProducts.slice(0,5));
    },[])

    return (
        <div className="my-10">
            <div className="text-center py-8 text-3xl">
                <Heading text1={"TRENDING"} text2={"NOW"} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 ">
                    Stay ahead of the trends. These items are currently the talk of the town and are flying off the shelves.
                </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-6 place-items-center">
                {
                trendingProducts.map((product, index) => (
                    <ProductCard key={index} product={product}/>
                ))}
            </div>
        </div>
    );
};

export default TrendingNow;
