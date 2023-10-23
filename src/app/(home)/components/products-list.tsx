import { ProductItem } from "@/components/ui/product-item";
import { Product } from "@prisma/client";

interface ProductsListProps {
  products: Product[];
}
export const ProductList = ({ products }: ProductsListProps) => {
  return (
    <div className="[&::-webkit-scrollbar] flex w-full gap-4 overflow-x-auto px-5">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};
