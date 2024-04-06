import React from "react";
import Image from "next/image";
import VideoSlider from "./components/VideoSlider";
import SwiperButtons from "./components/SwiperButtons";

export default function page() {
  return (
    <div className="border-gradient-blue-to-gray-to-r bg-white pt-6 px-8 rounded-[28px] mt-8">
      <div className="relative z-[1]">
        <div className="flex justify-between w-full">
          <div className="relative max-w-fit">
            <h1 className="text-2xl font-semibold">Featured Template</h1>
            <Image src="/svgs/dash_vector.svg" alt="" width={130} height={40} className="absolute right-0 top-8" />
          </div>
          <SwiperButtons />
        </div>
        <VideoSlider />
      </div>
    </div>
  );
}
