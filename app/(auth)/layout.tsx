import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return <div className="bg-[#F4F3FF] text-primary-black text-[18px] h-full w-full min-h-screen">{children}</div>;
}
