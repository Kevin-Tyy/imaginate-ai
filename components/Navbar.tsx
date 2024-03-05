"use client";
import React, { useState } from "react";
import Logo from "./shared/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileSidebar from "./MobileSidebar";

export default function Navbar() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);
  const navLinks = [
    {
      href: "#products",
      label: "Products",
    },
    {
      href: "#Use Cases",
      label: "Use Cases",
    },
    {
      href: "/pricing",
      label: "Pricing",
    },
    {
      href: "#Resources",
      label: "Resources",
    },
    {
      href: "/company",
      label: "Company",
    },
    {
      href: "#faq",
      label: "FAQ",
    },
  ];
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
                {navLinks.map((link, index) => (
                  <Link href={link.href} key={index}>
                    <div
                      className={`flex flex-col gap-[10px] items-center cursor-pointer ${
                        pathname === link.href && "text-transparent bg-gradient-to-r from-primary-purple to-primary-blue bg-clip-text font-semibold"
                      }`}>
                      <h1 className="whitespace-nowrap">{link.label}</h1>
                      <div
                        className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary-purple to-primary-blue absolute mt-8 transition duration-300 ${
                          pathname === link.href ? "visible" : "invisible"
                        }`}
                      />
                    </div>
                  </Link>
                ))}
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
