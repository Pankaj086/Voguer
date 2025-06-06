import { Link, NavLink } from "react-router-dom";
import { Search, User, ShoppingBag, Menu, ChevronLeft  } from 'lucide-react';
import { assets } from "../assets/frontend_assets/assets";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "./Navbar.css";
import axios from "axios";
import { toast } from "react-toastify";

const Navbar = () => {

    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const  { setShowSearch, totalItems, token, setToken, setCartItems, BACKEND_URL } = useContext(AppContext);

    const searchBarHandler = () => {
        navigate('/collection');
        setShowSearch(true);
    }

    const logoutHandler = async () => {
        try {
            const response = await axios.post(
                BACKEND_URL+"/api/v1/users/logout", 
                {}, // empty body
                { 
                    withCredentials: true,
                    headers: { 
                        Authorization: `Bearer ${token}` // Use standard Authorization header format
                    }
                }
            );
            
            if(response.data.success){
                localStorage.removeItem("token");
                setToken("");
                setCartItems([]);  // Changed from empty string to empty array if cartItems is an array
                navigate("/login");
                toast.success(response.data.message);
            }
            else{
                toast.error(response.data.message);
            }

        } catch (error) {
            toast.error(error?.response?.data?.message || "Error logging out");
            console.error("Logout error:", error);
        }
    }
    
    
    return (
        <div className="flex justify-between items-center py-5 font-medium">
            {/* logo */}
            <img onClick={()=>navigate('/')} src={assets.logo} className="w-36 cursor-pointer"/>

            {/* nav items */}
            <ul className="hidden sm:flex gap-5 text-sm text-black">
                <NavLink to="/" className="flex flex-col items-center gap-1">
                    <p>HOME</p>
                    <div className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></div>
                </NavLink>
                <NavLink to="/collection" className="flex flex-col items-center gap-1">
                    <p>COLLECTION</p>
                    <div className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></div>
                </NavLink>
                <NavLink to="/about" className="flex flex-col items-center gap-1">
                    <p>ABOUT</p>
                    <div className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></div>
                </NavLink>
                <NavLink to="/contact" className="flex flex-col items-center gap-1">
                    <p>CONTACT</p>
                    <div className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></div>
                </NavLink>
            </ul>

            {/* buttons */}
            <div className="flex gap-6 items-center">
                <Search onClick={searchBarHandler} className="w-6 h-6 cursor-pointer"/>
                <div className="group relative">
                    <User onClick={()=> token ? null : navigate("/login")} className="w-6 h-6 cursor-pointer"/>
                    <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-100">
                        {
                            token && 
                            <div className="flex flex-col gap-2 w-32 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                                <p className="cursor-pointer hover:text-black">Profile</p>
                                <p onClick={()=>navigate("/orders")} className="cursor-pointer hover:text-black">Orders</p>
                                <p onClick={logoutHandler} className="cursor-pointer hover:text-black">Logout</p>
                            </div>
                        }
                    </div>
                </div>
                <Link to="/cart" className="relative">
                    <ShoppingBag className="w-6 h-6 cursor-pointer"/>
                    <p className="absolute -right-2 top-3 w-4 bg-red-500 text-white text-center leading-4 aspect-square rounded-full text-[10px]">{totalItems}</p>
                </Link>
                <Menu onClick={()=>setVisible(true)} className="block sm:hidden cursor-pointer"/>
            </div>

            {/* sidebar for mobile screen */}
            <div className={`${visible ? "w-full" : "w-0"} absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all z-100`}>
                <div onClick={()=>setVisible(false)} className="text-gray-700 flex gap-1 px-4 py-3">
                    <ChevronLeft className="w-6 h-6 cursor-pointer"/>
                    <p>Back</p>
                </div>
                <div className="flex flex-col text-gray-700">
                <NavLink onClick={()=>setVisible(false)} to="/" className="py-2 pl-6 border-t">HOME</NavLink>
                <NavLink onClick={()=>setVisible(false)} to="/collection" className="py-2 pl-6 border-b border-t">COLLECTION</NavLink>
                <NavLink onClick={()=>setVisible(false)} to="/about" className="py-2 pl-6 border-b">ABOUT</NavLink>
                <NavLink onClick={()=>setVisible(false)} to="/contact" className="py-2 pl-6 border-b">CONTACT</NavLink>
                </div>
            </div>
        </div>
        
    )
}

export default Navbar;