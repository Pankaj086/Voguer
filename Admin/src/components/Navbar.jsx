import React from 'react'
import {assets} from "../assets/admin_assets/assets"

const Navbar = ({setToken}) => {

    const logoutHandler = () => {
        setToken("");
    }

    return (
        <div className='flex items-center justify-between py-2 px-[4%]'>
        <img className='w-[max(10%,80px)]' src={assets.logo} alt=''/>
        <button onClick={logoutHandler} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm cursor-pointer hover:bg-gray-700'>Logout</button>
        </div>
    )
}

export default Navbar;
