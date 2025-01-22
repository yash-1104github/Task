import React from "react";
import Announcement from "./Dashboard/Announcement";
import Upcoming from "./Dashboard/Upcoming";
import { TrendingUp } from "lucide-react"
import Recentactivity from "./Dashboard/Recentactivity";


const Dashboard = () => {
    return (
        <>
            <div className="p-4 flex-1">
                <h1 className="text-2xl font-bold mb-4 ml-3  text-gray-800">Dashboard</h1>


                <div className="grid grid-cols-1 md:grid-cols-3  gap-6 mb-6">
                    <div className="p-6 rounded-xl bg-[#FFEFE7] transition-all duration-300  hover:scale-105 shadow-md">
                        <h3 className="text-gray-500 mb-2 font-bold">Available Position</h3>
                        <p className="text-4xl font-bold mb-2 text-blue-950">24</p>
                        <p className="text-semibold text-orange-500">4 Urgently needed</p>
                    </div>
                    <div className="p-6 rounded-xl bg-[#E8F0FB] transition-all duration-300  hover:scale-105 shadow-md">
                        <h3 className="text-gray-500 mb-2 font-bold">Job Open</h3>
                        <p className="text-4xl font-bold mb-2 text-blue-950">10</p>
                        <p className="text-semibold text-blue-500">4 Active hiring</p>
                    </div>
                    <div className="p-6 rounded-xl bg-[#FDEBF9] transition-all duration-300  hover:scale-105 shadow-md">
                        <h3 className="text-gray-500 mb-2 font-bold">New Employees</h3>
                        <p className="text-4xl font-bold mb-2 text-blue-950 ">24</p>
                        <p className="text-semibold text-pink-500">4 Department </p>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-100 p-6 rounded-xl  transition-all duration-300  hover:scale-105 shadow-lg">
                        <h3 className="text-gray-600 mb-4 text-xl font-bold">Total Employees</h3>
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="text-3xl font-bold text-blue-950">216</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <TrendingUp className="h-4 w-4 text-green-500" />
                                    <p className="text-sm text-gray-500">+2% Past month</p>
                                </div>
                            </div>
                            <div className="text-sm text-gray-500">
                                <p>120 Men</p>
                                <p>96 Women</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-100 p-6 rounded-xl  transition-all duration-300  hover:scale-105 shadow-lg">
                        <h3 className="text-gray-600 mb-4 text-xl font-bold">Talent Request</h3>
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="text-3xl font-bold text-blue-950">16</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <TrendingUp className="h-4 w-4 text-green-500" />
                                    <p className="text-sm text-gray-500">+5% Past month</p>
                                </div>
                            </div>
                            <div className="text-sm text-gray-500">
                                <p>6 Men</p>
                                <p>10 Women</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="felx-col md:flex ">
                    <Upcoming />
                    <Announcement />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2">
                    <Recentactivity />
                </div>
            </div>
        </>
    );
};

export default Dashboard;


