"use client";

import Image from "next/image";
import React, { useState } from "react";
import BillingPlanModal from "../BillingPlanModal";
type Plan = {
  planName: string;
  planDuration: "Monthly" | "Yearly";
};

export default function Billing() {
  const [currentPlan, setCurrentPlan] = useState<Plan>({ planName: "Starter", planDuration: "Monthly" });
  const [isPlanModalOpen, setIsPlanModalOpen] = useState<boolean>(false);
  return (
    <div>
      <div className="border-b border-[#D9D9D9] pb-3 flex justify-between items-center -mt-6 pr-8">
        <h1 className="text-2xl font-semibold">Plan</h1>
        <button
          onClick={() => setIsPlanModalOpen(true)}
          type="button"
          className="bg-gradient-to-r from-primary-purple to-primary-blue px-4 py-3 flex items-center gap-x-2 text-white rounded-xl hover:scale-105 transition-all duration-300">
          <Image src="/icons/credit-card.svg" alt="" width={24} height={24} />
          Upgrade
        </button>
      </div>
      <div className="bg-white border-gradient-blue-to-gray-to-b p-8 mt-6 rounded-[20px] relative z-[1]">
        <div className="relative z-[1] space-y-7">
          <div className="flex justify-between items-center">
            <div className="space-y-3">
              <h1 className="text-2xl font-semibold">
                {currentPlan.planName} - {currentPlan.planDuration}
              </h1>
              <p className="text-primary-blue underline cursor-pointer" onClick={() => setIsPlanModalOpen(true)}>
                Change Plan.
              </p>
              <p className="text-primary-grey" onClick={() => setIsPlanModalOpen(true)}>
                To cancel your subscription, <span className="text-primary-blue underline cursor-pointer">click here.</span>
              </p>
            </div>
            <div>
              <p>Next Payment</p>
              <h1 className="text-2xl font-semibold">Jan 5 2024</h1>
            </div>
          </div>
          <button
            onClick={() => setIsPlanModalOpen(true)}
            type="button"
            className="bg-gradient-to-r from-primary-purple to-primary-blue px-4 py-4 text-white rounded-xl transition-all duration-300 w-full max-w-sm">
            Manage Billing Details
          </button>
        </div>
      </div>
      <div className="bg-white border-gradient-blue-to-gray-to-b p-8 mt-6 rounded-[20px] relative z-[2] mb-3">
        <div className="relative z-[1] space-y-7">
          <h1 className="text-2xl font-semibold">Plan</h1>

          <div className="space-y-10">
            <div className="flex gap-8">
              <div className="w-full space-y-2">
                <h1>
                  0min / <span className="text-primary-grey">10min used </span>
                </h1>
                <div className="bg-[#EAEAEA] h-[10px] w-full rounded-full relative">
                  <div className="bg-primary-blue w-[10px] h-[10px] rounded-full" />
                </div>
              </div>
              <div className="w-full space-y-2">
                <h1>
                  0 / <span className="text-primary-grey"> 3 Guest Invited </span>
                </h1>
                <div className="bg-[#EAEAEA] h-[10px] w-full rounded-full relative">
                  <div className="bg-primary-blue w-[10px] h-[10px] rounded-full" />
                </div>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="w-full space-y-2">
                <div className="flex gap-3">
                  <h1 className="font-semibold">Web Avatars</h1>
                  <button className="text-[10px] bg-gradient-to-r from-primary-purple to-primary-blue text-white rounded-full px-2">Upgrade</button>
                </div>
                <p className="text-[15px]">Create your own webcam AI avatars.</p>
              </div>
              <div className="w-full space-y-2">
                <div className="flex gap-3">
                  <h1 className="font-semibold">Studio Avatars</h1>
                  <button className="text-[10px] bg-gradient-to-r from-primary-purple to-primary-blue text-white rounded-full px-2">Upgrade</button>
                </div>
                <p className="text-[15px]">Create your high-quality custom AI Avatars.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BillingPlanModal isOpen={isPlanModalOpen} onClose={() => setIsPlanModalOpen(false)} setCurrentPlan={setCurrentPlan} />
    </div>
  );
}
