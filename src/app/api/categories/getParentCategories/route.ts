import { NextResponse } from "next/server";

import { connectDb } from "@/utils/db";
import { CategoryType } from "@/utils/types";
import { Categories } from "@/models/categories";

connectDb();

type extendedCategoryType = CategoryType & {
  subcategories: CategoryType[];
};

const CACHE_DURATION = 1000 * 60 * 5; // 5 minutes
let cachedCategories: extendedCategoryType[] = [];
let lastFetchedTime = 0;

export async function GET() {
  try {
    // Populate subcategories with parent categories
    // const parentCategories = await Categories.aggregate([
    //   {
    //     $match: { parent: null },
    //   },
    //   {
    //     $lookup: {
    //       from: "categories",
    //       localField: "_id",
    //       foreignField: "parent",
    //       as: "subcategories",
    //     },
    //   },
    //   {
    //     $project: {
    //       name: 1,
    //       slug: 1,
    //       color: 1,
    //       subcategories: {
    //         _id: 1,
    //         name: 1,
    //         slug: 1,
    //         color: 1,
    //       },
    //     },
    //   },
    // ]);

    const currentTime = Date.now();

    if (cachedCategories && currentTime - lastFetchedTime < CACHE_DURATION) {
      console.log("Serving categories from cache");
      return NextResponse.json({ data: cachedCategories }, { status: 200 });
    }

    const parentCategories = (await Categories.find({
      parent: null,
    }).lean()) as unknown as CategoryType[];

    const categoriesWithSubcategories = await Promise.all(
      parentCategories.map(async (parent) => {
        const subcategories = (await Categories.find({
          parent: parent._id,
        }).lean()) as unknown as CategoryType[];
        return {
          ...parent,
          subcategories,
        } as extendedCategoryType;
      })
    );

    if (!parentCategories) {
      return NextResponse.json(
        { message: "There are no Parent Categories" },
        { status: 200 }
      );
    }

    cachedCategories = categoriesWithSubcategories;

    lastFetchedTime = currentTime;

    return NextResponse.json({ data: categoriesWithSubcategories }, { status: 200 });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    return NextResponse.json(
      { error: "Unable to fetch parent categories" },
      { status: 500 }
    );
  }
}
