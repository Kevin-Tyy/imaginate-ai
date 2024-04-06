import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between pt-8 pb-5 border-b border-[black]/10">
        <div className="w-full flex gap-x-3 items-center">
          <div className="p-2 bg-white border-gradient-blue-to-gray-to-b-sm rounded-[8px] cursor-pointer hover:shadow transition duration-500">
            <Image src="/icons/book-purple.svg" alt="" width={25} height={25} className=" relative z-[1]" />
          </div>
          <span className="text-2xl text-primary-blue font-semibold">Library</span>
        </div>
      </div>
      <main className="grid grid-cols-1 xl:grid-cols-2 gap-10 mt-14">
        <Link
          href="/app/assets/library/media"
          className="border-gradient-no-shadow p-8 bg-transparent hover:bg-white rounded-[20px] transition duration-500 group">
          <Image
            src="/svgs/arrow_gradient.svg"
            alt=""
            width={60}
            height={60}
            draggable={false}
            className="absolute z-[1] top-4 right-4 opacity-0 group-hover:opacity-100 transition duration-500"
          />
          <div className="relative z-[1] flex items-center gap-5">
            <Image src="/gifs/media.gif" alt="" width={150} height={150} className=" relative z-[1]" />
            <div className="space-y-2">
              <h1 className="text-2xl uppercase font-semibold">MEDIA</h1>
              <p className="leading-loose text-primary-black/70">
                Deleted templates will be stored here, and any items in the trash will be permanently deleted after 30 days.
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="/app/assets/library/music"
          className="border-gradient-no-shadow p-8 bg-transparent hover:bg-white rounded-[20px] transition duration-500 group">
          <Image
            src="/svgs/arrow_gradient.svg"
            alt=""
            width={60}
            height={60}
            draggable={false}
            className="absolute z-[1] top-4 right-4 opacity-0 group-hover:opacity-100 transition duration-500"
          />
          <div className="relative z-[1] flex items-center gap-5">
            <Image src="/gifs/music.gif" alt="" width={150} height={150} className=" relative z-[1]" />
            <div className="space-y-2">
              <h1 className="text-2xl uppercase font-semibold">MUSIC</h1>
              <p className="leading-loose text-primary-black/70">
                Deleted templates will be stored here, and any items in the trash will be permanently deleted after 30 days.{" "}
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="/app/assets/library/fonts"
          className="border-gradient-no-shadow p-10 bg-transparent hover:bg-white rounded-[20px] transition duration-500 group">
          <Image
            src="/svgs/arrow_gradient.svg"
            alt=""
            width={60}
            height={60}
            draggable={false}
            className="absolute z-[1] top-4 right-4 opacity-0 group-hover:opacity-100 transition duration-500"
          />
          <div className="relative z-[1] flex items-center gap-5">
            <Image src="/gifs/fonts.gif" alt="" width={130} height={130} className=" relative z-[1]" />
            <div className="space-y-2">
              <h1 className="text-2xl uppercase font-semibold">FONTS</h1>
              <p className="leading-loose text-primary-black/70">
                Deleted templates will be stored here, and any items in the trash will be permanently deleted after 30 days.
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="/app/assets/library/templates"
          className="border-gradient-no-shadow p-10 bg-transparent hover:bg-white rounded-[20px] transition duration-500 group">
          <Image
            src="/svgs/arrow_gradient.svg"
            alt=""
            width={60}
            height={60}
            draggable={false}
            className="absolute z-[1] top-4 right-4 opacity-0 group-hover:opacity-100 transition duration-500"
          />
          <div className="relative z-[1] flex items-center gap-5">
            <Image src="/gifs/templates.gif" alt="" width={130} height={130} className=" relative z-[1]" />
            <div className="space-y-2">
              <h1 className="text-2xl uppercase font-semibold">TEMPLATES</h1>
              <p className="leading-loose text-primary-black/70">
                Deleted templates will be stored here, and any items in the trash will be permanently deleted after 30 days.
              </p>
            </div>
          </div>
        </Link>
      </main>
    </div>
  );
}
