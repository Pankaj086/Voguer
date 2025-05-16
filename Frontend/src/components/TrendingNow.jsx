import { useContext, useEffect, useState } from "react"
import Heading from "./Heading"
import ProductCard from "./ProductCard"
import SliderTemplate from "../utility/SliderTemplate";
import { AppContext } from "../context/AppContext";
import ProductCardShimmer from "./ProductCardShimmer";
const TrendingNow = () => {

    const { products, loading } = useContext(AppContext);

    const [trendingProducts, setTrendingProducts] = useState([]);

    useEffect(() => {
        if (!loading && products.length > 0) {
            const tempProducts = products.filter(product => product.bestSeller === true);
            setTrendingProducts(tempProducts.slice(0, 5));
        }
    }, [products, loading]);
    
    return (
        <div className="my-10">
            <div className="text-center py-8 text-3xl">
                <Heading text1={"TRENDING"} text2={"NOW"} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 ">
                    Stay ahead of the trends. These items are currently the talk of the town and are flying off the shelves.
                </p>
            </div>
    
            {loading ? (
                <div className="px-4">
                    <ProductCardShimmer />
                </div>
            ) : (
                <SliderTemplate>
                    {trendingProducts.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </SliderTemplate>
            )}
        </div>
    );
    
}

export default TrendingNow;

