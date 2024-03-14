import { ChevronRight, Upload } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="px-6 flex flex-col h-full">
      <div className="flex justify-between pt-8 pb-5 border-b border-[black]/10">
        <div className="w-full flex gap-x-4 items-center">
          <Link
            href="/app/assets/library"
            className="flex gap-x-2 items-center filter grayscale opacity-40 hover:opacity-60 transition duration-500 cursor-pointer">
            <div className="p-2 bg-white border-gradient-blue-to-gray-to-b-sm rounded-[8px] cursor-pointer hover:shadow transition duration-500">
              <Image src="/icons/book-purple.svg" alt="" width={23} height={23} className=" relative z-[1]" />
            </div>
            <span className="text-2xl text-primary-blue font-semibold">Library</span>
          </Link>
          <ChevronRight size={25} className="filter grayscale opacity-60" />
          <div className="flex gap-x-2 items-center">
            <Image src="/icons/template-purple.svg" alt="" width={25} height={25} className=" relative z-[1]" />
            <span className="text-2xl text-primary-blue font-semibold">Template</span>
          </div>
        </div>
        <button className="border-gradient py-3 px-6 flex items-center gap-2 whitespace-nowrap">
          <Upload />
          Create New Template{" "}
        </button>
      </div>
      <main className="flex-1 h-full w-full flex justify-center items-center">
        <div className="w-full flex flex-col items-center mb-40">
          <Image src="/gifs/templates.gif" alt="" width={240} height={240} className="mix-blend-multiply m-20" />
          <div className="flex justify-between items-center w-full max-w-5xl">
            <div className="">
              <h1 className="text-3xl font-semibold capitalize">You don't have templates yet</h1>
              <p className="max-w-xl leading-loose mt-4">
                Use ... icon on your video and choose “Create template” to add custom reusable templates to your library
              </p>
            </div>
            <button className="bg-gradient-to-r from-primary-purple to-primary-blue px-6 py-4 text-white rounded-xl hover:scale-105 transition-all duration-300">
              Create Template{" "}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
