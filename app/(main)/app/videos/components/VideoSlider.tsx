"use client";

import React from "react";

import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ai_video_templates } from "./constants/templates";
import VideoCard from "./VideoCard";
import { A11y, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const VideoSlider = () => {
  return (
    <div className="space-y-10 ">
      <div className="relative flex gap-4">
        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={25}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            868: {
              slidesPerView: 2,
            },
            1124: {
              slidesPerView: 3,
            },
            1560: {
              slidesPerView: 4,
            },
            1820: {
              slidesPerView: 5,
            },
          }}
          navigation={{
            nextEl: ".button-next-slide",
            prevEl: ".button-prev-slide",
          }}>
          {ai_video_templates.map((data, i: number) => (
            <SwiperSlide key={i} className="cursor-grab active:cursor-grabbing h-full">
              <VideoCard {...data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default VideoSlider;
