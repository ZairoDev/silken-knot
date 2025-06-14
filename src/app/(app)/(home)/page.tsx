import { Suspense } from "react";

// import { ProductListView } from "@/modules/products/ui/views/product-list-view";
import { HomePageView } from "@/modules/products/ui/views/home-page-view";

const Page = async () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HomePageView />
        {/* <ProductListView /> */}
      </Suspense>
    </div>
  );
};

export default Page;
