import Image from "next/image";
import React from "react";
import PricingCards from "./components/PricingCards";

export default function page() {
  return (
    <main className="">
      <div className="h-screen absolute w-full">
        <div className="w-[450px] h-[200px] rounded-full absolute top-0 right-0 bg-gradient-to-r from-[#4E31FF] to-[#3669EC00] blur-[200px]" />
        <div className="w-[450px] h-[200px] rounded-full absolute top-1/2 left-20 bg-gradient-to-r from-[#4E31FF] to-[#3669EC] blur-[200px]" />
        <div className="mix-blend-lighten">
          <Image src="/backgrounds/homepage-hero.svg" alt="" width={2920} height={1900} className="absolute w-full min-w-screen h-full inset-0 object-cover" />
        </div>
      </div>
      <section className="py-20 relative z-[1]">
        <div className="h-[45vh] flex flex-col items-center justify-center space-y-8">
          <h2 className="text-xl font-semibold">
            <span className="bg-gradient-to-r from-[#CE4FFF] to-[#5934FF] text-transparent bg-clip-text">AI Pricing Plans</span> <span>🔥</span>
          </h2>
          <h1 className="text-5xl font-bold max-w-4xl capitalize leading-normal text-center text-[#191D39] !mt-4">
            Here’s a recap of what you are getting access to today{" "}
          </h1>
        </div>
        <PricingCards />
      </section>
    </main>
  );
}
