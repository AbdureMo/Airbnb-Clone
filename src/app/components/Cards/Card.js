"use client";
import React from "react";
import "./styles.css";
import { AiFillStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

function Card({ card }) {
  return (
    <div className="card-box mt-8 ml-8 cursor-pointer">
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        loop={false}
        mousewheel={true}
        cssMode={true}
        pagination
        modules={[Pagination, Navigation]}
        className="swiper-container w-[270px] h-[270px] overflow-hidden "
      >
        {card.imgSrc.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              style={{ objectFit: "cover" }}
              className="card-img rounded-2xl h-full w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="card-info-flex flex justify-between items-center mt-3 ">
        <p className="card-title font-bold text-xl">{card.title}</p>
        <div className="card-rating cardRating flex items-center gap-1 ">
          <AiFillStar />
          <p className="text-lg">{card.rating}</p>
        </div>
      </div>

      <div className=" text-gray-500 text-xl">
        <p>{card.desc}</p>
        <p>{card.date}</p>
        <p className="underline pt-2">
          <span className="font-bold text-black">${card.price}</span> total
        </p>
      </div>
    </div>
  );
}

export default Card;
