import Modal from "@/components/Modal";
import React, { useState } from "react";
import { BiPencil } from "react-icons/bi";
import { TfiMusicAlt } from "react-icons/tfi";
import EditProfile from "./layouts/EditProfile";
import Image from "next/image";
import Preferences from "./layouts/Preferences";
import General from "./layouts/General";
import Billing from "./layouts/Billing";
import clsx from "clsx";
interface Props {
  isOpen: boolean;
  onClose: () => void;
}
enum Tab {
  "Account Info" = "Account Info",
  "Preferences" = "Preferences",
  "General" = "General",
  "Billing" = "Billing",
}
export default function UserSettings({ isOpen, onClose }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>(Tab["Account Info"]);
  const tabs = [
    { icon: "/icons/user-square.svg", title: Tab["Account Info"] },
    { icon: "/icons/notification.svg", title: Tab.Preferences },
    { icon: "/icons/settings-2.svg", title: Tab.General },
    { icon: "/icons/card-tick.svg", title: Tab.Billing },
  ];

  const renderComponent = () => {
    switch (activeTab) {
      case Tab["Account Info"]:
        return <EditProfile />;
      case Tab.Preferences:
        return <Preferences />;
      case Tab.General:
        return <General />;
      case Tab.Billing:
        return <Billing />;
      default:
        return null;
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex">
        <div className="w-full max-w-[326px] bg-[#EAF0FF] py-10 px-5 flex flex-col justify-between">
          <div>
            <h1 className="text-primary-blue text-2xl font-semibold px-5">User Settings</h1>
            <div className="space-y-4 mt-6">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  onClick={() => setActiveTab(tab.title)}
                  className={clsx("flex gap-x-4 p-4 hover:bg-white rounded-xl transition duration-300 cursor-pointer", tab.title === activeTab && "bg-white")}>
                  <Image src={tab.icon} alt="" width={24} height={24} />
                  <span>{tab.title}</span>
                </div>
              ))}
            </div>
          </div>
          <button className="text-white bg-[#F93939] w-full p-4 rounded-xl hover:opacity-90 transition">Logout</button>
        </div>
        <div className="w-full p-10">
          <div className="min-h-[540px]">{renderComponent()}</div>
        </div>
      </div>
    </Modal>
  );
}
