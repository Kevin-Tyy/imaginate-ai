"use client";

import DateTime from "@/components/DateTime";
import Image from "next/image";
import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";
import ProfileButton from "./ProfileButton";
import NotificationDropdown from "./dropdowns/NotificationDropdown";
import { IoMdNotificationsOutline } from "react-icons/io";
import clsx from "clsx";

export default function Navmenu() {
  const [notificationPopupOpen, setIsNotificationPopupOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between pt-6 px-6">
      <div className="w-full">
        <DateTime />
      </div>
      <div className="w-full max-w-fit flex gap-x-5 items-center">
        <button className="bg-gradient-to-r from-primary-purple to-primary-blue px-6 py-4 text-white rounded-full hover:scale-105 transition-all duration-300 text-[15px]">
          Create New Video
        </button>
        <div className="w-full max-w-fit  bg-white rounded-full flex items-center gap-5 p-2 pl-3 cursor-pointer transition-all duration-500">
          <div className="bg-[#F4F7FE] flex items-center gap-3 px-3 rounded-full">
            <HiSearch size={20} />
            <input className="h-[48px] placeholder:text-[#8F9BBA] outline-none bg-transparent" placeholder="Search Videos" />
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 hover:bg-primary-grey/10 rounded-full transition duration-500">
              <Image src="/icons/message-question.svg" alt="" width={30} height={30} />
            </div>
            <NotificationDropdown setIsOpen={setIsNotificationPopupOpen}>
              <div className="p-2 hover:bg-primary-grey/10 rounded-full transition duration-500">
                <IoMdNotificationsOutline size={28} className={clsx(notificationPopupOpen ? "text-primary-blue" : "text-[#A3AED0]")} />
              </div>
            </NotificationDropdown>
          </div>
          <ProfileButton />
        </div>
      </div>
    </nav>
  );
}
