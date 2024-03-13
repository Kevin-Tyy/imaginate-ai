import Modal from "@/components/Modal";
import React from "react";
import { BiPencil } from "react-icons/bi";
import { TfiMusicAlt } from "react-icons/tfi";
import EditProfile from "./layouts/EditProfile";
interface Props {
  isOpen: boolean;
  onClose: () => void;
}
export default function UserSettings({ isOpen, onClose }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex">
        <div className="w-full max-w-[326px] bg-[#EAF0FF]"></div>
        <div className="w-full p-10">
          <EditProfile />
        </div>
      </div>
    </Modal>
  );
}
