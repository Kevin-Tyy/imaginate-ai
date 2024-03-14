"use client";
import React, { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import clsx from "clsx";
import NotificationDropdown from "./dropdowns/NotificationDropdown";
export default function NotificationButton() {
  const [notificationPopupOpen, setIsNotificationPopupOpen] = useState(false);

  return (
    <NotificationDropdown setIsOpen={setIsNotificationPopupOpen}>
      <div className="p-2 hover:bg-primary-grey/10 rounded-full transition duration-500">
        <IoMdNotificationsOutline size={28} className={clsx(notificationPopupOpen ? "text-primary-blue" : "text-[#A3AED0]")} />
      </div>
    </NotificationDropdown>
  );
}
