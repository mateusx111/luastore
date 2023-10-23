import { Product } from "@prisma/client";
import Image from "next/image";

interface ProductItemProps {
  product: Product;
}

export const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="mt-4 flex max-w-[156] flex-col gap-4">
      <div className="flex h-[170px] w-[156] items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          height={0}
          width={0}
          sizes="100vh"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          alt="image"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <div>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {product.name}
        </p>
      </div>
    </div>
  );
};
