// src/components/ProductCardShimmer.jsx
import "./ProductCardShimmer.css";

const ProductCardShimmer = () => {

    let shimmerArray = new Array(4).fill(0);
    
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {shimmerArray.map((_, index) => (
                <div key={index} className="shimmer-card rounded-sm space-y-2 cursor-pointer">
                    <div className="shimmer-image bg-shimmer rounded-sm" />
                    <div className="shimmer-line bg-shimmer w-3/4 h-4 rounded" />
                    <div className="shimmer-line bg-shimmer w-2/3 h-4 rounded" />
                    <div className="flex gap-2">
                        <div className="shimmer-line bg-shimmer w-1/2 h-4 rounded" />
                        <div className="shimmer-line bg-shimmer w-1/4 h-4 rounded" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductCardShimmer;
