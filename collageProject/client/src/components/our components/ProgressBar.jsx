import React from "react";

const ProgressBar = () => {
  return (
    <div className="w-[40%] p-4 border rounded-md border-gray-400 bg-[#1E2A44]">
      <div className="flex justify-between ">
        <p className="text-sm text-gray-500">Your Progress:</p>
        <p className="text-lg text-[#F43F5E] font-bold">4% complete</p>
      </div>
      <input type="range" name="" id="" className="w-full" />
    </div>
  );
};

export default ProgressBar;
