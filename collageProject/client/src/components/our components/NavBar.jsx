import React, { useEffect, useState } from "react";
import logo from "/logo.png";
import { CiLight } from "react-icons/ci";
import profileImage from "/profileImage.png";
import UserProfileSubCard from "./UserProfileSubCard";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [userSubProfile, setUserSubProfile] = useState(false);

  return (
    <nav className="bg-[#242e44] h-20  border-b w-full text-white  fixed top-0 left-0">
      <div className="w-10/12 mx-auto flex  justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/">
            <img src={logo} alt="" srcset="" className="h-[80px]" />
          </Link>
          <p className="text-4xl font-bold">Nexus</p>
        </div>
        <div className="flex items-center gap-6  ">
          <span>
            <CiLight size={25} />
          </span>

          <img
            src={profileImage}
            alt=""
            srcset=""
            className="h-[50px]"
            onClick={() => {
              setUserSubProfile(!userSubProfile);
            }}
          />

          <div className="absolute right-32 top-24">
            {userSubProfile && <UserProfileSubCard></UserProfileSubCard>}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
