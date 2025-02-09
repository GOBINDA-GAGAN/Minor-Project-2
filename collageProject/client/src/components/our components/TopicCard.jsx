import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import MyTable from "./MyTable";

const TopicCard = ({ heading, categoryData_topics }) => {
  const [sawTable, setSawTable] = useState(true);
  return (
    <div className=" p-2 rounded-md  border-gray-500 border-[0.5px]  bg-[#1E2A44] ">
      <div className="flex justify-between items-center">
        <h2 className=" text-base font-medium">{heading}</h2>

        <div className="p-1  rounded-md border-gray-500 border-[0.5px] ">
          <HiChevronDown size={25} onClick={() => setSawTable(!sawTable)} />
        </div>
      </div>
      <MyTable categoryData_topics={categoryData_topics} sawTable={sawTable} />
    </div>
  );
};

export default TopicCard;
