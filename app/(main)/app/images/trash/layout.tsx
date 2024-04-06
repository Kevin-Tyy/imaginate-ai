"use client";

import Image from "next/image";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
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
      </div>
      <main className="flex-1 h-full">{children}</main>
    </div>
  );
}
