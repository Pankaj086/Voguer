import { useContext, useEffect, useState } from "react";
import Heading from "./Heading";
import ProductCard from "./ProductCard";
import SliderTemplate from "../utility/SliderTemplate";
import { AppContext } from "../context/AppContext";
import ProductCardShimmer from "./ProductCardShimmer";


const NewCollection = () => {
    
    const { products, loading } = useContext(AppContext);

    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        if (!loading && products.length > 0) {
            setLatestProducts(products.slice(32, 37));
        }
    }, [loading, products]);

    return (
        <div className="my-10">
            <div className="text-center py-8 text-3xl">
                <Heading text1={"NEW"} text2={"ARRIVALS"} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                    Discover our collection of new arrivals featuring the hottest styles, top trends, and exclusive pieces.
                </p>
            </div>
    
            {loading ? (
                <div className="px-4">
                    <ProductCardShimmer />
                </div>
            ) : (
                <SliderTemplate>
                    {latestProducts.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </SliderTemplate>
            )}
        </div>
    );
    
};

export default NewCollection;
