import React from "react";
import Image from "next/image";
import hotel from "../../assets/hotels/hotel-1.jpeg";
import { AiFillStar } from "react-icons/ai";

function Card2() {
  return (
    <div className="mt-8 ml-8 cursor-pointer">
      <Image
        src={hotel}
        style={{ objectFit: "cover" }}
        className=" rounded-2xl h-[300px] w-[385px]"
      />
      <div className="flex justify-between items-center mt-3 ">
        <p className="font-bold text-xl">Place</p>
        <div className="cardRating flex items-center gap-1 ">
          <AiFillStar />
          <p className="text-lg">4.93</p>
        </div>
      </div>
      <div className=" text-gray-500 text-xl">
        <p>Beach and sea views</p>
        <p>19-25 May</p>
        <p className="underline pt-2"><span className="font-bold text-black">$1,300 </span>total</p>
      </div>
    </div>
  );
}

export default Card2;
