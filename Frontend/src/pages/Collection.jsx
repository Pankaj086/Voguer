import { useState } from "react"
import { CirclePlus } from "lucide-react"
import Heading from "../components/Heading"
import { ArrowDownUp } from "lucide-react"
import { IoIosOptions } from "react-icons/io"
import { X } from "lucide-react"
import "./Collection.css"

const Dropdown = ({ title, options, open, toggleOpen }) => {
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
                <input type="checkbox" value={option} />
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
    // const [sortDropDown, setSortDropDown] = useState(false)
    const [dropDown, setDropDown] = useState(false)
    const [categoryOpen, setCategoryOpen] = useState(true)
    const [typeOpen, setTypeOpen] = useState(true)
    const [sizeOpen, setSizeOpen] = useState(true)

    return (
        <div>
            <div className="text-xl sm:text-3xl text-center relative">
                <hr className="text-gray-300 mb-4" />
                <Heading text1={"OUR"} text2={"COLLECTION"} />
            </div>
            <div className="flex justify-between items-center ">
                {/* filter */}
                <div 
                onClick={() => {setDropDown(!dropDown)}}
                className="flex items-center px-2 py-1 gap-4 rounded-full bg-gray-300 cursor-pointer">
                    <p>Filter</p>
                    <IoIosOptions />
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
                        />
                        <Dropdown
                            title="TYPE"
                            options={["Topwear", "Bottomwear", "Winterwear"]}
                            open={typeOpen}
                            toggleOpen={() => setTypeOpen(!typeOpen)}
                        />
                        <Dropdown
                            title="SIZE"
                            options={["S", "M", "L", "XL", "XXL"]}
                            open={sizeOpen}
                            toggleOpen={() => setSizeOpen(!sizeOpen)}
                        />
                        </div>
                    </div>
                </div>

                {/* sort */}
                <div className="flex items-center px-2 py-1 gap-4 rounded-full bg-gray-300">
                    <p>Sort by</p>
                    <ArrowDownUp />
                </div>
            </div>
        </div>
    )
}

export default Collection

