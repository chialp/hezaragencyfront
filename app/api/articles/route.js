import { NextResponse } from "next/server";
import connectDB from "../../lib/db";
import Article from "../../models/Article";
import { requireAuth } from "../../lib/auth";
import { createSlug, countWordsFromBlocks } from "../../lib/article-utils";

export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);

    const page = Number(searchParams.get("page") || 1);
    const limit = Number(searchParams.get("limit") || 10);
    const status = searchParams.get("status");
    const featured = searchParams.get("featured");
    const author = searchParams.get("author");
    const search = searchParams.get("search");

    const query = {};

    if (status) query.status = status;
    if (featured !== null && featured !== undefined) {
      if (featured === "true") query.featured = true;
      if (featured === "false") query.featured = false;
    }
    if (author) query.author = author;

    if (search) {
      query.$or = [
        { "languages.fa.title": { $regex: search, $options: "i" } },
        { "languages.en.title": { $regex: search, $options: "i" } },
        { "languages.ku.title": { $regex: search, $options: "i" } },
      ];
    }

    const skip = (page - 1) * limit;

    const [articles, total] = await Promise.all([
      Article.find(query)
        .populate("author", "username role")
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit),
      Article.countDocuments(query),
    ]);

    return NextResponse.json({
      success: true,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      articles,
    });
  } catch (error) {
    console.error("GET /api/articles error:", error);
    return NextResponse.json(
      { message: "خطا در دریافت مقالات" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const auth = await requireAuth();
    if (auth.error) {
      return NextResponse.json(
        { message: auth.error.message },
        { status: auth.error.status }
      );
    }

    await connectDB();

    const body = await req.json();

    const {
      languages,
      poster,
      category = {},
      tags = {},
      featured = false,
      status = "published",
      metaTitle = {},
      metaDescription = {},
      focusKeyword = {},
      canonicalUrl = "",
      noindex = false,
      nofollow = false,
    } = body;

    if (!languages?.fa?.title) {
      return NextResponse.json(
        { message: "عنوان فارسی الزامی است" },
        { status: 400 }
      );
    }

    if (!poster || typeof poster !== "string") {
      return NextResponse.json(
        { message: "پوستر مقاله الزامی است" },
        { status: 400 }
      );
    }

    const slugFa = createSlug(languages.fa.title);

    if (!slugFa) {
      return NextResponse.json(
        { message: "اسلاگ فارسی قابل تولید نیست" },
        { status: 400 }
      );
    }

    const existingArticle = await Article.findOne({ "slug.fa": slugFa });
    if (existingArticle) {
      return NextResponse.json(
        { message: "مقاله‌ای با این عنوان/اسلاگ قبلاً ثبت شده است" },
        { status: 400 }
      );
    }

    const article = await Article.create({
      languages: {
        fa: {
          title: languages.fa.title,
          summary: languages.fa.summary || "",
          blocks: languages.fa.blocks || [],
        },
        en: languages.en
          ? {
              title: languages.en.title || "",
              summary: languages.en.summary || "",
              blocks: languages.en.blocks || [],
            }
          : null,
        ku: languages.ku
          ? {
              title: languages.ku.title || "",
              summary: languages.ku.summary || "",
              blocks: languages.ku.blocks || [],
            }
          : null,
      },
      poster,
      category: {
        fa: category.fa || "",
        en: category.en || "",
        ku: category.ku || "",
      },
      tags: {
        fa: Array.isArray(tags.fa) ? tags.fa : [],
        en: Array.isArray(tags.en) ? tags.en : [],
        ku: Array.isArray(tags.ku) ? tags.ku : [],
      },
      featured,
      status,
      author: auth.user.userId,
      slug: {
        fa: slugFa,
        en: languages?.en?.title ? createSlug(languages.en.title) : "",
        ku: languages?.ku?.title ? createSlug(languages.ku.title) : "",
      },
      metaTitle: {
        fa: metaTitle.fa || "",
        en: metaTitle.en || "",
        ku: metaTitle.ku || "",
      },
      metaDescription: {
        fa: metaDescription.fa || "",
        en: metaDescription.en || "",
        ku: metaDescription.ku || "",
      },
      focusKeyword: {
        fa: focusKeyword.fa || "",
        en: focusKeyword.en || "",
        ku: focusKeyword.ku || "",
      },
      canonicalUrl,
      noindex,
      nofollow,
      wordCount: countWordsFromBlocks([
        ...(languages?.fa?.blocks || []),
        ...(languages?.en?.blocks || []),
        ...(languages?.ku?.blocks || []),
      ]),
    });

    return NextResponse.json(
      {
        success: true,
        message: "مقاله با موفقیت ایجاد شد",
        article,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/articles error:", error);
    return NextResponse.json(
      { message: "خطا در ایجاد مقاله" },
      { status: 500 }
    );
  }
}
