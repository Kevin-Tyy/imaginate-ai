import React from "react";
import Navmenu from "../components/Navmenu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-full w-full">
      <Navmenu />
      <div className="flex-1 h-full">{children}</div>
    </div>
  );
}
