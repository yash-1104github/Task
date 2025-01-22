import React from "react";
import {
  Settings,
  Building2,
  Users,
  Calendar,
  UserCircle,
  Headphones,
  LayoutDashboard
} from 'lucide-react';


const Sidebar = () => {
  return (
    <>
      <div className="w-64 min-h-screen  border-r border-gray-200 bg-slate-100 p-6  hidden sm:block  fixed top-0 left-0">
        <div className="flex items-center mb-8 gap-4">
          <img src="/icon.svg" alt="Icon" className="h-8 w-8" />
          <div className="text-blue-800 text-2xl font-bold">Vasitum</div>
        </div>

        <div className="space-y-2">
          <div className="text-gray-400 text-sm mb-4">MAIN MENU</div>
          <SidebarItem icon={<LayoutDashboard />} text="Dashboard" active />
          <SidebarItem icon={<Users />} text="Recruitment" />
          <SidebarItem icon={<Calendar />} text="Schedule" />
          <SidebarItem icon={<UserCircle />} text="Employee" />
          <SidebarItem icon={<Building2 />} text="Department" />

          <div className="text-gray-400 text-sm mt-8 mb-4">OTHER</div>
          <SidebarItem icon={<Headphones />} text="Support" />
          <SidebarItem icon={<Settings />} text="Settings" />
        </div>

        <div className="mt-20">
          <p className="text-base  text-gray-500">Developed by <span className="text-xl">Yash Gupta</span></p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

const SidebarItem = ({ icon, text, active = false }) => {
  return (
    <div className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${active ? 'bg-blue-50 text-red-600' : 'text-gray-600 hover:bg-gray-50'}`}>
      {icon}
      <span className="text-base" >{text}</span>
    </div>
  );
}
