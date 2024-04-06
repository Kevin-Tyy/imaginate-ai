import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
export default function SwiperButtons() {
  return (
    <div className="flex justify-end gap-5 relative">
      <button className="button-prev-slide rounded-full p-2 hover:bg-primary-grey/10 transition-all duration-300 ">
        <ChevronLeft size={24} />
      </button>
      <button className="button-next-slide rounded-full p-2 hover:bg-primary-grey/10 transition-all duration-300 ">
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
