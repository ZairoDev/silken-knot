"use client";

import axios from "axios";
import { InboxIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { ProductType } from "@/utils/types";
import { DEFAULT_LIMIT } from "@/constants";

import { ProductCard, ProductCardSkeleton } from "./product-card";
import { toast } from "sonner";
// import { useProductFilters } from "../../hooks/use-product-filters";

interface Props {
  category?: string;
  tenantSlug?: string
  narrowView?: boolean;
}

export const ProductList = ({ narrowView }: Props) => {

  // const [filters] = useProductFilters();
  const [data, setData] = useState<ProductType[]>([]);
  console.log("product list page")

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/products/getProductsByCategory");
      setData(response.data.data);
    } catch (err: unknown) {
      console.log("error in product list page");
      if (err instanceof Error) {
        toast.error(err.message);
      }
      toast.error("Unable to fetch products");
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (data?.length === 0) {
    return <div className=" border border-black border-dashed flex items-center justify-center p-8 flex-col gap-y-4 bg-white w-full rounded-lg">
      <InboxIcon />
      <p className=" text-base font-medium">No products found</p>
    </div>;
  }


  return (
    <>
      <div className={cn(" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4", narrowView && "lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3")}>
        {data?.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            name={product.name}
            imageUrl={product.image}
            // tenantSlug={product.tenant?.slug}
            tenantSlug={"test"}
            // tenantImageUrl={product.tenant?.image?.url}
            tenantImageUrl={""}
            reviewRating={3}
            reviewCount={5}
            price={product.price}
          />
        ))}
      </div>
      <div className=" flex justify-center pt-8">
        {/* {hasNextPage && (
          <Button
            disabled={isFetchingNextPage}
            onClick={() => fetchNextPage()}
            variant={"elevated"}
            className=" font-medium disabled:opacity-50 text-base bg-white"
          >
            Load More
          </Button>
        )} */}
      </div>
    </>
  )
};

export const ProductListSkeleton = ({ narrowView }: Props) => {
  return <div className={cn(" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4", narrowView && "lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3")}>
    {Array.from({ length: DEFAULT_LIMIT }).map((_, index) => (
      <ProductCardSkeleton key={index} />
    ))}
  </div>;
};
