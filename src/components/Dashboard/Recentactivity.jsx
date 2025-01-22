import React from "react";

const Recentactivity = () => {
  return (
    <>
      <div>
        <div className="bg-[#1B204A] text-white p-4 rounded-xl mt-4">
          <div className="mb-6 font-semibold tracking-wide">Recently Activity</div>
          <div className="text-sm opacity-80 mb-4">10:40 AM, 10 Sept 2021</div>
          <h3 className="text-xl font-bold mb-2">You Posted a New Job</h3>
          <p className="text-sm opacity-80 mb-4">
            Kindly check the requirements and terms of work and make sure everything is right.
          </p>
          <div className="flex justify-between items-center">
            <div className="text-sm">Today you makes 12 Activity</div>
            <button className="bg-red-500 px-4 py-2 rounded-lg text-sm">
              See All Activity
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recentactivity;
