"use client";

import Image from "next/image";
import React, { useCallback } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
interface Props {
  onFileDrop: (acceptedFiles: File[], rejectedFiles: FileRejection[]) => void;
}
const acceptedFileTypes = {};

export default function Dropzone({ onFileDrop: onFileDrop }: Props) {
  const onDrop = useCallback(onFileDrop, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: acceptedFileTypes,
    maxFiles: 1,
    multiple: false,
  });

  return (
    <div {...getRootProps()} className="b outline-none w-full flex justify-center items-center h-[396px] cursor-pointer">
      <input {...getInputProps()} accept="images/*" />
      {isDragActive ? (
        <p className="text-lg text-center">Drop the files here ...</p>
      ) : (
        <div className="flex flex-col items-center gap-10">
          <Image src="/svgs/file-uploader__upload-icon_margin.svg" alt="upload" width={280} height={280} />
          <div className="space-y-4">
            <h1 className="text-3xl text-primary-neutral font-semibold text-center">Upload your product image to get started</h1>
            <h2 className="text-lg text-center font-semibold !mt-6">
              <span className="text-primary-blue">Click to upload</span> or drag and drop
            </h2>
            <p className="text-sm text-center text-primary-grey">Formats: JPG, PNG, WEBP or HEIC (max. 10MB)</p>
          </div>
        </div>
      )}
    </div>
  );
}
