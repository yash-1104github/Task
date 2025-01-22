import React from "react";
import {
    MoreVertical,
    Pin,
    ChevronDown
} from 'lucide-react';

const Announcement = () => {
    return (
        <>
            <div className=" p-2">
                <div className=" grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                        <div className="bg-white p-6 rounded-xl">
                            <div className="flex justify-between items-center mb-6 ">
                                <h2 className="text-lg sm:text-xl  font-semibold mb-2">Announcement</h2>
                                <div className="text-sm flex p-1  text-gray-400 ring-1 ring-gray-200 ml-6">Today, 13 Sep 2021   <ChevronDown /></div>
                            </div>

                            {[
                                {
                                    title: "Outing schedule for every department",
                                    time: "5 Minutes ago"
                                },
                                {
                                    title: "Meeting HR Department",
                                    time: "Yesterday, 12:30 PM"
                                },
                                {
                                    title: "IT Department need two more talents for UX/UI Designer position",
                                    time: "Yesterday, 09:15 AM"
                                }
                            ].map((item, index) => (
                                <div key={index} className="flex justify-between items-center p-4 border-b last:border-0">
                                    <div>
                                        <div className="font-medium mb-1">{item.title}</div>
                                        <div className="text-sm text-gray-400">{item.time}</div>
                                    </div>
                                    <div className="flex space-x-2">
                                        <Pin className="w-5 h-5 text-gray-400" />
                                        <MoreVertical className="w-5 h-5 text-gray-400" />
                                    </div>
                                </div>
                            ))}

                            <button className="text-red-500 w-full text-center mt-3">
                                See All Announcement
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Announcement;
