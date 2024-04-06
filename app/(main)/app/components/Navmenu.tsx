"use client";

import DateTime from "@/components/DateTime";
import Image from "next/image";
import React from "react";
import { HiSearch } from "react-icons/hi";
import ProfileButton from "./buttons/ProfileButton";

import { usePathname } from "next/navigation";
import NotificationButton from "./buttons/NotificationButton";
import Link from "next/link";
import CreatevideoButton from "./buttons/CreatevideoButton";

export default function Navmenu() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center justify-end lg:justify-between pt-4 pl-4">
      <div className="w-full hidden lg:block">
        <DateTime />
      </div>
      <div className="w-full max-w-fit flex gap-x-5 items-center justify-end">
        <CreatevideoButton />
        <div className="w-full max-w-fit  bg-white rounded-full flex items-center gap-5 p-2 pl-3 cursor-pointer transition-all duration-500">
          <div className="bg-[#F4F7FE] items-center gap-3 px-3 rounded-full hidden lg:flex">
            <HiSearch size={20} />
            <input className="h-[45px] placeholder:text-[#8F9BBA] outline-none bg-transparent" placeholder="Search Videos" />
          </div>
          <div className="flex items-center gap-3">
            <Link href="/app/faq">
              <div className="p-2 hover:bg-primary-grey/10 rounded-full transition duration-500">
                <Image src={pathname === "/app/faq" ? "/icons/message-question-purple.svg" : "/icons/message-question.svg"} alt="" width={28} height={28} />
              </div>
            </Link>
            <NotificationButton />
          </div>
          <ProfileButton />
        </div>
      </div>
    </nav>
  );
}
