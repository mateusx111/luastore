import Image, { ImageProps } from "next/image";
export const PromoBanner = ({ alt, ...props }: ImageProps) => {
  return (
    <Image
      alt="Banner Home 01"
      width={0}
      height={0}
      className="h-auto w-full px-5"
      sizes="100vh"
      {...props}
    />
  );
};
