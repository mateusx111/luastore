"use client";

import Image from "next/image";
import { Categories } from "./components/categories";

export default function Home() {
  return (
    <div className="p-5">
      <Image
        src="/banner-home-01.svg"
        alt="Banner Home 01"
        width={0}
        height={0}
        className="h-auto w-full"
        sizes="100vh"
      />

      <div className="mt-8">
        <Categories />
      </div>
    </div>
  );
}
