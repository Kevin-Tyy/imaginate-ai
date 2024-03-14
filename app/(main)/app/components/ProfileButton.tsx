"use client";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import UserSettings from "./modals/UserSettings";
import { ProfileDropdown } from "./dropdowns/ProfileDropdown";

export default function ProfileButton() {
  const [isUserProfileModalOpen, setIsUserProfileModalOpen] = useState(false);
  return (
    <Fragment>
      <ProfileDropdown openModal={() => setIsUserProfileModalOpen(true)}>
        <button className="outline-none hover:opacity-80">
          <Image src="/dummy-avatar.png" alt="" width={44} height={44} className="w-[50px] h-[50px] min-w-[50px] max-h-[50px] object-cover rounded-full" />
        </button>
      </ProfileDropdown>
      <UserSettings isOpen={isUserProfileModalOpen} onClose={() => setIsUserProfileModalOpen(false)} />
    </Fragment>
  );
}
