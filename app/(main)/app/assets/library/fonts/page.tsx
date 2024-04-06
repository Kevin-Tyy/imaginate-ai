"use client";

import { ChevronRight, Upload } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import BillingPlanModal from "../../../components/modals/BillingPlanModal";
type Plan = {
  planName: string;
  planDuration: "Monthly" | "Yearly";
};
export default function page() {
  const [currentPlan, setCurrentPlan] = useState<Plan>({ planName: "Starter", planDuration: "Monthly" });
  const [isPlanModalOpen, setIsPlanModalOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col md:flex-row justify-between pt-8 pb-5 border-b border-[black]/10">
        <div className="w-full flex gap-x-4 items-center">
          <Link
            href="/app/assets/library"
            className="flex gap-x-2 items-center filter grayscale opacity-40 hover:opacity-60 transition duration-500 cursor-pointer">
            <div className="p-2 bg-white border-gradient-blue-to-gray-to-b-sm rounded-[8px] cursor-pointer hover:shadow transition duration-500">
              <Image src="/icons/book-purple.svg" alt="" width={23} height={23} className=" relative z-[1]" />
            </div>
            <span className="text-2xl text-primary-blue font-semibold">Library</span>
          </Link>
          <ChevronRight size={25} className="filter grayscale opacity-60" />
          <div className="flex gap-x-2 items-center">
            <Image src="/icons/font-purple.svg" alt="" width={25} height={25} className=" relative z-[1]" />
            <span className="text-2xl text-primary-blue font-semibold">Fonts</span>
          </div>
        </div>
        <button className="max-w-fit self-end border-gradient py-3 px-6 flex items-center gap-2 whitespace-nowrap">
          <Upload />
          Upload File
        </button>
      </div>
      <main className="flex-1 h-full w-full flex justify-center items-center">
        <div className="w-full flex flex-col items-center mb-40">
          <Image src="/gifs/fonts.gif" alt="" width={240} height={240} className="mix-blend-multiply m-20" />
          <div className="flex flex-col lg:flex-row gap-8 justify-between items-center w-full max-w-5xl">
            <div className="">
              <h1 className="text-3xl font-semibold text-center lg:text-left">The right font, always at hand</h1>
              <p className="max-w-xl leading-loose mt-4 text-center lg:text-left">Add custom fonts to your workspace's library and make it easy to access. </p>
            </div>
            <button
              onClick={() => setIsPlanModalOpen(true)}
              className="bg-gradient-to-r from-primary-purple to-primary-blue px-6 py-4 text-white rounded-xl hover:scale-105 transition-all duration-300">
              Upgrade Plan{" "}
            </button>
          </div>
        </div>
      </main>
      <BillingPlanModal isOpen={isPlanModalOpen} onClose={() => setIsPlanModalOpen(false)} setCurrentPlan={setCurrentPlan} />
    </div>
  );
}
