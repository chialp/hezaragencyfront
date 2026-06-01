import { NextResponse } from "next/server";
import Article from "../../../models/Article";
import connectDB from "../../../lib/db";
import { saveUpload } from "../../../lib/saveUpload";

export const dynamic = "force-dynamic";

function safeJsonParse(value, fallback) {
  try {
    if (!value) return fallback;
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

function normalizeMultilangField(value, defaultValue = { fa: "", en: "", ku: "" }) {
  if (!value || typeof value !== "object") return defaultValue;

  return {
    fa: value.fa || "",
    en: value.en || "",
    ku: value.ku || "",
  };
}

function normalizeTags(value) {
  if (!value || typeof value !== "object") {
    return { fa: [], en: [], ku: [] };
  }

  return {
    fa: Array.isArray(value.fa) ? value.fa : [],
    en: Array.isArray(value.en) ? value.en : [],
    ku: Array.isArray(value.ku) ? value.ku : [],
  };
}

function withFallback(multilang) {
  return {
    fa: multilang.fa || "",
    en: multilang.en || multilang.fa || "",
    ku: multilang.ku || multilang.fa || "",
  };
}

export async function POST(req) {
  try {
    await connectDB();

    const formData = await req.formData();

    let title = normalizeMultilangField(
      safeJsonParse(formData.get("title"), { fa: "", en: "", ku: "" })
    );

    let summary = normalizeMultilangField(
      safeJsonParse(formData.get("summary"), { fa: "", en: "", ku: "" })
    );

    let category = normalizeMultilangField(
      safeJsonParse(formData.get("category"), { fa: "", en: "", ku: "" })
    );

    let slug = normalizeMultilangField(
      safeJsonParse(formData.get("slug"), { fa: "", en: "", ku: "" })
    );

    let metaTitle = normalizeMultilangField(
      safeJsonParse(formData.get("metaTitle"), { fa: "", en: "", ku: "" })
    );

    let metaDescription = normalizeMultilangField(
      safeJsonParse(formData.get("metaDescription"), { fa: "", en: "", ku: "" })
    );

    let focusKeyword = normalizeMultilangField(
      safeJsonParse(formData.get("focusKeyword"), { fa: "", en: "", ku: "" })
    );

    const tags = normalizeTags(
      safeJsonParse(formData.get("tags"), { fa: [], en: [], ku: [] })
    );

    const rawBlocks = safeJsonParse(formData.get("blocks"), []);
    const featured = formData.get("featured") === "true";
    const status = formData.get("status") || "published";
    const language = formData.get("language") || "multi";
    const seoScore = Number(formData.get("seoScore") || 0);
    const wordCount = Number(formData.get("wordCount") || 0);
    const readabilityScore = Number(formData.get("readabilityScore") || 0);

    if (!title.fa?.trim()) {
      return NextResponse.json(
        { success: false, message: "عنوان فارسی مقاله ضروری است" },
        { status: 400 }
      );
    }

    if (!slug.fa?.trim()) {
      return NextResponse.json(
        { success: false, message: "اسلاگ فارسی ضروری است" },
        { status: 400 }
      );
    }

    title = withFallback(title);
    summary = withFallback(summary);
    category = withFallback(category);
    metaTitle = withFallback(metaTitle);
    metaDescription = withFallback(metaDescription);
    focusKeyword = withFallback(focusKeyword);

    slug = {
      fa: slug.fa || "",
      en: slug.en || slug.fa || "",
      ku: slug.ku || slug.fa || "",
    };

    const posterFile = formData.get("poster");
    let poster = "";

    if (posterFile && typeof posterFile === "object" && posterFile.size > 0) {
      poster = await saveUpload(posterFile, "uploads/articles/posters");
    } else {
      return NextResponse.json(
        { success: false, message: "پوستر مقاله الزامی است" },
        { status: 400 }
      );
    }

    const uploadedFiles = formData.getAll("files");
    let fileIndex = 0;

    const blocks = await Promise.all(
      (Array.isArray(rawBlocks) ? rawBlocks : []).map(async (block, index) => {
        const normalizedBlock = {
          id: block?.id || `${Date.now()}-${index}`,
          type: block?.type || "text",
          value: block?.value || "",
          data: block?.data || {},
        };

        if (
          (normalizedBlock.type === "image" || normalizedBlock.type === "video") &&
          normalizedBlock.value === "FILE_UPLOAD"
        ) {
          const currentFile = uploadedFiles[fileIndex];
          fileIndex += 1;

          if (currentFile && typeof currentFile === "object" && currentFile.size > 0) {
            const folder =
              normalizedBlock.type === "image"
                ? "uploads/articles/blocks/images"
                : "uploads/articles/blocks/videos";

            const filePath = await saveUpload(currentFile, folder);

            normalizedBlock.value = filePath;
            normalizedBlock.data = {
              ...normalizedBlock.data,
              fileName: currentFile.name,
              fileType: currentFile.type,
              fileSize: currentFile.size,
            };
          }
        }

        return normalizedBlock;
      })
    );

    const article = await Article.create({
      title,
      summary,
      category,
      tags,
      slug,
      metaTitle,
      metaDescription,
      focusKeyword,
      blocks,
      poster,
      featured,
      status,
      language,
      seoScore,
      wordCount,
      readabilityScore,
      views: 0,
      languages: {
        fa: {
          title: title.fa,
          summary: summary.fa,
          category: category.fa,
          metaTitle: metaTitle.fa,
          metaDescription: metaDescription.fa,
          blocks,
        },
        en: {
          title: title.en,
          summary: summary.en,
          category: category.en,
          metaTitle: metaTitle.en,
          metaDescription: metaDescription.en,
          blocks: [],
        },
        ku: {
          title: title.ku,
          summary: summary.ku,
          category: category.ku,
          metaTitle: metaTitle.ku,
          metaDescription: metaDescription.ku,
          blocks: [],
        },
      },
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
    console.error("CREATE ARTICLE ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "خطا در ایجاد مقاله",
      },
      { status: 500 }
    );
  }
}
