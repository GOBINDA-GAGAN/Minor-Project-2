import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";


const LayoutSideCard = ({item}) => {
  const { pathname } = useLocation();
  return (
    <div>
      <Link to={item.path}>
              <div
                className={`flex gap-4 items-center w-full ${
                  pathname === `${item.path}` ? " bg-rose-500  " : ""
                } p-3 rounded-md`}
              >
                <span>{item.icon}</span>
                <p className=" rounded-lg">{item.name}</p>
              </div>
            </Link>
      
    </div>
  )
}

export default LayoutSideCard
