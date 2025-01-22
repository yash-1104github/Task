import { MoreVertical, ChevronDown } from "lucide-react";
import React from "react";

const Upcoming = () => {
  return (
    <>
      <div>
        <div className="bg-white p-6 rounded-xl mt-2">
          <div className="flex  justify-between items-center mb-4 ">
            <p className=" text-xl font-semibold mb-2">Upcoming Schedule</p>
            <div className="text-base  flex  p-1 text-gray-400 ring-1 ring-gray-200 ml-6 ">Today, 13 Sep 2021 <ChevronDown /></div>
          </div>


          <div className="flex font-semibold text-zinc-900 mb-2">Priority</div>

          {[
            {
              title: "Review candidate applications",
              time: "Today - 11:30 AM",
              priority: true
            },
            {
              title: "Interview with candidates",
              time: "Today - 10:30 AM"
            },
            {
              title: "Short meeting with product designer from IT Department",
              time: "Today - 09:15 AM"
            }
          ].map((item, index) => (
            <div key={index} className="flex justify-between items-center p-4 border-b last:border-0 bg-gray-100 mb-3 ">
              <div>
                <div className="font-medium mb-2">{item.title}</div>
                <div className="text-sm text-gray-400">{item.time}</div>
              </div>
              <MoreVertical className="w-5 h-5 text-gray-400" />
            </div>
          ))}

          <button className="text-red-500 w-full text-center mt-4">
            Create a New Schedule
          </button>
        </div>
      </div>
    </>
  );
};

export default Upcoming;
