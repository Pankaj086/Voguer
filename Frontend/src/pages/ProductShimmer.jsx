// src/components/ProductShimmer.jsx

const ProductShimmer = () => {
    return (
        <div className="w-full max-w-7xl mx-auto mt-6 px-2 py-2 animate-pulse">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Image Placeholder */}
                <div className="w-full flex flex-col sm:flex-row gap-6">
                    <div className="hidden sm:flex flex-col gap-4 sm:w-24">
                        {Array(4).fill(0).map((_, i) => (
                            <div key={i} className="w-24 h-28 bg-gray-200 rounded-sm" />
                        ))}
                    </div>
                    <div className="flex-grow">
                        <div className="w-full lg:w-[26rem] h-[500px] bg-gray-200 rounded-md" />
                    </div>
                </div>

                {/* Details Placeholder */}
                <div className="w-full lg:px-24 flex flex-col gap-4">
                    <div className="h-8 bg-gray-200 rounded w-2/3" />
                    <div className="h-6 bg-gray-200 rounded w-1/3" />
                    <div className="h-20 bg-gray-200 rounded w-full" />
                    <div className="h-6 bg-green-200 rounded w-1/4" />
                    <div className="h-6 bg-gray-200 rounded w-1/3" />
                    <div className="h-6 bg-gray-200 rounded w-1/2" />

                    <div className="flex flex-wrap gap-4 mt-4">
                        {Array(4).fill(0).map((_, i) => (
                            <div key={i} className="px-6 py-3 bg-gray-200 rounded" />
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-6">
                        <div className="flex-1 h-12 bg-gray-300 rounded" />
                        <div className="flex-1 h-12 bg-gray-300 rounded" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductShimmer;
