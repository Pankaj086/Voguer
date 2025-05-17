import { useEffect, useState, useContext } from "react"
import { PlusCircle as CirclePlus, ArrowDownUp, X } from "lucide-react"
import { IoIosOptions } from "react-icons/io"
import Heading from "../components/Heading"
import "./Collection.css"
import ProductCard from "../components/ProductCard"
import { AppContext } from "../context/AppContext"
import { CircleX } from 'lucide-react';
import ProductCardShimmer from "../components/ProductCardShimmer"

const Dropdown = ({ title, options, open, toggleOpen, cate }) => {

    return (
        <div>
            <div className="flex items-center gap-2">
                <CirclePlus onClick={toggleOpen} className="w-4 h-4 text-[#3B2C35] cursor-pointer" />
                <h1 className="text-lg sm:text-xl source-sans-3 text-[#3B2C35]">{title}</h1>
            </div>
            {open && (
                <div className="flex flex-col gap-2 pl-6">
                    {options.map((option, index) => (
                        <p key={index} className="flex gap-2 text-gray-700 source-sans-3 text-base sm:text-lg">
                            <input type="checkbox" value={option} onChange={cate}/>
                            {option}
                        </p>
                    ))}
                </div>
            )}
            <hr className="text-gray-400 max-w-44 mt-2" />
        </div>
    )
}

const Collection = () => {
    
    const { loading } = useContext(AppContext);

    const [sortDropDown, setSortDropDown] = useState(false)
    const [dropDown, setDropDown] = useState(false)
    const [categoryOpen, setCategoryOpen] = useState(true)
    const [typeOpen, setTypeOpen] = useState(true)
    const [sizeOpen, setSizeOpen] = useState(true)
    const [category, SetCategory] = useState([]);
    const [subCategory, SetSubCategory] = useState([]);
    const [sizeCategory, SetSizeCategory] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);  
    const [sortOption, setSortOption] = useState(null);
    const [searchText, setSearchText] = useState('');

    const toggleCategory = (e) => {
        if(category.includes(e.target.value)){
            SetCategory(prev=> prev.filter(item=> item !== e.target.value));
        }
        else{
            SetCategory(prev=> [...prev,e.target.value]);
        }
    }

    const toggleSubCategory = (e) => {
        if(subCategory.includes(e.target.value)){
            SetSubCategory(prev=> prev.filter(item=> item !== e.target.value));
        }
        else{
            SetSubCategory(prev=> [...prev,e.target.value]);
        }
    }

    const toggleSizeCategory = (e) => {
        if(sizeCategory.includes(e.target.value)){
            SetSizeCategory(prev=> prev.filter(item=> item !== e.target.value));
        }
        else{
            SetSizeCategory(prev=> [...prev,e.target.value]);
        }
    }

    const sortProducts = (products, option) => {
        switch (option) {
            case 'Price':
                return products.sort((a, b) => a.discount - b.discount);
            case 'Rating':
                return products.sort((a, b) => b.ratings - a.ratings);
            case 'Latest Arrival':
                return products.sort((a, b) => b.date - a.date);
            default:
                return products;
        }
    };

    const { showSearch, setShowSearch, products } = useContext(AppContext);
    // console.log("in coll",products);
    

    useEffect(()=>{
        let productCopy = products.slice();
        
        // Filter by search text
        if(showSearch && searchText){
            productCopy = productCopy.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
        }

        // Filter by category
        if (category.length > 0) {
            productCopy = productCopy.filter(item => category.includes(item.category));
        }
    
        // Filter by subcategory
        if (subCategory.length > 0) {
            productCopy = productCopy.filter(item => subCategory.includes(item.subCategory));
        }
    
        // Filter by size (checking for intersection between selected sizes and available sizes)
        if (sizeCategory.length > 0) {
            productCopy = productCopy.filter(item => 
                item.sizes.some(size => sizeCategory.includes(size))
            );
        }
    
        productCopy = sortProducts(productCopy, sortOption);
        setFilteredProducts(productCopy);
    },[category,subCategory,sizeCategory,sortOption,searchText,showSearch]);

    return (
        <div>
            <div className="text-xl sm:text-3xl text-center relative">
                <hr className="text-gray-300 mb-4" />
                <Heading text1={"OUR"} text2={"COLLECTION"} />
            </div>
            {
                showSearch && (
                    <div className="flex-1 lg:w-3/4 m-auto mb-2 flex items-center justify-between sm:px-4 py-2 rounded-full cursor-pointer gap-4">
                        <input onChange={(e) => setSearchText(e.target.value)} type="search" placeholder="Search Voguer..." className="w-full border border-gray-400 rounded-full px-4 py-2 focus:outline-none focus:border-gray-500" />
                        <CircleX onClick={()=>setShowSearch(false)} className="cursor-pointer text-gray-400" />
                    </div>
                )
            }
            <div className="flex justify-between items-center relative z-20">
                {/* filter */}
                <div 
                    onClick={(e) => {
                        e.stopPropagation();
                        setDropDown(!dropDown);
                    }}
                    className="flex items-center px-2 py-1 gap-4 rounded-full border bg-[#FAE1DD] border-gray-400 cursor-pointer
                    fixed bottom-6 sm:bottom-0 sm:relative"
                >
                    <p className="source-sans-3 text-lg text-gray-700">FILTER</p>
                    <IoIosOptions className="text-lg text-gray-700 font-bold" />
                </div>
                {/* filter sidebar */}
                <div className={`${dropDown ? "fixed z-50" : "w-0"}`}>
                    <div
                        className={`fixed top-0 left-0 w-full md:w-2/5 lg:w-1/4 h-full bg-[#FAE1DD] p-4 overflow-y-auto transition-transform duration-300 ease-in-out ${dropDown ? "translate-x-0" : "-translate-x-full"} cute_scroll`}
                    >
                        <div className="flex justify-between items-center gap-10 mb-4 border-b border-gray-400"> 
                            <h1 className="text-xl sm:text-2xl source-sans-3 text-[#3B2C35]">SHOP BY CATEGORY</h1>
                            <X
                                onClick={() => setDropDown(!dropDown)}
                                className="text-lg sm:text-2xl source-sans-3 text-[#3B2C35] w-5 h-5 sm:w-8 sm:h-8 cursor-pointer"
                            />
                        </div>
                        <div className="py-2 space-y-4">
                            <Dropdown
                                title="CATEGORY"
                                options={["Men", "Women", "Kids"]}
                                open={categoryOpen}
                                toggleOpen={() => setCategoryOpen(!categoryOpen)}
                                cate={toggleCategory}
                            />
                            <Dropdown
                                title="TYPE"
                                options={["Topwear", "Bottomwear", "Winterwear"]}
                                open={typeOpen}
                                toggleOpen={() => setTypeOpen(!typeOpen)}
                                cate={toggleSubCategory}
                            />
                            <Dropdown
                                title="SIZE"
                                options={["S", "M", "L", "XL", "XXL"]}
                                open={sizeOpen}
                                toggleOpen={() => setSizeOpen(!sizeOpen)}
                                cate={toggleSizeCategory}
                            />
                        </div>
                    </div>
                </div>

                {/* sort */}
                <div 
                    onClick={(e) => {
                        e.stopPropagation();
                        setSortDropDown(!sortDropDown);
                    }} 
                    className="fixed sm:absolute z-10 bottom-6 sm:bottom-0 sm:top-0 right-4 sm:right-0"
                >
                    <div className={`border border-gray-400 ${sortDropDown ? 'rounded-lg' : 'rounded-full'} bg-[#FAE1DD] overflow-hidden`}>
                        <div className="flex items-center px-2 py-1 gap-2 cursor-pointer">
                            <p className="source-sans-3 text-lg text-gray-700">SORT BY</p>
                            <ArrowDownUp className="w-5 h-5 text-gray-700 font-bold" />
                        </div>
                        {sortDropDown && (
                            <div className="bg-[#FAE1DD] border-t border-gray-400">
                                <p 
                                    className="text-gray-500 source-sans-3 text-sm sm:text-lg hover:text-gray-800 cursor-pointer px-3 py-2 hover:bg-[#f8d3ce] transition-colors"
                                    onClick={() => setSortOption('Price')}
                                >
                                    Price
                                </p>
                                <p 
                                    className="text-gray-500 source-sans-3 text-sm sm:text-lg hover:text-gray-800 cursor-pointer px-3 py-2 hover:bg-[#f8d3ce] transition-colors border-t border-gray-400"
                                    onClick={() => setSortOption('Rating')}
                                >
                                    Rating
                                </p>
                                <p 
                                    className="text-gray-500 source-sans-3 text-sm sm:text-lg hover:text-gray-800 cursor-pointer px-3 py-2 hover:bg-[#f8d3ce] transition-colors border-t border-gray-400"
                                    onClick={() => setSortOption('Latest Arrival')}
                                >
                                    Latest Arrival
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {
                loading ?

                <ProductCardShimmer/>

                :

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 my-5 z-0">
                    {filteredProducts.map((product,index) => (
                        <ProductCard key={index} product={product}/>
                    ))}
                </div>
            }
        </div>
    )
}

export default Collection