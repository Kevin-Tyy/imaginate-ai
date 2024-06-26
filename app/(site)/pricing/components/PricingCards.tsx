import Image from "next/image";
import React from "react";

export default function PricingCards() {
  return (
    <div className="bg-white/50 rounded-[44.103px] flex w-full max-w-[1360px] mt-20 mx-auto px-4">
      <div className="w-full flex flex-col items-center gap-10">
        <div className="w-full h-full flex flex-col md:flex-row gap-10 xl:gap-20 px-10 xl:pl-20">
          <div className="min-h-[650px] xl:min-h-[520px] w-full py-[64px] flex flex-col justify-between">
            <div className="space-y-8">
              <h1 className="text-5xl text-primary-black font-semibold">
                $19 <span className="text-lg text-primary-grey">/month</span>
              </h1>
              <h2 className="text-2xl font-semibold text-primary-black">Starter</h2>
              <p className="text-primary-grey leading-relaxed">Unleash the power of automation.</p>
              <ul className="space-y-4">
                <li className="flex gap-2 items-center">
                  <Image src="/icons/check-circle.svg" alt="check" width={24} height={24} />
                  <span>Lorem ipsum dolor sit amet</span>
                </li>
                <li className="flex gap-2 items-center">
                  <Image src="/icons/check-circle.svg" alt="check" width={24} height={24} />
                  <span>Lorem ipsum dolor sit amet</span>
                </li>
                <li className="flex gap-2 items-center">
                  <Image src="/icons/check-circle.svg" alt="check" width={24} height={24} />
                  <span>Lorem ipsum dolor sit amet</span>
                </li>
              </ul>
            </div>
            <button className="w-full bg-primary-blue text-white p-4 rounded-xl hover:scale-105 transition duration-300">Choose plan</button>
          </div>
          <div className="min-h-[650px] xl:min-h-[520px] w-full py-[64px] flex flex-col justify-between">
            <div className="space-y-8">
              <h1 className="text-5xl text-primary-black font-semibold">
                $54 <span className="text-lg text-primary-grey">/month</span>
              </h1>
              <h2 className="text-2xl font-semibold text-primary-black">Professional</h2>
              <p className="text-primary-grey leading-relaxed">Advanced tools to take your work to the next level.</p>
              <ul className="space-y-4">
                <li className="flex gap-2 items-center">
                  <Image src="/icons/check-circle.svg" alt="check" width={24} height={24} />
                  <span>Lorem ipsum dolor sit amet</span>
                </li>
                <li className="flex gap-2 items-center">
                  <Image src="/icons/check-circle.svg" alt="check" width={24} height={24} />
                  <span>Lorem ipsum dolor sit amet</span>
                </li>
                <li className="flex gap-2 items-center">
                  <Image src="/icons/check-circle.svg" alt="check" width={24} height={24} />
                  <span>Lorem ipsum dolor sit amet</span>
                </li>
              </ul>
            </div>
            <button className="w-full bg-primary-blue text-white p-4 rounded-xl hover:scale-105 transition duration-300">Choose plan</button>
          </div>
          <div className="hidden xl:block bg-gradient-to-b from-primary-purple to-primary-blue text-white px-10 py-10 rounded-[44.103px] w-full shadow-card -translate-y-[32px]">
            <div className="min-h-[520px] w-full flex flex-col justify-between">
              <div className="space-y-8">
                <div className="flex justify-end">
                  <div className="bg-white px-6 py-2 max-w-fit rounded-full">
                    <span className="text-primary-purple">Most Popular</span>
                  </div>
                </div>
                <h1 className="text-5xl font-semibold">
                  $89 <span className="text-lg">/month</span>
                </h1>
                <h2 className="text-2xl font-semibold">Company</h2>
                <p className="">Automation plus enterprise-grade features.</p>
                <ul className="space-y-4">
                  <li className="flex gap-2 items-center">
                    <Image src="/icons/check-circle-2.svg" alt="check" width={24} height={24} />
                    <span>Lorem ipsum dolor sit amet</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Image src="/icons/check-circle-2.svg" alt="check" width={24} height={24} />
                    <span>Lorem ipsum dolor sit amet</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Image src="/icons/check-circle-2.svg" alt="check" width={24} height={24} />
                    <span>Lorem ipsum dolor sit amet</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Image src="/icons/check-circle-2.svg" alt="check" width={24} height={24} />
                    <span>Lorem ipsum dolor sit amet</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Image src="/icons/check-circle-2.svg" alt="check" width={24} height={24} />
                    <span>Lorem ipsum dolor sit amet</span>
                  </li>
                </ul>
              </div>
            </div>
            <button className="w-full text-primary-blue bg-white p-4 rounded-xl hover:scale-105 transition duration-300">Choose plan</button>
          </div>
        </div>
        <div className="block xl:hidden md:max-w-[500px] bg-gradient-to-b from-primary-purple to-primary-blue text-white px-10 py-10 rounded-[44.103px] w-full shadow-card -translate-y-[32px]">
          <div className="min-h-[580px] w-full flex flex-col justify-between">
            <div className="space-y-8">
              <div className="flex justify-end">
                <div className="bg-white px-6 py-2 max-w-fit rounded-full">
                  <span className="text-primary-purple">Most Popular</span>
                </div>
              </div>
              <h1 className="text-5xl font-semibold">
                $89 <span className="text-lg">/month</span>
              </h1>
              <h2 className="text-2xl font-semibold">Company</h2>
              <p className="">Automation plus enterprise-grade features.</p>
              <ul className="space-y-4">
                <li className="flex gap-2 items-center">
                  <Image src="/icons/check-circle-2.svg" alt="check" width={24} height={24} />
                  <span>Lorem ipsum dolor sit amet</span>
                </li>
                <li className="flex gap-2 items-center">
                  <Image src="/icons/check-circle-2.svg" alt="check" width={24} height={24} />
                  <span>Lorem ipsum dolor sit amet</span>
                </li>
                <li className="flex gap-2 items-center">
                  <Image src="/icons/check-circle-2.svg" alt="check" width={24} height={24} />
                  <span>Lorem ipsum dolor sit amet</span>
                </li>
                <li className="flex gap-2 items-center">
                  <Image src="/icons/check-circle-2.svg" alt="check" width={24} height={24} />
                  <span>Lorem ipsum dolor sit amet</span>
                </li>
                <li className="flex gap-2 items-center">
                  <Image src="/icons/check-circle-2.svg" alt="check" width={24} height={24} />
                  <span>Lorem ipsum dolor sit amet</span>
                </li>
              </ul>
            </div>
          </div>
          <button className="w-full text-primary-blue bg-white p-4 rounded-xl hover:scale-105 transition duration-300">Choose plan</button>
        </div>
      </div>
    </div>
  );
}
