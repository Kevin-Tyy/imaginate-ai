"use client";

import { Switch } from "@/components/ui/switch";
import React, { useState } from "react";
import { BiPencil } from "react-icons/bi";

export default function General() {
  const [previewImage, setPreviewImage] = useState<any>(null);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState<boolean>(false);

  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const result = reader.result;
      setPreviewImage(result);
    };
  };

  return (
    <form>
      <div>
        <h1 className="text-2xl font-semibold border-b border-[#D9D9D9] pb-4">Name & Icon</h1>
        <div className="max-w-fit space-y-6 mt-6">
          <h1 className="font-semibold text-lg pb-4">Workspace icon</h1>
          <label htmlFor="profileImage" className="relative group w-20 h-20 rounded-xl overflow-hidden">
            <div className="w-20 h-20">
              {previewImage ? (
                <img src={previewImage} className="h-20 w-20 object-cover rounded-xl" />
              ) : (
                <div className="h-20 w-20 flex items-center justify-center text-5xl bg-primary-blue text-white rounded-xl">S</div>
              )}
            </div>
            <div className="w-20 h-20 rounded-xl absolute inset-0 bg-black opacity-0 group-hover:bg-black/50 group-hover:opacity-100 z-10 flex flex-col items-center justify-center text-white cursor-pointer transition">
              <BiPencil size={35} />
            </div>
          </label>
          <input type="file" id="profileImage" accept="image/*" className="hidden" onChange={handleImageUpload} />
        </div>
        <div className="w-full space-y-2 mt-6">
          <label htmlFor="workspace_name" className="font-semibold">
            Workspace name
          </label>
          <input
            id="workspace_name"
            className="block h-[56px] placeholder:text-[#8F9BBA] outline-none bg-[#F5F5F7] px-4 w-full max-w-xl rounded-xl focus:ring-1 focus:ring-[#8F9BBA]/50 transition duration-500"
            placeholder="Workspace"
          />
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-2xl font-semibold border-b border-[#D9D9D9] pb-4">Feature Settings</h1>
        <div className="border-gradient-blue-to-gray p-6 mt-6">
          <div className="relative z-[1] flex justify-between items-center">
            <div className="space-y-3">
              <h1 className="text-xl font-semibold">Email Notifications</h1>
              <p className="text-primary-grey">Receive comment and video notifications.</p>
            </div>
            <Switch id="airplane-mode" />
          </div>
        </div>
        <div className="border-gradient-blue-to-gray p-6 mt-6">
          <div className="relative z-[1] flex justify-between items-center">
            <div className="space-y-3">
              <h1 className="text-xl font-semibold">Updates</h1>
              <p className="text-primary-grey leading-loose">
                Receive notifications about updates to our platform. We will only send these occasionally and you may unsubscribe at any time.
              </p>
            </div>
            <Switch id="airplane-mode" />
          </div>
        </div>
      </div>
    </form>
  );
}
