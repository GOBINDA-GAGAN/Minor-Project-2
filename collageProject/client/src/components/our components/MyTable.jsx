import React from "react";
import { IoStarOutline } from "react-icons/io5";
import { FcStart } from "react-icons/fc";

const MyTable = ({ categoryData_topics, sawTable }) => {
  console.log(sawTable);

  return (
    <div className={`p-5 ${sawTable ? "hidden" : "visible"}`}>
      <div className="overflow-hidden rounded-xl border-[0.5px] border-gray-600 bg-black">
        <table className="w-full">
          <thead>
            <tr>
              <th className="border-[0.5px] text-base text-gray-400 border-gray-600 px-4 py-2">
                Status
              </th>
              <th className="border-[0.5px] text-base text-gray-400 border-gray-600 px-4 py-2">
                Topic
              </th>
              <th className="border-[0.5px] text-base text-gray-400 border-gray-600 px-4 py-2">
                YouTube
              </th>
              <th className="border-[0.5px] text-base text-gray-400 border-gray-600 px-4 py-2">
                Revision
              </th>
            </tr>
          </thead>
          {categoryData_topics.map((value, key) => {
            return (
              <tbody className="" key={key}>
                <tr className="text-sm text-white">
                  <td className="border-[0.5px] border-gray-600 px-4 py-2 text-center w-[10%]">
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="border-[0.5px] border-gray-600 px-4 py-2 text-left w-[60%]">
                    {value.name}
                  </td>
                  <td className="border-[0.5px] border-gray-600 px-4 py-2 text-center grid place-items-center">
                    <a href="#" className="text-blue-500">
                      <FcStart size={25} />
                    </a>
                  </td>

                  <td className="border-[0.5px] border-gray-600 px-4 py-2 ">
                    <IoStarOutline size={25} className="text-center" />
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default MyTable;
