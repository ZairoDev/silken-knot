import { NextResponse } from "next/server";

import { connectDb } from "@/utils/db";
import { Products } from "@/models/products";

connectDb();

// const CACHE_DURATION = 1000 * 60 * 5; // 5 minutes
// let cachedCategories: any = null;
// let lastFetchedTime = 0;

export async function GET() {
  // const { productId } = await req.json();

  try {
    // const currentTime = Date.now();

    // if (cachedCategories && currentTime - lastFetchedTime < CACHE_DURATION) {
    //   console.log("Serving categories from cache");
    //   return NextResponse.json({ data: cachedCategories }, { status: 200 });
    // }

    const products = await Products.find({});
    console.log("products: ", products);

    if (!products) {
      return NextResponse.json(
        { message: "There are no Product for this productId" },
        { status: 200 }
      );
    }

    // cachedCategories = categoriesWithSubcategories;
    // lastFetchedTime = currentTime;

    return NextResponse.json({ data: products }, { status: 200 });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Unable to fetch product" }, { status: 500 });
  }
}
