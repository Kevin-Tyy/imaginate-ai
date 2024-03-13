import DateTime from "@/components/DateTime";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowUp } from "react-icons/hi";
import ProfileButton from "../components/ProfileButton";

export default function page() {
  return (
    <div className="h-full flex flex-col justify-between space-y-20">
      <nav className="flex items-center justify-between pt-6 px-6">
        <div />
        <div className="w-full flex justify-center">
          <DateTime />
        </div>
        <div className="bg-white rounded-full flex items-center gap-5 p-2 pl-3 cursor-pointer transition-all duration-500 hover:shadow-md">
          <div className="p-2 hover:bg-primary-grey/10 rounded-full transition duration-500">
            <Image src="/icons/notifications_none.svg" alt="" width={30} height={30} />
          </div>
          <ProfileButton />
        </div>
      </nav>
      <main className="w-full flex flex-col lg:flex-row gap-10 max-w-[1680px] mx-auto">
        <div className="relative w-full p-6 rounded-[40px] bg-white hover:shadow-2xl transition-all duration-700">
          <div className="bg-gradient-to-br from-[#9063bb] to-[#736BFF] rounded-full p-6 max-w-fit border-[6px] border-white absolute right-2 top-2 z-[2]">
            <HiArrowUp size={54} className="rotate-[45deg] text-white" />
          </div>
          <Image src="/backgrounds/card_ai_text_to_video.png" alt="" width={600} height={300} className="w-full max-h-[200px]" />
          <div className="flex flex-col items-center relative">
            <div className="bg-gradient-to-b from-white to-primary-purple p-1 rounded-full max-w-fit absolute -top-16">
              <div className="bg-white p-1 rounded-full max-w-fit">
                <Image src="/gifs/video_message.gif" alt="" width={100} height={100} className="w-full min-h-[100px] min-w-[100px] max-h-[100px] max-w-fit" />
              </div>
            </div>
            <div className="space-y-6 flex flex-col items-center mt-[72px]">
              <h1 className="text-3xl font-bold uppercase text-center">AI Text to VIDEO</h1>
              <p className="text-primary-grey leading-loose text-center max-w-2xl">
                Lorem ipsum dolor sit amet consectetur. Nullam ullamcorper urna nunc tristique. Mi id nisl nulla montes. Phasellus diam risus fringilla
                consectetur enim varius. Metus lectus leo dolor.
              </p>
              <Link href="#" className="mx-auto max-w-fit">
                <button className="text-lg bg-gradient-to-r from-primary-blue to-primary-purple text-white rounded-2xl px-8 py-4 max-w-fit mx-auto hover:scale-110 transition duration-300">
                  Get into Videos World
                </button>
              </Link>
            </div>
            <div className="w-full max-w-2xl mx-auto flex justify-between my-10">
              <div className="flex flex-col items-center">
                <h1 className="text-4xl font-semibold">5K</h1>
                <p className="text-primary-grey">Avatar</p>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-4xl font-semibold">3500</h1>
                <p className="text-primary-grey">Videos Generated</p>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-4xl font-semibold">10K</h1>
                <p className="text-primary-grey">Visitors</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full p-6 rounded-[40px] bg-white hover:shadow-2xl transition-all duration-700">
          <Image src="/svgs/arrow_gradient.svg" alt="" width={100} height={100} draggable={false} className="absolute z-[1] top-4 right-4" />
          <Image src="/backgrounds/card_product_photo.png" alt="" width={600} height={300} className="w-full max-h-[200px]" />
          <div className="flex flex-col items-center relative">
            <div className="bg-gradient-to-b from-white to-primary-purple p-1 rounded-full max-w-fit absolute -top-16">
              <div className="bg-white p-1 rounded-full max-w-fit">
                <Image
                  src="/gifs/image_generation_process.gif"
                  alt=""
                  width={100}
                  height={100}
                  className="w-full min-h-[100px] min-w-[100px] max-h-[100px] max-w-fit"
                />
              </div>
            </div>
            <div className="space-y-6 flex flex-col items-center mt-[72px]">
              <h1 className="text-3xl font-bold uppercase text-center">AI Product Photo Editing</h1>
              <p className="text-primary-grey leading-loose text-center max-w-2xl">
                Lorem ipsum dolor sit amet consectetur. Nullam ullamcorper urna nunc tristique. Mi id nisl nulla montes. Phasellus diam risus fringilla
                consectetur enim varius. Metus lectus leo dolor.
              </p>
              <Link href="#">
                <button className="py-4 px-8 outline-none bg-transparent border-gradient text-[#5A34FF] rounded-xl hover:scale-110 transition duration-500">
                  <span className="bg-gradient-to-r from-[#CE4FFF] to-[#5A34FF] bg-clip-text text-transparent">Get into AI Product World</span>
                </button>
              </Link>
            </div>
            <div className="w-full max-w-xl mx-auto flex justify-between mt-10 mb-12">
              <div className="flex flex-col items-center">
                <h1 className="text-4xl font-semibold">300</h1>
                <p className="text-primary-grey">Templates</p>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-4xl font-semibold">1800</h1>
                <p className="text-primary-grey">Photos Generated</p>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-4xl font-semibold">6K</h1>
                <p className="text-primary-grey">Visitors</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-ful flex justify-center p-6">
        <p className="text-center">© 2023 Company. All Rights Reserved. Made with love by Webbuddy!</p>
      </footer>
    </div>
  );
}
