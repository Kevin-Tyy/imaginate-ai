import React from "react";
import Navmenu from "./components/Navmenu";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navmenu />
      {children}
    </div>
  );
}
