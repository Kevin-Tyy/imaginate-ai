import React, { Fragment, useState } from "react";
import CreateVideoModal from "../modals/CreatevideoModal";

const CreatevideoButton = () => {
  const [isVideoModalOpen, setIsVideoOpenModal] = useState(false);
  return (
    <Fragment>
      <button
        onClick={() => setIsVideoOpenModal(true)}
        className="hidden xl:block whitespace-nowrap bg-gradient-to-r from-primary-purple to-primary-blue px-6 py-3 text-white rounded-full hover:scale-105 transition-all duration-300 text-[15px]">
        Create New Video
      </button>
      <CreateVideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoOpenModal(false)} />
    </Fragment>
  );
};

export default CreatevideoButton;
