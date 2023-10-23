"use client";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        src="/baner-home-01.svg"
        alt="Baner Home 01"
        width={0}
        height={0}
        className="h-auto w-full"
        sizes="100vh"
      />
    </>
  );
}
