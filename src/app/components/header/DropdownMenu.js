"use client";
import React from "react";
import Image from "next/image";
import { BsFillPersonFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";

const DropdownMenu = () => {
 
  const [isOpen, setIsOpen] = React.useState();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleMenu}>
        <div className="flex items-center space-x-2 border-2 py-2 px-3 rounded-full cursor-pointer hover:shadow-lg shadow-inner gap-2 ">
          <FiMenu className="" style={{ fontSize: 22 }} />
          <BsFillPersonFill className="text-white bg-slate-600 rounded-full " style={{ fontSize: 35 }} />
        </div>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-3 py-2 w-60 bg-white rounded-xl border-gray-900 shadow-black z-50 shadow-md">
          <a
            href="#"
            className="block px-4 py-3 text-sm text-black hover:bg-gray-100 hover:text-black "
          >
            Sign Up
          </a>
          <a
            href="#"
            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            Log in
          </a>
          <hr />
          <a
            href="#"
            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            Airbnb your home
          </a>
          <a
            href="#"
            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            Host an experience
          </a>
          <a
            href="#"
            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            Help
          </a>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
