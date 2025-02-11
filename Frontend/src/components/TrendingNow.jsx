import { useEffect, useState } from "react"
import { products } from "../assets/frontend_assets/assets"
import Heading from "./Heading"
import ProductCard from "./ProductCard"
import SliderTemplate from "../utility/SliderTemplate";

const TrendingNow = () => {
    const [trendingProducts, setTrendingProducts] = useState([])

    useEffect(() => {
        const tempProducts = products.filter((product) => product.bestseller === true)
        setTrendingProducts(tempProducts.slice(0, 5))
    }, [])

    return (
        <div className="my-10">
        <div className="text-center py-8 text-3xl">
            <Heading text1={"TRENDING"} text2={"NOW"} />
            <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 ">
            Stay ahead of the trends. These items are currently the talk of the town and are flying off the shelves.
            </p>
        </div>
        <SliderTemplate>
            {trendingProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
            ))}
        </SliderTemplate>
        </div>
    )
}

export default TrendingNow

