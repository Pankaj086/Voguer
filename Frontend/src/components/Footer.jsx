import { Link } from "react-router-dom"
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <div className="mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="my-2">
                    <h1 className="text-xl font-bold source-sans-3 mb-4 text-gray-900">CUSTOMER CARE</h1>
                    <ul className="flex flex-col gap-2">
                        <Link to="/" className="source-sans-3 hover:text-blue-800 font-light text-gray-600">
                            24/7 Customer Support
                        </Link>
                        <Link to="/" className="source-sans-3 hover:text-blue-800 font-light text-gray-600">
                            Call Now: 888-888-888
                        </Link>
                        <Link to="/" className="source-sans-3 hover:text-blue-800 font-light text-gray-600">
                            Returns and Exhanges
                        </Link>
                        <Link to="/" className="source-sans-3 hover:text-blue-800 font-light text-gray-600">
                            Shipping Infromation
                        </Link>
                        <Link to="/" className="source-sans-3 hover:text-blue-800 font-light text-gray-600">
                            Track Your Order
                        </Link>
                    </ul>
                </div>
                <div className="my-2">
                    <h1 className="text-xl font-bold source-sans-3 mb-4 text-gray-900">QUICK LINKS</h1>
                    <ul className="flex flex-col gap-2">
                        <Link to="/" className="source-sans-3 hover:text-blue-800 font-light text-gray-600">
                            Home
                        </Link>
                        <Link to="/" className="source-sans-3 hover:text-blue-800 font-light text-gray-600">
                            About
                        </Link>
                        <Link to="/" className="source-sans-3 hover:text-blue-800 font-light text-gray-600">
                            Contact Us
                        </Link>
                        <Link to="/" className="source-sans-3 hover:text-blue-800 font-light text-gray-600">
                            Cart
                        </Link>
                    </ul>
                </div>
                <div className="my-2">
                    <h1 className="text-xl font-bold source-sans-3 mb-4 text-gray-900">SHOP NOW</h1>
                    <ul className="flex flex-col gap-2">
                        <Link to="/" className="source-sans-3 hover:text-blue-800 font-light text-gray-600">
                            New Arrival
                        </Link>
                        <Link to="/" className="source-sans-3 hover:text-blue-800 font-light text-gray-600">
                            Trending Now
                        </Link>
                        <Link to="/" className="source-sans-3 hover:text-blue-800 font-light text-gray-600">
                            Hot Deals
                        </Link>
                        <Link to="/" className="source-sans-3 hover:text-blue-800 font-light text-gray-600">
                            All Collection
                        </Link>
                        <Link to="/" className="source-sans-3 hover:text-blue-800 font-light text-gray-600">
                            Track Your Order
                        </Link>
                    </ul>
                </div>
                <div className="my-2">
                    <h1 className="text-xl font-bold source-sans-3 mb-4 text-gray-900">FOLLOW US</h1>
                    <ul className="flex gap-4 cursor-pointer">
                        <Facebook className="w-8 h-8 text-gray-600 hover:text-blue-800"/>
                        <Instagram className="w-8 h-8 text-gray-600 hover:text-blue-800"/>
                        <Twitter className="w-8 h-8 text-gray-600 hover:text-blue-800"/>
                        <Youtube className="w-8 h-8 text-gray-600 hover:text-blue-800"/>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-[#3B2C35] gap-2 mt-4 px-4 text-center bg-">
                <h1 className="text-white text-lg sm:text-2xl tracking-widest pt-2 source-sans-3">© 2025 <span className="text-yellow-500">VOGUER</span>. All rights reserved.</h1>
                <a href="https://www.linkedin.com/in/pankaj086" target="_blank" className="text-white text-lg  sm:text-2xl tracking-widest pb-2 source-sans-3">
                    Developed by @pankaj086
                </a>
            </div>
        </div>
    )
}

export default Footer