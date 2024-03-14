"use client";

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Image from "next/image";
import React, { useState } from "react";

export default function NotificationDropdown({ children, setIsOpen }: { children: React.ReactNode; setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [underlineLeft, setUnderlineLeft] = useState(0);

  let unreadNotifications = 0;

  const tabs = ["All", `Unread(${unreadNotifications})`];

  const handleTabClick = (index: number) => {
    const totalTabs = tabs.length;
    const percentage = (index / totalTabs) * 100;
    setSelectedTabIndex(index);
    setUnderlineLeft(percentage);
  };

  return (
    <DropdownMenu onOpenChange={() => setIsOpen((prev) => !prev)}>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-[520px] h-[560px] flex flex-col relative right-16 p-8 rounded-2xl">
        <div className="flex justify-between w-full">
          <div className="flex relative">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`w-[100px] h-[38px] flex gap-x-2 justify-center items-center relative cursor-pointer z-[1] transition-all duration-500 text-[16px] ${
                  selectedTabIndex === index ? "!text-white" : "!text-primary-grey"
                }`}
                onClick={() => handleTabClick(index)}>
                {tab}
              </div>
            ))}
            <div className="absolute bottom-0 w-[100px] h-[38px] bg-primary-blue custom-transition rounded-lg" style={{ left: `${underlineLeft}%` }}></div>
          </div>
          <button className="text-primary-grey underline">Mark All As Read</button>
        </div>
        <div className="w-full h-full flex-1 grid place-content-center">
          <div className="flex flex-col justify-center items-center mb-0">
            <Image src="/gifs/empty-coin.gif" alt="" width={200} height={200} className="mix-blend-multiply" />
            <h1 className="text-3xl text-center font-semibold">There is no content present.</h1>
            <p className="max-w-xl leading-loose text-center mt-4">
              Deleted templates will be stored here, and any items in the trash will be permanently deleted after 30 days.
            </p>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
