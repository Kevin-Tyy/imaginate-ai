"use client";

import React, { useEffect, useState } from "react";
import { faqData } from "./data";
import { GoArrowRight } from "react-icons/go";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Collapse } from "react-collapse";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";

export default function page() {
  const [selectedGroup, setSelectedGroup] = useState("Ordering, and Support");
  const [questions, setQuestions] = useState(faqData.filter((data) => data.group === selectedGroup)[0].faqs);

  useEffect(() => {
    setQuestions(faqData.filter((data) => data.group === selectedGroup)[0].faqs);
  }, [selectedGroup]);

  const handleClick = (id: number) => {
    setQuestions((prevstate) => {
      return prevstate.map((item) => {
        return item.id === id ? { ...item, on: !item.on } : item;
      });
    });
  };
  return (
    <main className="mt-10">
      <div className="w-full flex gap-x-4 items-center">
        <div className="p-2 bg-white border-gradient-blue-to-gray-to-b-sm rounded-[8px] cursor-pointer hover:shadow transition duration-500">
          <Image src="/icons/bulb-purple.svg" alt="" width={25} height={25} className=" relative z-[1]" />
        </div>
        <span className="text-2xl text-primary-blue font-semibold">Custom Avatars FAQ</span>
      </div>
      <div className="flex flex-col lg:flex-row items-start gap-[20px] mt-10">
        <section className="bg-[#FFF] p-5 w-full lg:w-2/5 xl:max-w-[400px] rounded-[20px] border-gradient-blue-to-gray-to-b">
          <div className="relative z-[1]">
            {faqData.map((item, i) => (
              <div
                key={i}
                onClick={() => setSelectedGroup(item.group)}
                className={`text-[#929292] ${selectedGroup === item.group && "!text-primary-blue"} p-5 cursor-pointer lg:max-w-[422px] lg:ml-auto`}>
                <div className="flex justify-between">
                  <span className="uppercase pb-[10px] whitespace-nowrap transition-all duration-300">{item.group}</span>
                  <div className={`transition duration-300 ${selectedGroup === item.group && "!text-primary-blue"}`}>
                    <GoArrowRight size={20} className="mt-[5px]" />
                  </div>
                </div>
                <div className={`w-full h-[1.5px] invisible bg-primary-blue ${selectedGroup === item.group && "!visible"}`} />
              </div>
            ))}
          </div>
        </section>
        <div className="w-full max-w-[1356px] flex justify-start border-gradient-blue-to-gray-to-b rounded-[20px] bg-[#FFF]">
          <section className="w-full p-5 sm:px-12 relative z-[1]">
            {questions.map((item, index) => (
              <div
                key={index}
                className={`${
                  index === questions.length - 1 && "border-none"
                }  py-7 flex justify-between items-start gap-x-4 sm:gap-x-5 xl:gap-x-10 border-b border-[#F1F1F1]`}>
                <div>
                  <h1
                    className={clsx("font-semibold text-[22px] cursor-pointer capitalize text-[#343434]", item.on && "pb-6 border-b border-[#F1F1F1]")}
                    onClick={() => handleClick(item.id)}>
                    {item.question}
                  </h1>
                  <Collapse isOpened={item.on}>
                    <p className={`pt-7 font-normal leading-9 overflow-hidden text-primary-black/70 max-w-4xl`}>{item.answer}</p>
                  </Collapse>
                </div>
                <div onClick={() => handleClick(item.id)}>
                  <ChevronDown size={26} className={clsx("transition-all duration-500", item.on && "rotate-180")} />
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}
