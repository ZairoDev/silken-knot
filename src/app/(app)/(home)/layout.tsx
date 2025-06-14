// import { Suspense } from "react";

// import {
//   SearchFilters,
//   SearchFiltersLoadingSkeleton,
// } from "@/modules/home/ui/components/search-filters";
import { Footer } from "@/modules/home/ui/components/footer";
import { Navbar } from "@/modules/home/ui/components/navbar";

interface Props {
  children: React.ReactNode;
}

const Layout = async ({ children }: Props) => {

  return (
    <div className=" flex flex-col min-h-screen">
      <Navbar />
      {/* <Suspense fallback={<SearchFiltersLoadingSkeleton />}>
        <SearchFilters />
      </Suspense> */}
      <div className=" flex-1 bg-[#f4f4f0]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
