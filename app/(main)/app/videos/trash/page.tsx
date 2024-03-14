import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-full flex-1 grid place-content-center">
      <div className="flex flex-col justify-center items-center mb-40">
        <Image src="/gifs/empty-coin.gif" alt="" width={400} height={400} className="mix-blend-multiply" />
        <h1 className="text-3xl text-center font-semibold">There is no content present.</h1>
        <p className="max-w-xl leading-loose text-center mt-4">
          Deleted templates will be stored here, and any items in the trash will be permanently deleted after 30 days.
        </p>
      </div>
    </div>
  );
}
