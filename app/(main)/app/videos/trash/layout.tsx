"use client";

import clsx from "clsx";
import { LayoutGrid } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { PiRowsFill } from "react-icons/pi";
import { TbTemplate, TbVideo } from "react-icons/tb";

export default function layout({ children }: { children: React.ReactNode }) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [selectedView, setSelectedView] = useState("grid");

  const [underlineLeft, setUnderlineLeft] = useState(0);

  const tabs = [
    { icon: <TbVideo size={26} />, title: "Videos" },
    { icon: <TbTemplate size={26} />, title: "Templates" },
  ];

  const handleTabClick = (index: number) => {
    const totalTabs = tabs.length;
    const percentage = (index / totalTabs) * 100;
    setSelectedTabIndex(index);
    setUnderlineLeft(percentage);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between pt-6 pb-4 border-b border-[black]/10">
        <div className="w-full flex gap-x-4 items-center">
          <div className="p-2 bg-white border-gradient-blue-to-gray-to-b-sm rounded-[8px] cursor-pointer hover:shadow transition duration-500">
            <Image src="/icons/trash-purple.svg" alt="" width={25} height={25} className=" relative z-[1]" />
          </div>
          <span className="text-2xl text-primary-blue font-semibold">Trash</span>
          <Image src="/icons/info-square.svg" alt="" width={28} height={28} className=" relative z-[1] cursor-pointer" />
        </div>
        <div className="flex items-center gap-6">
          <div className="border border-[#DBDBDB] bg-white p-1 rounded-xl">
            <div className="flex relative">
              {tabs.map(({ icon, title }, index) => (
                <div
                  key={index}
                  className={`w-[150px] h-[45px] flex gap-x-2 justify-center items-center relative cursor-pointer z-[1] transition-all duration-500 ${
                    selectedTabIndex === index ? "!text-white" : "!text-primary-grey"
                  }`}
                  onClick={() => handleTabClick(index)}>
                  {icon}
                  {title}
                </div>
              ))}
              <div className="absolute bottom-0 w-[150px] h-[45px] bg-primary-blue custom-transition rounded-lg" style={{ left: `${underlineLeft}%` }}></div>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <button
              onClick={() => setSelectedView("grid")}
              className={clsx(
                "bg-transparent rounded-lg py-3 px-3.5 text-primary-grey transition duration-500 outline-none",
                selectedView === "grid" && "!text-white !bg-primary-blue"
              )}>
              <LayoutGrid />
            </button>
            <button
              onClick={() => setSelectedView("rows")}
              className={clsx(
                "bg-transparent rounded-lg py-3 px-3.5 text-primary-grey transition duration-500 outline-none",
                selectedView === "rows" && "!text-white !bg-primary-blue"
              )}>
              <PiRowsFill size={28} />
            </button>
          </div>
        </div>
      </div>
      <main className="flex-1 h-full">{children}</main>
    </div>
  );
}
