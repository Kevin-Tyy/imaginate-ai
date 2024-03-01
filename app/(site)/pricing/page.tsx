import Image from "next/image";
import React from "react";

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
        <div className="h-[50vh] flex flex-col items-center justify-center space-y-8">
          <h2 className="text-xl font-semibold">
            <span className="bg-gradient-to-r from-[#CE4FFF] to-[#5934FF] text-transparent bg-clip-text">Use Cases</span> <span>🔥</span>
          </h2>
          <h1 className="text-5xl font-bold max-w-4xl capitalize leading-normal text-center text-[#191D39] !mt-4">
            For teams who create training videos at scale
          </h1>
        </div>
        <div className="bg-white/50 rounded-[44.103px] flex w-full max-w-[1360px] mx-auto">
          <div className="w-full flex gap-20 pl-20">
            <div className="min-h-[520px] w-full py-[64px] flex flex-col justify-between">
              <div className="space-y-8">
                <h1 className="text-5xl text-primary-black font-semibold">
                  $19 <span className="text-lg text-primary-grey">/month</span>
                </h1>
                <h2 className="text-2xl font-semibold text-primary-black">Starter</h2>
                <p className="text-primary-grey">Unleash the power of automation.</p>
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
              <button className="w-full bg-primary-blue text-white p-4 rounded-xl">Choose plan</button>
            </div>
            <div className="min-h-[520px] w-full py-[64px] flex flex-col justify-between">
              <div className="space-y-8">
                <h1 className="text-5xl text-primary-black font-semibold">
                  $54 <span className="text-lg text-primary-grey">/month</span>
                </h1>
                <h2 className="text-2xl font-semibold text-primary-black">Professional</h2>
                <p className="text-primary-grey">Advanced tools to take your work to the next level.</p>
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
              <button className="w-full bg-primary-blue text-white p-4 rounded-xl">Choose plan</button>
            </div>
            <div className="bg-gradient-to-b from-primary-purple to-primary-blue text-white px-10 py-10 rounded-[44.103px] w-full shadow-2xl shadow-[#5243c28e] -translate-y-[32px]">
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
              <button className="w-full text-primary-blue bg-white p-4 rounded-xl">Choose plan</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
