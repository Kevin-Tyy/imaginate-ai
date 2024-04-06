"use client";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import UserSettings from "../modals/UserSettings";
import { ProfileDropdown } from "../modals/dropdowns/ProfileDropdown";

export default function ProfileButton() {
  const [isUserProfileModalOpen, setIsUserProfileModalOpen] = useState(false);
  return (
    <Fragment>
      <ProfileDropdown openModal={() => setIsUserProfileModalOpen(true)}>
        <button className="outline-none hover:opacity-80">
          <Image src="/dummy-avatar.png" alt="" width={44} height={44} className="w-[45px] h-[45px] min-w-[45px] max-h-[45px] object-cover rounded-full" />
        </button>
      </ProfileDropdown>
      <UserSettings isOpen={isUserProfileModalOpen} onClose={() => setIsUserProfileModalOpen(false)} />
    </Fragment>
  );
}
