import { NextResponse } from "next/server";
import connectDB from "../../../lib/db";
import Article from "../../../models/Article";
import { requireAuth } from "../../../lib/auth";
import { createSlug, countWordsFromBlocks } from "../../../lib/article-utils";

export async function GET(req, { params }) {
  try {
    await connectDB();

    const article = await Article.findById(params.id).populate("author", "username role");

    if (!article) {
      return NextResponse.json(
        { message: "مقاله یافت نشد" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      article,
    });
  } catch (error) {
    console.error("GET article by id error:", error);
    return NextResponse.json(
      { message: "خطا در دریافت مقاله" },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  try {
    const auth = await requireAuth();
    if (auth.error) {
      return NextResponse.json(
        { message: auth.error.message },
        { status: auth.error.status }
      );
    }

    await connectDB();

    const article = await Article.findById(params.id);

    if (!article) {
      return NextResponse.json(
        { message: "مقاله یافت نشد" },
        { status: 404 }
      );
    }

    if (
      auth.user.role !== "admin" &&
      article.author.toString() !== auth.user.userId
    ) {
      return NextResponse.json(
        { message: "اجازه ویرایش این مقاله را ندارید" },
        { status: 403 }
      );
    }

    const body = await req.json();

    const {
      languages,
      poster,
      category,
      tags,
      featured,
      status,
      metaTitle,
      metaDescription,
      focusKeyword,
      canonicalUrl,
      noindex,
      nofollow,
    } = body;

    if (languages?.fa?.title) {
      const nextSlugFa = createSlug(languages.fa.title);

      if (!nextSlugFa) {
        return NextResponse.json(
          { message: "اسلاگ فارسی معتبر نیست" },
          { status: 400 }
        );
      }

      const duplicate = await Article.findOne({
        "slug.fa": nextSlugFa,
        _id: { $ne: params.id },
      });

      if (duplicate) {
        return NextResponse.json(
          { message: "مقاله دیگری با این عنوان/اسلاگ وجود دارد" },
          { status: 400 }
        );
      }

      article.languages.fa.title = languages.fa.title;
      article.languages.fa.summary = languages.fa.summary || "";
      article.languages.fa.blocks = languages.fa.blocks || [];
      article.slug.fa = nextSlugFa;
    }

    if (languages?.en) {
      article.languages.en = {
        title: languages.en.title || "",
        summary: languages.en.summary || "",
        blocks: languages.en.blocks || [],
      };
      article.slug.en = languages.en.title ? createSlug(languages.en.title) : "";
    }

    if (languages?.ku) {
      article.languages.ku = {
        title: languages.ku.title || "",
        summary: languages.ku.summary || "",
        blocks: languages.ku.blocks || [],
      };
      article.slug.ku = languages.ku.title ? createSlug(languages.ku.title) : "";
    }

    if (poster !== undefined) article.poster = poster;

    if (category) {
      article.category = {
        fa: category.fa || "",
        en: category.en || "",
        ku: category.ku || "",
      };
    }

    if (tags) {
      article.tags = {
        fa: Array.isArray(tags.fa) ? tags.fa : [],
        en: Array.isArray(tags.en) ? tags.en : [],
        ku: Array.isArray(tags.ku) ? tags.ku : [],
      };
    }

    if (featured !== undefined) article.featured = featured;
    if (status !== undefined) article.status = status;

    if (metaTitle) {
      article.metaTitle = {
        fa: metaTitle.fa || "",
        en: metaTitle.en || "",
        ku: metaTitle.ku || "",
      };
    }

    if (metaDescription) {
      article.metaDescription = {
        fa: metaDescription.fa || "",
        en: metaDescription.en || "",
        ku: metaDescription.ku || "",
      };
    }

    if (focusKeyword) {
      article.focusKeyword = {
        fa: focusKeyword.fa || "",
        en: focusKeyword.en || "",
        ku: focusKeyword.ku || "",
      };
    }

    if (canonicalUrl !== undefined) article.canonicalUrl = canonicalUrl;
    if (noindex !== undefined) article.noindex = noindex;
    if (nofollow !== undefined) article.nofollow = nofollow;

    article.wordCount = countWordsFromBlocks([
      ...(article.languages?.fa?.blocks || []),
      ...(article.languages?.en?.blocks || []),
      ...(article.languages?.ku?.blocks || []),
    ]);

    await article.save();

    return NextResponse.json({
      success: true,
      message: "مقاله با موفقیت ویرایش شد",
      article,
    });
  } catch (error) {
    console.error("PUT article error:", error);
    return NextResponse.json(
      { message: "خطا در ویرایش مقاله" },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    const auth = await requireAuth();
    if (auth.error) {
      return NextResponse.json(
        { message: auth.error.message },
        { status: auth.error.status }
      );
    }

    await connectDB();

    const article = await Article.findById(params.id);

    if (!article) {
      return NextResponse.json(
        { message: "مقاله یافت نشد" },
        { status: 404 }
      );
    }

    if (
      auth.user.role !== "admin" &&
      article.author.toString() !== auth.user.userId
    ) {
      return NextResponse.json(
        { message: "اجازه حذف این مقاله را ندارید" },
        { status: 403 }
      );
    }

    await Article.findByIdAndDelete(params.id);

    return NextResponse.json({
      success: true,
      message: "مقاله با موفقیت حذف شد",
    });
  } catch (error) {
    console.error("DELETE article error:", error);
    return NextResponse.json(
      { message: "خطا در حذف مقاله" },
      { status: 500 }
    );
  }
}
