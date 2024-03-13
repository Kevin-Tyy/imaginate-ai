import Modal from "@/components/Modal";
import React, { FC } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
const ChangePassword: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth={684}>
      <div className="flex">
        <div className="w-full max-w-[326px] bg-[#EAF0FF]"></div>
        <div className="w-full p-10">
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
        </div>
      </div>
    </Modal>
  );
};

export default ChangePassword;
