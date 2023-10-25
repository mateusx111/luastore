import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDownIcon } from "lucide-react";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

export const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="mt-4 flex max-w-[170px] flex-col gap-4">
      <div className="hide-scrollbar relative flex h-[170px] w-[156] items-center justify-center rounded-lg bg-accent">
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

        {product.discountPercentage > 0 && (
          <Badge className="absolute left-3 top-3 px-2 py-[2px]">
            <ArrowDownIcon size={14} /> {product.discountPercentage}%
          </Badge>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className="overflow-hide text-ellipsis whitespace-nowrap text-sm">
          {product.name}
        </p>

        <div className="flex items-center gap-2 ">
          {product.discountPercentage > 0 ? (
            <>
              <p className=" overflow-auto text-ellipsis whitespace-nowrap text-sm font-semibold">
                R$ {product.totalPrice.toFixed(2)}
              </p>

              <p className=" overflow-auto text-ellipsis whitespace-nowrap  text-xs line-through opacity-75">
                R$
                {Number(product.basePrice).toFixed(2)}
              </p>
            </>
          ) : (
            <p className="text-sm font-semibold">
              R$ {product.basePrice.toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
