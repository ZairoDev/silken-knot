"use client";

import { useParams } from "next/navigation";
import { ListFilterIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { CategoryType } from "@/utils/types";
import { Button } from "@/components/ui/button";

import { CategoryDropdown } from "./category-dropdown";
import { CategoriesSidebar } from "./categories-sidebar";



export const Categories = ({ data }: { data: CategoryType[] }) => {
  const params = useParams();

  console.log('data in map: ', data);

  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const viewAllRef = useRef<HTMLDivElement>(null);

  const [visibleCount, setVisibleCount] = useState(data.length);
  const [isAnyHovered, setIsAnyHovered] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const categoryParams = params.category as string | undefined;
  const activeCategory = categoryParams || "all";

  // const activeCategoryIndex = data.findIndex((cat) => cat.slug === activeCategory);
  // const activeCategoryIndex = 0;
  // const isActiveCategoryHidden =
  //   activeCategoryIndex >= visibleCount && activeCategoryIndex !== -1;
  const isActiveCategoryHidden = false;


  useEffect(() => {
    const calculateVisible = () => {
      if (!containerRef.current || !measureRef.current || !viewAllRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const viewAllWidth = viewAllRef.current.offsetWidth;
      const availableWidth = containerWidth - viewAllWidth;

      const items = Array.from(measureRef.current.children);
      let totalWidth = 0;
      let visible = 0;

      for (const item of items) {
        const width = item.getBoundingClientRect().width;

        if (totalWidth + width > availableWidth) break;
        totalWidth += width;
        visible++;
      }
      setVisibleCount(visible);
    };

    const resizeObserver = new ResizeObserver(calculateVisible);
    resizeObserver.observe(containerRef.current!);

    return () => resizeObserver.disconnect();
  }, [data.length]);

  return (
    <div className=" relative w-full ">
      {/* Categories Sidebar */}
      <CategoriesSidebar open={isSidebarOpen} onOpenChange={setIsSidebarOpen} />

      {/* Hidden div to measure all items */}
      <div
        ref={measureRef}
        className=" absolute opacity-0 pointer-events-none flex border-4 border-blue-600"
        style={{
          position: "fixed",
          top: -9999,
          left: -9999,
        }}
      >
        {data && data?.map((category) => (
          <div key={category._id} className=" border border-pink-600">
            <CategoryDropdown
              category={category}
              isActive={activeCategory === category.slug}
              isNavigationHovered={false}
            />
          </div>
        ))}
      </div>

      {/* Visible Items */}
      <div
        ref={containerRef}
        onMouseEnter={() => setIsAnyHovered(true)}
        onMouseLeave={() => setIsAnyHovered(false)}
        className=" flex flex-nowrap items-center"
      >
        {data.slice(0, visibleCount).map((category) => (
          <div key={category._id}>
            <CategoryDropdown
              category={category}
              isActive={activeCategory === category.slug}
              isNavigationHovered={isAnyHovered}
            />
          </div>
        ))}

        <div ref={viewAllRef} className=" shrink-0">
          <Button
            className={cn(
              "h-11 px-4 bg-transparent border-transparent rounded-full hover:bg-white hover:border-primary text-black",
              isActiveCategoryHidden && !isAnyHovered && " bg-white border-primary"
            )}
            onClick={() => setIsSidebarOpen(true)}
          >
            View All
            <ListFilterIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

// Hidden Div(measureRef) is used to calculate the width of all the items(all categories) in the container, it will calculate how much width all the categories will take in a single row.
