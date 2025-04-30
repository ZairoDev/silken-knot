import { getPayload } from "payload";
import configPromise from "@payload-config";

import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { SearchFilters } from "./search-filters";
import { Category } from "@/payload-types";

interface Props {
  children: React.ReactNode;
}

const Layout = async ({ children }: Props) => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "categories",
    depth: 1, // populate sub-categories, 0 will only give ids of sub-categories
    pagination: false,
    where: {
      parent: {
        exists: false,
      },
    },
  });

  const formattedData = data.docs.map((doc) => ({
    ...doc,
    subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
      ...(doc as Category), // it can't directly infer type from depth, although depth 1 ensures that doc will be of type "Category"
      subcategories: undefined,
    })),
  }));

  return (
    <div className=" flex flex-col min-h-screen">
      <Navbar />
      <SearchFilters data={formattedData} />
      <div className=" flex-1 bg-[#f4f4f0]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
