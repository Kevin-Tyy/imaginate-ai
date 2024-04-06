import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Modal from "@/components/Modal";
import { QuestionMark } from "@/components/svgs";
import Image from "next/image";
import React from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};
const TooltipContentComponent = () => (
  <div className="w-[500px] p-8 font-normal text-base space-y-8">
    <div className="space-y-5">
      <h1 className="text-primary-blue text-2xl font-semibold">Tips for generating video with AI</h1>
      <div className="bg-primary-blue p-5 text-white rounded-3xl leading-normal">Your prompt is processed through a third- party service by OpenAI</div>
    </div>
    <div className="space-y-5">
      <h1 className="text-primary-black text-2xl font-semibold">Get a good draft ready</h1>
      <p className="text-primary-grey">We recommend you watch this 1-minute video on how to use the video assistant to achieve a good first draft.</p>
      <Image src="/videos/dummy-video.png" alt="" width={500} height={400} />
    </div>
    <button className="border border-[#C3C3C3] py-3.5 w-full rounded-xl !mt-14 font-semibold text-primary-neutral">Learn More</button>
  </div>
);

const TooltipComponent = () => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild className="cursor-pointer">
        <div>
          <QuestionMark />
        </div>
      </TooltipTrigger>
      <TooltipContent className="border-gradient-blue-to-gray-to-b rounded-[22px] p-0">
        <div className="text-primary-black">{<TooltipContentComponent />}</div>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default function GenerateVideoWithAiModal({ isOpen, onClose }: Props) {
  return (
    <Modal onClose={onClose} isOpen={isOpen} fullWidth>
      <div className="relative w-full space-y-6">
        <div className="sticky top-0 w-full h-24 z-20 px-10 bg-white border-b border-primary-grey/10">
          <h1 className="text-2xl font-semibold absolute top-8 z-[2] flex gap-x-3 capitalize items-center">
            Generate video with AI
            <TooltipComponent />
          </h1>
        </div>
        <main className="h-full flex px-10">
          <div className="w-full max-w-[426px] space-y-4">
            <div className="w-full space-y-3">
              <label htmlFor="topic" className="flex items-center font-semibold gap-x-3">
                <span className="space-x-2">
                  Topic <span className="text-[#F93939]">*</span>
                </span>
                <QuestionMark className="text-primary-grey w-6" />
              </label>
              <textarea
                placeholder="Introduction to financial well-being"
                className="border border-[#DEDEDE] bg-[#F5F5F5] resize-none h-[160px] w-full rounded-xl outline-none focus:border-primary-grey transition-all p-4"></textarea>
            </div>
            <div className="w-full space-y-3">
              <label htmlFor="topic" className="flex items-center font-semibold gap-x-3">
                <span className="space-x-2">
                  Audience <span className="text-[#F93939]">*</span>
                </span>
                <QuestionMark className="text-primary-grey w-6" />
              </label>
              <textarea
                placeholder="Employees of a successful startup"
                className="border border-[#DEDEDE] bg-[#F5F5F5] resize-none h-[160px] w-full rounded-xl outline-none focus:border-primary-grey transition-all p-4"></textarea>
            </div>
            <button className="border border-[#C3C3C3] py-3.5 w-full rounded-xl">Add more</button>
            <button className="bg-gradient-to-br from-primary-purple to-primary-blue text-white py-3.5 w-full rounded-xl">Generate Again</button>
          </div>
          <div className="w-full h-full grid place-content-center">
            <div className="flex flex-col justify-center items-center mb-40">
              <Image src="/gifs/empty-coin.gif" alt="" width={400} height={400} className="mix-blend-multiply" />
              <h1 className="text-3xl text-center font-semibold">There is no content present.</h1>
              <p className="max-w-xl leading-loose text-center mt-4">
                Deleted templates will be stored here, and any items in the trash will be permanently deleted after 30 days.
              </p>
            </div>
          </div>
        </main>
      </div>
    </Modal>
  );
}
