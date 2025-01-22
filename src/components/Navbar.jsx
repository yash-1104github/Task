import React from "react";
import {
  Bell,
  MessageSquare,
  Search,
  ChevronDown,
  AlignJustify
} from 'lucide-react';


const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center p-5 ">
        <div className="relative  hidden sm:block">
          <input
            type="text"
            placeholder="Search"
            className="pl-5 pr-4 py-2 border border-gray-200 rounded-lg w-80"
          />
          <Search className="absolute right-3  top-2.5 text-gray-400 w-5 h-5" />
        </div>

        <div className="relative block sm:hidden ">
          <div className="flex gap-4">
            <AlignJustify />
            <Search className="right-3  top-2.5 text-gray-400 w-5 h-5" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Bell className="text-gray-600 w-5 h-5 cursor-pointer" />
          <MessageSquare className="text-gray-600 w-5 h-5 cursor-pointer" />
          <div className="flex items-center space-x-2">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-medium text-slate-800 hidden sm:block">Yashi Gupta</span>
            <ChevronDown className="w-4 h-4 text-gray-600 cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
