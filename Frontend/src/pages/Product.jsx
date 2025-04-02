import { useState, useContext, useEffect } from "react"
import { AppContext } from "../context/AppContext"
import { useParams } from "react-router-dom";
import { ShoppingBag, Heart } from 'lucide-react';
import { IoStar } from "react-icons/io5";
import SliderTemplate from "../utility/SliderTemplate";
import ProductCard from "../components/ProductCard";
import Heading from "../components/Heading"

const Product = () => {
    const { productId } = useParams();
    const { products, addToCart } = useContext(AppContext);
    const [mainImage, setMainImage] = useState("");

    const [recommendedProducts, setRecommendedProducts] = useState([]);

    const product = products.find(product => product._id === productId);
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

    useEffect(() => {
        if (product) {
            const recoProd = products.filter(
                (prod) => 
                    prod.category === product.category && 
                    prod._id !== product._id
            ).slice(0, 8); // Limit to 8 products
            setRecommendedProducts(recoProd);
        }
    }, [product, products]);

    useEffect(() => {
        // Set initial main image when product loads
        if (product && product.image && product.image.length > 0) {
            setMainImage(product.image[0]);
        }
    }, [product]);

    if (!product) return <div className="py-10 text-center">Product not found</div>;

    const handleImageClick = (img) => {
        setMainImage(img);
    };

    return (
        <div className="w-full max-w-7xl mx-auto mt-6 px-2 py-2">
            <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="w-full flex flex-col items-center sm:items-start">
                    <div className="flex flex-col sm:flex-row gap-6">
                        {/* Thumbnail Images - Side thumbnails on tablet/desktop */}
                        <div className="hidden sm:flex flex-col gap-4 sm:w-24 h-auto max-h-full">
                            {product.image.map((img, index) => (
                                <img 
                                    key={index}
                                    src={img} 
                                    alt={`Product view ${index + 1}`}
                                    className={`w-24 h-28 object-cover cursor-pointer border-2 ${mainImage === img ? 'border-amber-700' : 'border-gray-200'} hover:border-amber-700`}
                                    onClick={() => handleImageClick(img)}
                                />
                            ))}
                        </div>

                        {/* Main Image */}
                        <div className="flex-grow">
                            <img 
                                src={mainImage || product.image[0]} 
                                alt={product.name}
                                className="w-auto lg:w-[26rem] sm:h-full max-h-[40rem] lg:h-[500px] object-cover border-2 border-gray-200"
                            />
                        </div>
                    </div>
                    
                    {/* Thumbnail Images - Bottom row on mobile */}
                    <div className="flex sm:hidden mt-4 gap-6 overflow-x-auto justify-between">
                        {product.image.map((img, index) => (
                            <img 
                                key={index}
                                src={img} 
                                alt={`Product view ${index + 1}`}
                                className={`w-20 h-24 object-cover cursor-pointer border-2 flex-shrink-0 ${mainImage === img ? 'border-amber-700' : 'border-gray-200'} hover:border-amber-700`}
                                onClick={() => handleImageClick(img)}
                            />
                        ))}
                    </div>
                </div>

                {/* Product Details Section */}
                <div className="w-full lg:px-24 flex flex-col gap-4 mt-6 lg:mt-0">
                    <h1 className="text-2xl sm:text-3xl text-amber-700 font-semibold source-sans-3">{product.name}</h1>
                    <h2 className="text-xl text-gray-800 source-sans-3">{product.category} {product.subCategory}</h2>
                    
                    <p className="text-gray-500 text-lg source-sans-3">{product.description}</p>
                    
                    <div className="inline-flex source-sans-3 items-center gap-2 px-3 py-1 bg-green-600 text-white rounded-md w-fit">
                        <span>Rating {product.rating}</span>
                        <IoStar className="text-yellow-300 w-4 h-4"/>
                    </div>

                    <div className="mt-2">
                        <h2 className="text-xl sm:text-2xl text-gray-800 source-sans-3">
                            Discounted Price: ${product.discountPrice}
                        </h2>
                        <div className="flex gap-2 text-amber-600 mt-1">
                            <span className="source-sans-3">MRP</span>
                            <span className="line-through source-sans-3">${product.actualPrice}</span>
                            <span className="text-amber-700 font-bold source-sans-3">({product.off}% OFF)</span>
                        </div>
                    </div>

                    {/* Size Selection */}
                    <div className="mt-4">
                        <h3 className="text-xl font-medium mb-4 source-sans-3 text-gray-800">Select Size</h3>
                        <div className="flex flex-wrap gap-4">
                            {
                                product.sizes.map((size,index)=>{
                                    return(
                                        <div key={index} onClick={()=>{setSelectedSize(size)}} className={`px-4 py-2 rounded-sm cursor-pointer source-sans-3 text-amber-700 text-xl border border-gray-400
                                         ${size === selectedSize ? "bg-amber-700 text-white": ""}`}>
                                            {size}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-6 w-full">
                        <button onClick={()=>addToCart(productId,selectedSize)} className="flex-1 flex items-center justify-center gap-2 bg-amber-700 text-white py-3 px-4 rounded-sm hover:bg-amber-800 transition-colors cursor-pointer">
                            <ShoppingBag className="w-5 h-5"/>
                            <span className="source-sans-3">ADD TO BAG</span>
                        </button>
                        
                        <button className="flex-1 flex items-center justify-center gap-2 border-2 border-amber-700 text-amber-700 py-3 px-4 rounded-sm hover:border-amber-800 hover:text-amber-800 transition-colors cursor-pointer">
                            <Heart className="w-5 h-5"/>
                            <span className="source-sans-3">WISHLIST</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* recommended section */}
            {recommendedProducts.length > 0 && (
                <div className="mt-20 source-sans-3">
                    {/* <He className="text-3xl text-gray-700 source-sans-3">Recommended Products</h2> */}
                    <div className="text-center py-4 text-3xl">
                        <Heading text1={"RELATED"} text2={"PRODUCTS"} />
                        {/* <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                            Discover our collection of new arrivals featuring the hottest styles, top trends, and exclusive pieces.
                        </p> */}
                    </div>
                    <SliderTemplate>
                        {recommendedProducts.map((product, index) => (
                            <ProductCard key={index} product={product}/>
                        ))}
                    </SliderTemplate>
                </div>
            )}
        </div>
    )
}

export default Product