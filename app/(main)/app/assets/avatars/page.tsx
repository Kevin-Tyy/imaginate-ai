import { Plus } from "lucide-react";
import Image from "next/image";

export default function page() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col md:flex-row gap-4 justify-between pt-8 pb-5 border-b border-[black]/10">
        <div className="w-full flex gap-x-4 items-center">
          <div className="p-2 bg-white border-gradient-blue-to-gray-to-b-sm rounded-[8px] cursor-pointer hover:shadow transition duration-500">
            <Image src="/svgs/user-circle.svg" alt="" width={23} height={23} className=" relative z-[1]" />
          </div>
          <span className="text-2xl text-primary-blue font-semibold">Avatars</span>
        </div>
        <button className="max-w-fit self-end border-gradient py-3 px-6 flex items-center gap-2 whitespace-nowrap">
          <Plus />
          Create Avatar
        </button>
      </div>
    </div>
  );
}
