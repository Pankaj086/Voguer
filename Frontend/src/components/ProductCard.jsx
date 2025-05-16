import { Link } from "react-router-dom";
import { BiSolidOffer } from "react-icons/bi";

const ProductCard = (props) => {
    const product = props.product;
    // console.log(product.images);
    
    return (
        <Link to={`/product/${product._id}`} className=" rounded-sm space-y-2 cursor-pointer">
                <div className="relative inline-block overflow-hidden">
                    <img 
                        src={product.images?.[0]} 
                        className=" rounded-sm transform transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute left-0 bottom-0 bg-green-600 px-2 py-1 rounded-bl-sm">
                        <span className="text-white font-light text-xs">{Math.round(((product.price-product.discount)/product.price)*100)}% Off</span>
                    </div>
                </div> 
                <h1 className="source-sans-3 text-gray-700 text-lg hidden sm:block">
                {product.name.length > 35 ? product.name.substring(0, 30) + "..." : product.name}
                </h1>

                {/* For smaller screens (h2) */}
                <h2 className="source-sans-3 text-gray-700 text-md block sm:hidden">
                {product.name.length > 20 ? product.name.substring(0, 17) + "..." : product.name}
                </h2>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3 ">
                    <div className="flex gap-1 items-center">
                        <BiSolidOffer className="text-green-600" />
                        <p className="source-sans-3 text-green-600">Offer Price: ${product.discount}</p>
                    </div>
                    <p className="source-sans-3 text-sm text-gray-500 line-through">${product.price}</p>
                </div>

        </Link>
    )
}

export default ProductCard