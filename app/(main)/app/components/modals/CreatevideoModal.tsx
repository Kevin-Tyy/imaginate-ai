"use client";
import Modal from "@/components/Modal";
import { GenerateAi, Ppt, VideoMedia } from "@/components/svgs";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { TbTemplate } from "react-icons/tb";
import { ai_video_templates } from "../../videos/components/constants/templates";
import VideoCard from "../../videos/components/VideoCard";
import PptModal from "./PptModal";
import GenerateVideoWithAiModal from "./GenerateVideoWithAiModal";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CreateVideoModal = ({ isOpen, onClose }: Props) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [selectedOrientationIndex, setSelectedOrientationIndex] = useState(0);

  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const [orientUnderlineLeft, setOrientUnderlineLeft] = useState(0);

  const tabs = [
    { icon: null, title: "Company Name" },
    { icon: null, title: "Library" },
  ];
  const orientations = ["All", "Landscape", "Portrait", "Square"];
  const [isPptModalOpen, setIsPptModalOpen] = useState(false);
  const [isGenerateVideoWithAI, setGenerateVideoWithAI] = useState(false);

  return (
    <Modal onClose={onClose} isOpen={isOpen} fullWidth={true}>
      <div className="relative w-full space-y-6">
        <div className="sticky top-0 w-full h-24 z-20 px-10 bg-white border-b border-primary-grey/10">
          <h1 className="text-2xl font-semibold absolute top-8 z-[2]">Create a new video</h1>
        </div>

        <main className="px-10 pb-10 space-y-6 mx-auto relative w-full">
          <div className="flex gap-8 w-full !mt-1 relative z-[1]">
            <div className="w-full hover-card flex items-center justify-between transition duration-500 ring-1 ring-[#E7E7E7] p-6 rounded-2xl cursor-pointer group">
              <div className="space-y-3">
                <h1 className="text-[18px] font-semibold">Blank Video</h1>
                <p className="text-primary-neutral">Start from scratch with a blank canvas</p>
              </div>
              <VideoMedia className="text-primary-neutral group-hover:text-primary-blue transition duration-300" />
            </div>
            <div
              onClick={() => setGenerateVideoWithAI(true)}
              className="w-full hover-card flex items-center justify-between transition duration-500 ring-1 ring-[#E7E7E7] p-6 rounded-2xl cursor-pointer group">
              <div className="space-y-3">
                <h1 className="text-[18px] font-semibold">Generate Video with AI</h1>
                <p className="text-primary-neutral">Create your video with AI</p>
              </div>
              <GenerateAi className="text-primary-neutral group-hover:text-primary-blue transition duration-300" />
            </div>
            <div
              onClick={() => setIsPptModalOpen(true)}
              className="w-full hover-card flex items-center justify-between transition duration-500 ring-1 ring-[#E7E7E7] p-6 rounded-2xl cursor-pointer group">
              <div className="space-y-3">
                <h1 className="text-[18px] font-semibold">Import Power Point</h1>
                <p className="text-primary-neutral">Convert slides to scene backgrounds</p>
              </div>
              <Ppt className="text-primary-neutral group-hover:text-primary-blue transition duration-500" />
            </div>
          </div>
          <section className="flex justify-between py-4 border-b border-[black]/10">
            <div className="w-full flex gap-x-4 items-center">
              <div className="flex gap-x-4 items-center">
                <div className="p-2 bg-white border-gradient-blue-to-gray-to-b-sm rounded-[8px] cursor-pointer hover:shadow transition duration-500">
                  <TbTemplate size={26} className="text-primary-blue" />{" "}
                </div>
                <span className="text-primary-blue font-semibold text-xl">Use Template</span>
                <ChevronRight size={25} className="filter grayscale opacity-60" />
              </div>
              <div className="border border-[#DBDBDB] bg-white p-1 rounded-xl">
                <div className="flex relative">
                  {tabs.map(({ icon, title }, index) => (
                    <div
                      key={index}
                      className={`w-[160px] h-[45px] flex gap-x-2 justify-center items-center relative cursor-pointer z-[1] transition-all duration-500 ${
                        selectedTabIndex === index ? "!text-white" : "!text-primary-grey"
                      }`}
                      onClick={() => {
                        const totalTabs = tabs.length;
                        const percentage = (index / totalTabs) * 100;
                        setSelectedTabIndex(index);
                        setTabUnderlineLeft(percentage);
                      }}>
                      {icon}
                      {title}
                    </div>
                  ))}
                  <div
                    className="absolute bottom-0 w-[160px] h-[45px] bg-primary-blue custom-transition rounded-lg"
                    style={{ left: `calc(${tabUnderlineLeft}%)` }}></div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="border border-[#DBDBDB] bg-white p-1 rounded-xl">
                <div className="flex relative">
                  {orientations.map((item, index) => (
                    <div
                      key={index}
                      className={`w-[120px] h-[45px] flex gap-x-2 justify-center items-center relative cursor-pointer z-[1] transition-all duration-500 ${
                        selectedOrientationIndex === index ? "!text-white" : "!text-primary-grey"
                      }`}
                      onClick={() => {
                        const totalTabs = tabs.length;
                        const percentage = (index / totalTabs) * 100;
                        setSelectedOrientationIndex(index);
                        setOrientUnderlineLeft(percentage);
                      }}>
                      {item}
                    </div>
                  ))}

                  <div
                    className="absolute bottom-0 w-[120px] h-[45px] bg-primary-blue custom-transition rounded-lg"
                    style={{ left: `calc(${orientUnderlineLeft}% - ${orientUnderlineLeft / 2}%)` }}></div>
                </div>
              </div>
            </div>
          </section>
          <section className="grid grid-cols-5 gap-6">
            {ai_video_templates.map((data, i: number) => (
              <VideoCard {...data} />
            ))}
          </section>
        </main>
      </div>
      <PptModal isOpen={isPptModalOpen} onClose={() => setIsPptModalOpen(false)} />
      <GenerateVideoWithAiModal isOpen={isGenerateVideoWithAI} onClose={() => setGenerateVideoWithAI(false)} />
    </Modal>
  );
};

export default CreateVideoModal;
