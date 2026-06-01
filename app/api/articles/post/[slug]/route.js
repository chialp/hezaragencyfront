import { NextResponse } from "next/server";
import connectDB from "../../../../lib/db";
import Article from "../../../../models/Article";

export async function GET(req, { params }) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const lang = searchParams.get("lang") || "fa";

    const allowedLangs = ["fa", "en", "ku"];
    const selectedLang = allowedLangs.includes(lang) ? lang : "fa";

    const query = {};
    query[`slug.${selectedLang}`] = params.slug;

    let article = await Article.findOne(query).populate("author", "username role");

    if (!article && selectedLang !== "fa") {
      article = await Article.findOne({ "slug.fa": params.slug }).populate(
        "author",
        "username role"
      );
    }

    if (!article) {
      return NextResponse.json(
        { message: "مقاله یافت نشد" },
        { status: 404 }
      );
    }

    article.views += 1;
    await article.save();

    return NextResponse.json({
      success: true,
      article,
    });
  } catch (error) {
    console.error("GET article by slug error:", error);
    return NextResponse.json(
      { message: "خطا در دریافت مقاله" },
      { status: 500 }
    );
  }
}
