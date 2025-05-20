import { NextResponse } from "next/server";

import { connectDb } from "@/utils/db";
import { Categories } from "@/models/categories";

connectDb();

export async function GET() {
  try {
    const categories = await Categories.find({});

    if (!categories) {
      return NextResponse.json({ message: "There are no Categories" }, { status: 200 });
    }

    return NextResponse.json({ data: categories }, { status: 200 });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Unable to fetch categories" }, { status: 500 });
  }
}
