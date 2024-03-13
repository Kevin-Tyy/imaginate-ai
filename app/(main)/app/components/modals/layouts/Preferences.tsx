import { Switch } from "@/components/ui/switch";
import React from "react";

export default function Preferences() {
  return (
    <form>
      <h1 className="text-2xl font-semibold border-b border-[#D9D9D9] pb-4">Email Notifications</h1>
      <div className="border-gradient-blue-to-gray px-6 py-7 mt-6">
        <div className="relative z-[1] flex justify-between items-center">
          <div className="space-y-3">
            <h1 className="text-xl font-semibold">Email Notifications</h1>
            <p className="text-primary-grey">Receive comment and video notifications.</p>
          </div>
          <Switch id="airplane-mode" />
        </div>
      </div>
      <div className="border-gradient-blue-to-gray px-6 py-7 mt-6">
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
    </form>
  );
}
