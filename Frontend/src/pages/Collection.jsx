import { useState } from "react"
import { ChevronDown, ChevronUp, CirclePlus } from 'lucide-react';
import Heading from "../components/Heading"

const Dropdown = ({ title, options, open, toggleOpen }) => {
    return (
        <div>
            <div className="flex items-center gap-2">
                <CirclePlus onClick={toggleOpen} className="w-4 h-4 text-[#3B2C35] cursor-pointer" />
                <h1 className="text-sm sm:text-base source-sans-3 text-[#3B2C35]">{title}</h1>
            </div>
            {open && (
                <div className="flex flex-col gap-2 pl-6">
                    {options.map((option, index) => (
                        <p key={index} className="flex gap-2 text-gray-700 source-sans-3 text-sm sm:text-base">
                            <input type="checkbox" value={option} />
                            {option}
                        </p>
                    ))}
                </div>
            )}
            <hr className="text-gray-300 max-w-44 mt-2" />
        </div>
    );
};

const Collection = () => {

    const [sortDropDown,setSortDropDown] = useState(false);
    const [dropDown, setDropDown] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(true);
    const [typeOpen, setTypeOpen] = useState(true);
    const [sizeOpen, setSizeOpen] = useState(true);
    const [mobCategoryOpen, setMobCategoryOpen] = useState(false);
    const [mobTypeOpen, setMobTypeOpen] = useState(false);
    const [mobSizeOpen, setMobSizeOpen] = useState(false);

    return (
        <div>
            <div className="text-start sm:text-center text-lg sm:text-3xl">
                <hr className="text-gray-300 mb-4"/>
                <Heading text1={"OUR"} text2={"COLLECTION"}/>
            </div>
            <div className="flex justify-between relative z-0">

                {/* filter section */}
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center border border-gray-300 sm:border-none rounded-md px-2 pt-1">
                        <h1 className="text-sm sm:text-xl source-sans-3 text-[#3B2C35]">SHOP BY CATEGORY</h1>
                        <div className="block sm:hidden">
                            <ChevronDown
                                className={`${!dropDown ? 'block' : 'hidden'} w-4 h-4 sm:w-6 sm:h-6`}
                                onClick={() => setDropDown(true)}
                            />
                            <ChevronUp
                                className={`${dropDown ? 'block' : 'hidden'} w-4 h-4 sm:w-6 sm:h-6`}
                                onClick={() => setDropDown(false)}
                            />
                        </div>
                    </div>

                    {/* filter dropdown desktop */}
                    <div className="hidden sm:block">
                        <Dropdown
                            title="CATEGORY"
                            options={['Men', 'Women', 'Kids']}
                            open={categoryOpen}
                            toggleOpen={() => setCategoryOpen(!categoryOpen)}
                        />
                        <Dropdown
                            title="TYPE"
                            options={['Topwear', 'Bottomwear', 'Winterwear']}
                            open={typeOpen}
                            toggleOpen={() => setTypeOpen(!typeOpen)}
                        />
                        <Dropdown
                            title="SIZE"
                            options={['S', 'M', 'L', 'XL', 'XXL']}
                            open={sizeOpen}
                            toggleOpen={() => setSizeOpen(!sizeOpen)}
                        />
                    </div>
                
                    {/* filter dropdown mobile */}
                    <div className={`${dropDown ? 'block' : 'hidden'} sm:hidden`}>
                        <Dropdown
                            title="CATEGORY"
                            options={['Men', 'Women', 'Kids']}
                            open={mobCategoryOpen}
                            toggleOpen={() => setMobCategoryOpen(!mobCategoryOpen)}
                        />
                        <Dropdown
                            title="TYPE"
                            options={['Topwear', 'Bottomwear', 'Winterwear']}
                            open={mobTypeOpen}
                            toggleOpen={() => setMobTypeOpen(!mobTypeOpen)}
                        />
                        <Dropdown
                            title="SIZE"
                            options={['S', 'M', 'L', 'XL', 'XXL']}
                            open={mobSizeOpen}
                            toggleOpen={() => setMobSizeOpen(!mobSizeOpen)}
                        />
                    </div>
                </div>

                {/* sorting section */}
                <div onClick={()=>{setSortDropDown(!sortDropDown)}} className="z-10 absolute -top-10 sm:-top-12 right-0 min-w-1/8 rounded-md border border-gray-300">
                    <div className="flex gap-2 sm:gap-4 px-3 pt-1 cursor-pointer items-center">
                        <h1 className="text-sm sm:text-xl source-sans-3 text-[#3B2C35]">SORT BY</h1>
                        <div className="">
                            <ChevronDown
                                className={`${!sortDropDown ? 'block' : 'hidden'} w-4 h-4 sm:w-6 sm:h-6`}
                                onClick={() => setSortDropDown(true)}
                            />
                            <ChevronUp
                                className={`${sortDropDown ? 'block' : 'hidden'} w-4 h-4 sm:w-6 sm:h-6`}
                                onClick={() => setSortDropDown(false)}
                            />
                        </div>
                    </div>
                    {
                        sortDropDown ? 
                        <div className="flex flex-col gap-1 py-1 px-3">
                            <hr className="text-gray-400"/>
                            <p className="text-gray-700 source-sans-3 text-sm sm:text-base">Price</p>
                            <hr className="text-gray-400"/>
                            <p className="text-gray-700 source-sans-3 text-sm sm:text-base">Rating</p>
                            <hr className="text-gray-400"/>
                            <p className="text-gray-700 source-sans-3 text-sm sm:text-base">Latest Arrival</p>
                        </div>
                        : ""
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Collection