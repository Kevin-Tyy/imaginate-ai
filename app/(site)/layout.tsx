import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <div className="bg-[#F4F3FF] text-primary-black text-[17px]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
