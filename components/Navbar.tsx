"use client";
import React, { useState } from "react";
import Logo from "./shared/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileSidebar from "./MobileSidebar";

export default function Navbar() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <header className="absolute top-0 w-full px-4 md:px-16 py-4 z-[5]">
      <div className="max-w-[1560px] mx-auto">
        <nav className="w-full flex items-center justify-between">
          <Logo />
          <div className="w-10 grid place-content-center ml-6 md:hidden">
            <div
              className="flex flex-col items-end justify-center rounded-md transition duration-100 p-2 space-y-[7px] cursor-pointer group"
              onClick={() => setIsExpanded(true)}>
              <span
                className={`w-5 relative h-[2px] bg-[#8E93A4] block transition rounded-full duration-[.3s] ${
                  isExpanded && "rotate-[135deg] translate-y-[9px] w-5"
                }`}></span>
              <span
                className={`w-4 relative h-[2px] bg-[#8E93A4] transition  rounded-full duration-[.1s] opacity-100 ${
                  isExpanded && "opacity-0 invisible"
                } `}></span>
              <span
                className={`w-5 relative h-[2px] bg-[#8E93A4] rounded-full transition duration-[.3s] ${
                  isExpanded && "-rotate-[135deg] -translate-y-[9px] w-5"
                }`}></span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-x-12">
            <div className="">
              <ul className="text-[#636369] flex gap-x-10">
                <li>
                  <Link href="#products">Features</Link>
                </li>
                <li>
                  <Link href="#products">Use Cases</Link>
                </li>
                <li>
                  <Link href="#products">Pricing</Link>
                </li>
                <li>
                  <Link href="#testimonials">Resources</Link>
                </li>
                <li>
                  <Link href="#faq">Company</Link>
                </li>
              </ul>
            </div>
            <div className="flex gap-x-5">
              <div className="flex gap-x-4">
                <Link href="/login">
                  <button className="ring-1 ring-inset ring-[#4D4D77] py-3 px-8 rounded-xl">Log in</button>
                </Link>
                <Link href="/signup">
                  <button className="bg-gradient-to-r from-[#c04cff] to-[#6035ff] text-white py-3 px-8 rounded-xl">Sign up</button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <MobileSidebar onClose={() => setIsExpanded(false)} isOpen={isExpanded} />
    </header>
  );
}
