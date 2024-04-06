"use client";

import Modal from "@/components/Modal";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { FileRejection } from "react-dropzone";
import Dropzone from "../Dropzone";
import { PreviewUploadedFile } from "../PreviewUploadedFile";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function PptModal({ isOpen, onClose }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const { toast } = useToast();

  function removeImage(): void {
    setFile(null);
  }

  function onFileDrop(acceptedFiles: File[], rejectedFiles: FileRejection[]): void {
    // if (isLoaded) {
    //   if (!isSignedIn) {
    //     toast({
    //       title: "Uh oh! Something went wrong. ⚠️",
    //       description: "Login or sign up for a free account to design your room",
    //       action: (
    //         <ToastAction altText="Login" onClick={() => router.push("/auth/signin")}>
    //           Login
    //         </ToastAction>
    //       ),
    //     });
    //     return;
    //   }
    // }
    if (rejectedFiles.length > 0) {
      console.info(rejectedFiles);
      toast({
        description: "Please upload a File less than 5MB. ⚠️",
      });
      return;
    }

    removeImage();

    console.info(acceptedFiles);
    setFile(acceptedFiles[0]);
  }

  function fileSize(size: number): string {
    if (size === 0) {
      return "0 Bytes";
    }

    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(size) / Math.log(k));

    return parseFloat((size / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-10 space-y-10">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold text-center">Import PowerPoint</h1>
          <p className="text-center">Each slide will be converted into an image and set as a scene background.</p>
        </div>
        <div>
          {!file ? (
            <Dropzone onFileDrop={() => {}} />
          ) : (
            <PreviewUploadedFile image={file} removeImage={removeImage} file={{ name: file.name, size: fileSize(file.size) }} />
          )}
        </div>
        <div className="flex justify-center gap-x-3 mt-4">
          <button className="px-7 py-4 relative rounded-xl overflow-hidden group ring-1 ring-[#C3C3C3] hover:ring-0 ring-inset transition-all duration-500">
            <span className="absolute inset-0 bg-gradient-to-br from-primary-purple to-primary-blue opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
            <span className="relative z-[1] group-hover:text-white transition-all duration-300">Cancel</span>
          </button>
          <button className="px-7 py-4 relative rounded-xl overflow-hidden group ring-1 ring-[#C3C3C3] hover:ring-0 ring-inset transition-all duration-500">
            <span className="absolute inset-0 bg-gradient-to-br from-primary-purple to-primary-blue opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
            <span className="relative z-[1] group-hover:text-white transition-all duration-300">Import Power Point</span>
          </button>
        </div>
      </div>
    </Modal>
  );
}
