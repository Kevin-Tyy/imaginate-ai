import Modal from "@/components/Modal";
import React, { FC } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
const ChangePassword: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-[684px]">
      <div className="w-full px-10 py-16 space-y-6 max-w-[620px] mx-auto">
        <h1 className="text-3xl font-semibold text-center">Update your password</h1>
        <p className="text-center">Enter your current password and a new password</p>
        <div className="w-full space-y-2 !mt-10">
          <label htmlFor="current-password" className="font-semibold">
            Current Password{" "}
          </label>
          <input
            id="current-password"
            type="password"
            className="block h-[56px] placeholder:text-[#8F9BBA] outline-none bg-[#F5F5F7] px-4 w-full max-w-xl rounded-xl focus:ring-1 focus:ring-[#8F9BBA]/50 transition duration-500"
            placeholder="Type your current password"
          />
        </div>
        <div className="w-full space-y-2">
          <label htmlFor="new-password" className="font-semibold">
            New Password{" "}
          </label>
          <input
            id="new-password"
            type="password"
            className="block h-[56px] placeholder:text-[#8F9BBA] outline-none bg-[#F5F5F7] px-4 w-full max-w-xl rounded-xl focus:ring-1 focus:ring-[#8F9BBA]/50 transition duration-500"
            placeholder="Type your new password"
          />
        </div>
        <div className="w-full space-y-2">
          <label htmlFor="confirm-password" className="font-semibold">
            Confirm New Password{" "}
          </label>
          <input
            id="confirm-password"
            type="password"
            className="block h-[56px] placeholder:text-[#8F9BBA] outline-none bg-[#F5F5F7] px-4 w-full max-w-xl rounded-xl focus:ring-1 focus:ring-[#8F9BBA]/50 transition duration-500"
            placeholder="Re-type your new password"
          />
        </div>
        <button
          type="button"
          className="bg-gradient-to-r from-primary-purple to-primary-blue px-6 py-4 text-white rounded-xl hover:scale-105 transition-all duration-300 mt-6 w-full">
          Update{" "}
        </button>
      </div>
    </Modal>
  );
};

export default ChangePassword;
