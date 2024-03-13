"use client";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import UserSettings from "./modals/UserSettings";

export default function ProfileButton() {
  const [isUserProfileModalOpen, setIsUserProfileModalOpen] = useState(false);
  return (
    <Fragment>
      <button className="outline-none hover:opacity-80" onClick={() => setIsUserProfileModalOpen(true)}>
        <Image src="/dummy-avatar.png" alt="" width={44} height={44} className="w-[50px] h-[50px] object-cover rounded-full" />
      </button>
      <UserSettings isOpen={isUserProfileModalOpen} onClose={() => setIsUserProfileModalOpen(false)} />
    </Fragment>
  );
}
