import React from "react";
import Navmenu from "../components/Navmenu";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-full w-full">
      <Navmenu />
      <div className="flex-1 w-full h-full pb-10 flex flex-col justify-start relative">{children}</div>
    </div>
  );
}
