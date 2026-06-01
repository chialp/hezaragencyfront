import { NextResponse } from "next/server";
import dbConnect from "../../lib/db";
import Article from "../../models/Article";

export async function GET() {
  try {
    await dbConnect();

    // فقط منتشر شده‌ها (اگر لازم دارید)
    const articles = await Article.find({ status: "published" })
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({ articles }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Server error", error: err?.message },
      { status: 500 }
    );
  }
}
