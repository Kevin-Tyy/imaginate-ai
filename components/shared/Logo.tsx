import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Props {
  isLight?: boolean;
}
export default function Logo({ isLight }: Props) {
  return (
    <Link href="/">
      <Image src={isLight ? "/logo/imaginate-light.svg" : "/logo/genius-ai.svg"} alt="make-my-policy.co" height={100} width={100} className="w-44 min-w-44" />
    </Link>
  );
}
