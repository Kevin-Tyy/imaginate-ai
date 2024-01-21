import Logo from "@/components/shared/Logo";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      <div className="absolute z-10 w-full">
        <div className="w-full max-w-[1720px] mx-auto">
          <div className="flex justify-between items-center w-full p-4">
            <Logo isLight />
            <div className="flex gap-x-4">
              <Link href="/auth/login">
                <button className="ring-1 ring-inset ring-[#4D4D77] py-3 px-8 rounded-xl">Log in</button>
              </Link>
              <Link href="/auth/login">
                <button className="bg-gradient-to-r from-[#c04cff] to-[#6035ff] text-white py-3 px-8 rounded-xl">Sign up</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-screen">
        <div className="w-full relative">
          <video src="/videos/-ef7b-44b8-83b6-2bbd00c57e9f.mp4" loop autoPlay className="w-full absolute inset-0 h-full object-cover videobg" />
          <div className="bg-[#C04CFF]/80 opacity-90 absolute inset-0 z-[1] h-full">
            <div className="flex justify-center items-center h-full">
              <div className="max-w-xl space-y-6">
                <h1 className="text-[55px] font-medium text-white capitalize leading-[1.2]">
                  Turn your text into videos in <span className="font-bold">minutes</span>
                </h1>
                <p className="text-white leading-loose">
                  Lorem ipsum dolor sit amet consectetur. Nullam ullamcorper urna nunc tristique. Mi id nisl nulla montes. Phasellus diam risus fringilla
                  consectetur enim varius. Metus lectus leo dolor.
                </p>
                <button className="py-4 px-8 bg-white text-[#5A34FF] rounded-xl">Get into Videos World</button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-center items-center h-full">
            <div className="max-w-xl space-y-6">
              <h1 className="text-[55px] text-[#191D39] leading-[1.2] capitalize font-medium">
                AI Product Photos <br />
                in <span className="text-[#BF4CFF] font-bold">3 Clicks</span>
              </h1>
              <p className="leading-loose text-[#15151a]">
                Lorem ipsum dolor sit amet consectetur. Nullam ullamcorper urna nunc tristique. Mi id nisl nulla montes. Phasellus diam risus fringilla
                consectetur enim varius. Metus lectus leo dolor.
              </p>
              <button className="py-4 px-8 bg-white border-gradient text-[#5A34FF] rounded-xl">
                <span className="bg-gradient-to-r from-[#CE4FFF] to-[#5A34FF] bg-clip-text text-transparent">Get into AI Product World</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}