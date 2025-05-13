import React from 'react'
import { NavLink } from 'react-router-dom';
import { CirclePlus, CalendarArrowUp, ListCheck } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2 border-gray-300'>
      <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>

        <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l" to="/add">
            <CirclePlus className='w-5 h-5'/>
            <p className='hidden md:block'>ADD ITEM</p>
        </NavLink>

        <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l" to="/list">
            <ListCheck className='w-5 h-5'/>
            <p className='hidden md:block'>LIST ITEMS</p>
        </NavLink>

        <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l" to="/orders">
            <CalendarArrowUp className='w-5 h-5'/>
            <p className='hidden md:block'>ORDERS</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
