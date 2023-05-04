"use client";
import React from "react";
import Image from "next/image";
import logo from "../../assets/image/logo1.png";
import { BiSearch } from "react-icons/bi";
import { IoOptionsOutline } from "react-icons/io5";
import { FaAirbnb } from "react-icons/fa";
import LanguageIcon from "@mui/icons-material/Language";
import DropdownMenu from "./DropdownMenu";

function Header() {
  return (
    <div className="z-50">
      <div className=" bg-white w-full px-8 pt-5 ">
        {/* middle mobile searchBar */}

        <div className=" flex w-full rounded-full  justify-between items-center shadow-lg cursor-pointer z-50 border-2 p-2 xl:hidden">
          <div className="flex items-center">
            <BiSearch
              className=" text-gray-800 mx-5 "
              style={{ fontSize: 27 }}
            />
            <div className="flex-row ">
              <p className="text-xl font-semibold">Anywhere</p>
              <div className="flex text-gray-500 mb-2">
                <p className="pr-3">Any week</p>
                <p className="pr-3">.</p>
                <p>Add guests</p>
              </div>
            </div>
          </div>
          <div className=" mr-3">
            <IoOptionsOutline
              className=" border-2 rounded-full p-2 "
              style={{ fontSize: 50 }}
            />
          </div>
        </div>

        {/* Large screen */}

        <div className="hidden xl:flex justify-between items-center">
          {/* Right */}

          <Image
            className=" hidden 2xl:flex w-[150px] cursor-pointer"
            src={logo}
            alt="/"
          />
          <FaAirbnb
            className=" 2xl:hidden text-red-600 cursor-pointer  "
            style={{ fontSize: 50 }}
          />

          {/* Middle */}

          <div className="shadow-md flex hover:shadow-lg cursor-pointer border-2 items-center justify-around rounded-full pl-7 pr-2 py-3">
            <p className="pr-3 border-r-2 font-semibold text-[20px] ">
              Anywhere
            </p>
            <p className="px-3 border-r-2 font-semibold text-[20px] ">
              Any week
            </p>
            <p className="px-3 ">Add guests</p>

            <BiSearch
              className=" text-white bg-red-500 rounded-full p-[10px]"
              style={{ fontSize: 40 }}
            />
          </div>

          {/* right */}

          <div className="space-x-4 flex items-center">
            <p className="cursor-pointer rounded-full p-2 hover:bg-gray-100 text-[20px] font-semibold">
              Airbnb your home
            </p>
            <LanguageIcon className="h-6 cursor-pointer rounded-full hover:border-4 hover:scale-150  hover:bg-gray-100 " />
            <DropdownMenu />
          </div>
        </div>
      </div>
      <div className="sticky hidden xl:block border-b-2 mt-4 mb-12"></div>
    </div>
  );
}

export default Header;
