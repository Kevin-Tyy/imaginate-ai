"use client";

import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoClose } from "react-icons/io5";
import clsx from "clsx";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  maxWidth?: string;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, maxWidth, fullWidth }) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black bg-opacity-60 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <Dialog.Panel
                className={clsx(
                  "relative overflow-hidden rounded-3xl modal-shadow bg-white transition-all w-full sm:my-8 sm:w-full",
                  maxWidth ? maxWidth : "!max-w-[1184px]",
                  fullWidth ? "w-full !max-w-[92%] h-[90vh]" : "!max-w-[1184px]"
                )}>
                <div className="absolute right-0 top-0 p-4 z-50">
                  <button type="button" className="rounded-full hover:bg-[#DB4446]/20 p-1.5 outline-none transition-all duration-300" onClick={onClose}>
                    <span className="sr-only">Close</span>
                    <IoClose className="h-7 w-7 text-[#DB4446]" aria-hidden="true" />
                  </button>
                </div>
                <div className="overflow-y-scroll no-scrollbar h-full">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
