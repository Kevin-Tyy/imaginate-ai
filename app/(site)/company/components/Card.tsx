"use client";

import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { Collapse } from "react-collapse";
import { PiMinus, PiPlus } from "react-icons/pi";
interface Props {
  index: number;
  toggle: (index: number) => void;
  expanded: boolean;
  title: string;
  description: string;
}
export default function Card({ index, toggle, expanded, title, description }: Props) {
  return (
    <div key={index} className="bg-gradient-to-b text-primary-[#170F49] bg-white rounded-3xl p-10 max-h-fit shadow-xl shadow-[#838383]/10">
      <div onClick={() => toggle(index)} className={`flex justify-between items-center cursor-pointer p-3 gap-3 `}>
        <h1 className="text-xl font-semibold">{title}</h1>
        <div
          className={clsx(
            `bg-[#F7F7FF] p-3 rounded-xl transition duration-300 w-full max-w-fit`,
            expanded && "bg-gradient-to-b from-primary-purple to-primary-blue "
          )}>
          {expanded ? (
            <PiMinus size={25} className="text-white transition duration-300" />
          ) : (
            <PiPlus size={25} className="text-[#6F6C90] transition duration-300" />
          )}
        </div>
      </div>
      <Collapse isOpened={expanded}>
        <div className="p-4 text-primary-grey leading-loose">{description}</div>
      </Collapse>
    </div>
  );
}
