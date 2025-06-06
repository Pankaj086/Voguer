import { useState, useContext, useEffect } from "react"
import { AppContext } from "../context/AppContext"
import { useParams } from "react-router-dom";
import { ShoppingBag, Heart } from 'lucide-react';
import { IoStar } from "react-icons/io5";
import SliderTemplate from "../utility/SliderTemplate";
import ProductCard from "../components/ProductCard";
import Heading from "../components/Heading";
import axios from "axios";
import ProductShimmer from "./ProductShimmer";
import ProductCardShimmer from "../components/ProductCardShimmer";

const Product = () => {

    const { id } = useParams();
    
    const { products, addToCart, loading, BACKEND_URL, token } = useContext(AppContext);
    const [mainImage, setMainImage] = useState("");
    const [product, setProducts] = useState([]);
    const [recommendedProducts, setRecommendedProducts] = useState([]);
    const [selectedSize, setSelectedSize] = useState("");
    

    // to fetch the particular product details
    useEffect(()=>{
        const findProduct = async () => {
            const response = await axios.post(BACKEND_URL+"/api/v1/products/details",{id})
            console.log(response);
            setProducts(response.data.product);
        }
    
        findProduct();
    },[id])

    // to set the recommended products
    useEffect(() => {
        if (product && product.name) {
            const recoProd = products.filter((item) =>
                item.name.toLowerCase().includes(product.name.substring(0, 4).toLowerCase()) &&
                item._id !== product._id && item.category === product.category
            );
            setRecommendedProducts(recoProd.slice(0, 8));
        }
    }, [product, products]);
    
    // to set the images
    useEffect(() => {
        // Set initial main image when product loads
        if (product && product?.images && product?.images.length > 0) {
            setMainImage(product?.images[0] || product?.images[1] || product?.images[2] || product?.images[3]);
        }
        setSelectedSize("");
    }, [product]);    

    // to set the main image
    const handleImageClick = (img) => {
        setMainImage(img);
    };

    if (!product || Object.keys(product).length === 0) {
        return <ProductShimmer />;
    }

    return (
        <div className="w-full max-w-7xl mx-auto mt-6 px-2 py-2">
            <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="w-full flex flex-col items-center sm:items-start">
                    <div className="flex flex-col sm:flex-row gap-6">
                        {/* Thumbnail Images - Side thumbnails on tablet/desktop */}
                        <div className="hidden sm:flex flex-col gap-4 sm:w-24 h-auto max-h-full">
                            {product.images?.map((img, index) => (
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
                                src={mainImage || product?.images[0]} 
                                alt={product.name}
                                className="w-auto lg:w-[26rem] sm:h-full max-h-[40rem] lg:h-[500px] object-cover border-2 border-gray-200"
                            />
                        </div>
                    </div>
                    
                    {/* Thumbnail Images - Bottom row on mobile */}
                    <div className="flex sm:hidden mt-4 gap-6 overflow-x-auto justify-between">
                        {product.images?.map((img, index) => (
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
                        <span>Rating {product.ratings}</span>
                        <IoStar className="text-yellow-300 w-4 h-4"/>
                    </div>

                    <div className="mt-2">
                        <h2 className="text-xl sm:text-2xl text-gray-800 source-sans-3">
                            Discounted Price: ${product.discount}
                        </h2>
                        <div className="flex gap-2 text-amber-600 mt-1">
                            <span className="source-sans-3">MRP</span>
                            <span className="line-through source-sans-3">${product.price}</span>
                            <span className="text-amber-700 font-bold source-sans-3">({Math.round(((product.price-product.discount)/product.price)*100)}% OFF)</span>
                        </div>
                    </div>

                    {/* Size Selection */}
                    <div className="mt-4">
                        <h3 className="text-xl font-medium mb-4 source-sans-3 text-gray-800">Select Size</h3>
                        <div className="flex flex-wrap gap-4">
                            {
                                product.size?.map((siz,index)=>{
                                    return(
                                        <div key={index} onClick={()=>{setSelectedSize(siz)}} className={`px-4 py-2 rounded-sm cursor-pointer source-sans-3 text-amber-700 text-xl border border-gray-400
                                         ${siz === selectedSize ? "bg-amber-700 text-white": ""}`}>
                                            {siz}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-6 w-full">
                        <button onClick={() => addToCart(id,selectedSize)} className="flex-1 flex items-center justify-center gap-2 bg-amber-700 text-white py-3 px-4 rounded-sm hover:bg-amber-800 transition-colors cursor-pointer">
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
                    {
                        loading ?
                        <ProductCardShimmer/> :

                        <SliderTemplate>
                            {recommendedProducts.map((product, index) => (
                                <ProductCard key={index} product={product}/>
                            ))}
                        </SliderTemplate>
                    }
                </div>
            )}
        </div>
    )
}

export default Product;