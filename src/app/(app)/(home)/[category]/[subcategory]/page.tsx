import { SearchParams } from "nuqs";

// import { loadProductFilters } from "@/modules/products/search-params";
import { ProductListView } from "@/modules/products/ui/views/product-list-view";

interface Props {
  params: Promise<{ subcategory: string }>;
  searchParams: Promise<SearchParams>
}

const Page = async ({ params }: Props) => {

  const { subcategory } = await params;
  // const filters = await loadProductFilters(searchParams);

  return (
    <div>
      <ProductListView category={subcategory} />
    </div>
  );
};

export default Page;
