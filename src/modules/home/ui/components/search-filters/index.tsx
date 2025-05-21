"use client";

import axios from "axios";
import { toast } from "sonner";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// import { useTRPC } from "@/trpc/client";
import { CategoryType } from "@/utils/types";
// import { useSuspenseQuery } from "@tanstack/react-query";

import { Categories } from "./categories";
import { SearchInput } from "./search-input";
import { DEFAULT_BG_COLOR } from "../../../constants";
import { BreadCrumbNavigation } from "./breadcrumb-navigation";

export const SearchFilters = () => {
  // const trpc = useTRPC();
  // const { data } = useSuspenseQuery(trpc.categories.getMany.queryOptions());

  const [data, setData] = useState<CategoryType[]>([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("/api/categories/getParentCategories");
      // console.log("data: ", response.data.data);
      setData(response.data.data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message);
      }
      toast.error("Unable to fetch categories");
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  const params = useParams();
  const categoryParam = params.category as string | undefined;
  const activeCategory = categoryParam || "all";

  const activeCategoryData = data.find((category) => category.slug === activeCategory);

  const activeCategoryColor = activeCategoryData?.color || DEFAULT_BG_COLOR;
  const activeCategoryName = activeCategoryData?.name || null;

  const activeSubcategory = params.subcategory as string | undefined;
  const activeSubcategoryName =
    activeCategoryData?.subcategories?.find(
      (subcategory: CategoryType) => subcategory.slug === activeSubcategory
    )?.name || null;

  // console.log("activeSubcategoryName: ", activeSubcategoryName);

  return (
    <div
      className=" px-4 lg:px-12 py-4 border-b flex flex-col gap-2 w-full border-black"
      style={{ backgroundColor: activeCategoryColor }}
    >
      <SearchInput />
      <div className=" hidden lg:block">
        <Categories data={data} />
      </div>
      <BreadCrumbNavigation
        activeCategory={activeCategory}
        activeCategoryName={activeCategoryName}
        activeSubcategoryName={activeSubcategoryName}
      />
    </div>
  );
};

export const SearchFiltersLoadingSkeleton = () => {
  return (
    <div
      className=" px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <SearchInput disabled />
      <div className=" hidden lg:block">
        <div className=" h-11" />
      </div>
    </div>
  );
};
