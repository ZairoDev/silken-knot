
import { SearchParams } from "nuqs";

// import { loadProductFilters } from "@/modules/products/search-params";
import { ProductListView } from "@/modules/products/ui/views/product-list-view";

interface Props {
  params: Promise<{ category: string }>;
  searchParams: Promise<SearchParams>
}

const Page = async ({ params }: Props) => {

  const { category } = await params;
  // const filters = await loadProductFilters(searchParams);


  return (
    <div>
      <ProductListView category={category} />
    </div>
  );
};

export default Page;
