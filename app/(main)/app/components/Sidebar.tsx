"use client";

import { TooltipComponent } from "@/components/TooltipComponent";
import Logo from "@/components/shared/Logo";
import { useSidebarExpandedState as useExpandedState } from "@/hooks/useSidebarExpandedState";
import clsx from "clsx";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { sidebarLinks } from "./constants/NavMenuData";
import SidebarCategoryBox from "./SidebarCategoryBox";

export default function Sidebar() {
  const { isExpanded, expand, collapse, toggle } = useExpandedState();
  return (
    <div className="h-screen z-20 no-scrollbar relative sidebar">
      <TooltipComponent tooltipContent={isExpanded ? "Close sidebar" : "Open sidebar"}>
        <div
          className={clsx("shadow-md p-2.5 grid place-content-center absolute top-6 -right-6 overflow-hidden bg-white rounded-full cursor-pointer z-[999999]")}
          onClick={toggle}>
          <Image
            src="/icons/arrows-close.svg"
            alt="logo"
            width={200}
            height={100}
            draggable={false}
            className={clsx("w-[24px] h-[24px] transition-all duration-500", isExpanded && "rotate-180")}
            m-2
          />
        </div>
      </TooltipComponent>
      <div
        className={clsx(
          "bg-[#FFFFFF] h-full min-h-screen relative transition duration-500 border-r-4 border-r-white no-scrollbar",
          isExpanded && "!bg-[#EAF0FF] shadow-2xl"
        )}>
        <div
          className={clsx(
            "box-border h-full transition-all ease-in-out duration-500 w-[320px] absolute lg:relative z-[99999]",
            !isExpanded && "sm:!w-[98px]"
          )}>
          <div className={clsx("w-full h-full min-h-screen flex flex-col justify-between overflow-x-hidden py-4 px-3 no-scrollbar")}>
            <Image src={"/logo/imaginate.svg"} alt="imaginate" height={80} width={80} className={`w-36 max-h-16 !min-w-36`} />{" "}
            <div className={clsx("space-y-3 flex-1 mt-16")}>
              {sidebarLinks.map((category, index) => (
                <SidebarCategoryBox category={category} key={index} isExpanded={isExpanded} />
              ))}
            </div>
            <div className={clsx("", isExpanded && "hidden")}>
              <div
                className={clsx(
                  "flex justify-center items-center h-16 w-16 mx-auto overflow rounded-full bg-[#F5F5F5] overflow-x-hidden transition-all duration-500"
                )}>
                <div className="bg-[#FCD64A] w-8 h-8 blur-xl absolute" />
                <Image src="/icons/lamp-on.svg" alt="" width={32} height={32} />
              </div>
            </div>
            <div
              className={clsx("bg-[#F5F5F5] p-4 rounded-3xl flex flex-col items-center transition-all duration-300 relative mt-20", !isExpanded && "hidden")}>
              <div
                className={clsx(
                  "absolute flex justify-center items-center h-24 w-24 mx-auto overflow rounded-full -translate-y-16 bg-[#F5F5F5] overflow-x-hidden transition-all duration-500"
                )}>
                <div className="bg-[#FCD64A] w-8 h-8 blur-xl absolute" />
                <Image src="/icons/lamp-on.svg" alt="" width={32} height={32} />
              </div>
              <div className={clsx("mt-10 space-y-4 transition duration-500 ", !isExpanded && "opacity-0 invisible")}>
                <h1 className="text-xl font-semibold text-center whitespace-nowrap">Thoughts Time</h1>
                <p className="text-primary-grey text-center line-clamp-3 overflow-hidden text-ellipsis">
                  We don’t have any notice for you, till then you can share your thoughts with your peers.
                </p>
                <button className="bg-white p-4 rounded-2xl w-full hover:scale-105 transition-all duration-500 whitespace-nowrap">Write a message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
