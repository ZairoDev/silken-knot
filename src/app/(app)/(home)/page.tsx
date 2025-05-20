import { Suspense } from "react";

import { ProductListView } from "@/modules/products/ui/views/product-list-view";

const Page = async () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductListView />
      </Suspense>
    </div>
  );
};

export default Page;
