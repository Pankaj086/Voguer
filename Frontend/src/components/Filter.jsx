import { CirclePlus } from 'lucide-react';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Dropdown = ({ title, options, open, toggleOpen }) => {
    return (
        <div>
            <div className="flex items-center gap-2">
                <CirclePlus onClick={toggleOpen} className="w-4 h-4 text-[#3B2C35] cursor-pointer" />
                <h1 className="source-sans-3 text-[#3B2C35]">{title}</h1>
            </div>
            {open && (
                <div className="flex flex-col gap-2 pl-6">
                    {options.map((option, index) => (
                        <p key={index} className="flex gap-2 text-gray-700 source-sans-3">
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

const Filter = () => {
    const [dropDown, setDropDown] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(true);
    const [typeOpen, setTypeOpen] = useState(true);
    const [sizeOpen, setSizeOpen] = useState(true);
    const [mobCategoryOpen, setMobCategoryOpen] = useState(false);
    const [mobTypeOpen, setMobTypeOpen] = useState(false);
    const [mobSizeOpen, setMobSizeOpen] = useState(false);

    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-2">
                <h1 className="text-xl source-sans-3 text-[#3B2C35]">SHOP BY CATEGORY</h1>
                <div className="block sm:hidden">
                    <ChevronDown
                        className={`${!dropDown ? 'block' : 'hidden'} w-6 h-6`}
                        onClick={() => setDropDown(true)}
                    />
                    <ChevronUp
                        className={`${dropDown ? 'block' : 'hidden'} w-6 h-6`}
                        onClick={() => setDropDown(false)}
                    />
                </div>
            </div>

            {/* Desktop view */}
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

            {/* Mobile view */}
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
    );
};

export default Filter;
