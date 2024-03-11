"use client";

import { TooltipComponent } from "@/components/TooltipComponent";
import { useSidebarExpandedState as useExpandedState } from "@/hooks/useSidebarExpandedState";
import clsx from "clsx";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

export default function Sidebar() {
  const { isExpanded, expand, collapse, toggle } = useExpandedState();
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const handleOutsideClick = (e: any) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      collapse();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.addEventListener("mousedown", handleOutsideClick);
    };
  });
  return (
    <div className="relative">
      <TooltipComponent tooltipContent={isExpanded ? "Close sidebar" : "Open sidebar"}>
        <div
          className={clsx(
            "p-1 w-[35px] h-[35px] place-content-center absolute top-10 -right- overflow-x-hidden bg-white m-4 rounded-full cursor-pointer transition-all duration-500 z-[]",
            isExpanded && "rotate-180"
          )}
          onClick={toggle}>
          <Image src="/icons/arrows-close.svg" alt="logo" width={200} height={100} draggable={false} />
        </div>
      </TooltipComponent>
      <div className="">
        <div ref={sidebarRef} className="bg-[#FFFFFF] min-h-screen relative">
          <div
            className={clsx(
              "box-border h-full transition-all ease-in-out duration-500 w-[300px] absolute lg:relative z-[99] overflow-x-hidden",
              !isExpanded && "!w-[86px]"
            )}></div>
        </div>
      </div>
    </div>
  );
}
