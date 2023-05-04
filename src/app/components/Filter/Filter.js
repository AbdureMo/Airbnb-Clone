"use client";
import React, { useState } from "react";
import { links } from "../../assets/images-links";
import "./filter.css";



function Filter({ selectedFilter, setSelectedFilter }) {
  return (
    <div className="scroll bg-white pt-1 mt-4 pl-8 flex justify-start items-center overflow-x-auto shadow-md xl:shadow-none">
      {links.map((item, i) => (
        <div
          key={i}
          className={`links-box flex flex-col justify-center items-center mr-8 opacity-80 cursor-pointer min-w-[120px] hover:border-b-[3px]  ${
            i == selectedFilter && "selected-box"
          }`}
          onClick={() => {
            console.log("selecting key", i);
            setSelectedFilter(i);
          }}
        >
          <img src={item.imgSrc} alt="/" className="w-[30px] h-[30px] pb-2" />
          <p
            className={` text-[15px] font-semibold text-black flex justify-center links-label  pb-4 ${
              i == selectedFilter && "selected-label"
            }`}
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Filter;
