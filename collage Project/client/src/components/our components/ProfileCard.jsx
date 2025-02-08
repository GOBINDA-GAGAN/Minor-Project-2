import React from "react";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdSchool } from "react-icons/md";

const ProfileCard = () => {
  return (
    <div className="bg-gray-700 mt-10 text-white p-6 border
     rounded-lg w-full max-w-sm mx-auto">
      <div className="flex justify-end">
        <button className="text-orange-500 hover:text-orange-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M3 17.25V21h3.75l11-11.06-3.75-3.75L3 17.25zM20.71 6.04a1.003 1.003 0 000-1.41l-2.34-2.34a1.003 1.003 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
          </svg>
        </button>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            width="48"
            height="48"
            className="text-gray-500"
          >
            <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
          </svg>
        </div>
        <h2 className="text-2xl font-bold">Gobinda Gagan Dey</h2>
        <p className="text-gray-500 text-sm mb-4">#_Alok_</p>
        <div className="flex items-center space-x-2 mb-6">
          <p className="text-sm">Public</p>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-11 h-6 bg-gray-600 rounded-full peer-checked:bg-orange-500 peer-checked:after:translate-x-6 peer-checked:after:bg-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
          </label>
        </div>
      </div>
      <div className="flex justify-center space-x-4 mb-6">
        <FaGithub className="text-xl hover:text-gray-400 cursor-pointer" />
        <FaLinkedin className="text-xl hover:text-blue-500 cursor-pointer" />
        <FaGlobe className="text-xl hover:text-green-500 cursor-pointer" />
      </div>
      <div className="space-y-4">
        <div className="flex items-center">
          <MdEmail className="text-xl text-gray-500 mr-4" />
          <span className="text-white">gobindagagandey@gmail.com</span>
        </div>
        <div className="flex items-center">
          <MdLocationOn className="text-xl text-gray-500 mr-4" />
          <span className="text-white">-</span>
        </div>
        <div className="flex items-center">
          <MdSchool className="text-xl text-gray-500 mr-4" />
          <span className="text-white">-</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
