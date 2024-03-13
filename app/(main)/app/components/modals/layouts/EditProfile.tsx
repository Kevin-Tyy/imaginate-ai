"use client";

import React, { useState } from "react";
import { BiPencil } from "react-icons/bi";
import { TfiMusicAlt } from "react-icons/tfi";
import ChangePassword from "../ChangePassword";

export default function EditProfile() {
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
    <div>
      <form className="space-y-8">
        <div className="max-w-fit space-y-4">
          <h1 className="font-semibold text-xl pb-4">PROFILE IMAGE</h1>
          <label htmlFor="profileImage" className="relative group w-24 h-24 rounded-lg overflow-hidden">
            <div className="w-24 h-24">
              {previewImage ? (
                <img src={previewImage} className="h-24 w-24 object-cover rounded-lg" />
              ) : (
                <div className="h-24 w-24 flex items-center justify-center text-5xl bg-primary-blue text-white rounded-lg">S</div>
              )}
            </div>
            <div className="w-24 h-24 rounded-lg absolute inset-0 bg-black opacity-0 group-hover:bg-black/50 group-hover:opacity-100 z-10 flex flex-col items-center justify-center text-white cursor-pointer transition">
              <BiPencil size={35} />
            </div>
          </label>
          <input type="file" id="profileImage" accept="image/*" className="hidden" onChange={handleImageUpload} />
        </div>
        <div className="w-full space-y-2">
          <label htmlFor="email" className="font-semibold">
            Email Address
          </label>
          <input
            id="email"
            className="block h-[56px] placeholder:text-[#8F9BBA] outline-none bg-[#F5F5F7] px-4 w-full max-w-xl rounded-xl"
            placeholder="Enter email address"
          />
        </div>
        <div className="w-full flex gap-6">
          <div className="w-full space-y-2">
            <label htmlFor="first-name" className="font-semibold">
              First Name
            </label>
            <input
              id="first-name"
              className="block h-[56px] placeholder:text-[#8F9BBA] outline-none bg-[#F5F5F7] px-4 w-full max-w-xl rounded-xl"
              placeholder="Enter first name"
            />
          </div>
          <div className="w-full space-y-2">
            <label htmlFor="last-name" className="font-semibold">
              Last Name
            </label>
            <input
              id="last-name"
              className="block h-[56px] placeholder:text-[#8F9BBA] outline-none bg-[#F5F5F7] px-4 w-full max-w-xl rounded-xl"
              placeholder="Enter last name"
            />
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-xl border-b border-[#D9D9D9] pb-5">Password and Authentication</h1>
          <button
            type="button"
            onClick={() => setIsPasswordModalOpen(true)}
            className="bg-gradient-to-r from-primary-purple to-primary-blue px-6 py-4 text-white rounded-xl hover:scale-105 transition-all duration-300 mt-6">
            Change Password
          </button>
        </div>
      </form>
      <ChangePassword isOpen={isPasswordModalOpen} onClose={() => setIsPasswordModalOpen(false)} />
    </div>
  );
}
