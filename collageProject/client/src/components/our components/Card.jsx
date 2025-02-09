import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="min-w-72 w-72  p-5 bg-[#1e2a44] text-white rounded-lg shadow-lg hover:border transition-all ">
      <div className="flex items-center justify-center w-20 h-20 bg-gray-300 rounded-2xl  mb-4">
        <img src={item.image_link} alt="" srcset="" className="h-14" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
      {/* <p className="text-gray-400 mb-4">{item.description}</p> */}

      <Link to={item.path}>
        <Button border={true}>Try it free</Button>
      </Link>
    </div>
  );
};

export default Card;
