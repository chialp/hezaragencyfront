import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Article from "@/models/Article";
import connectDB from "@/lib/db";
import { saveUpload } from "@/lib/saveUpload";

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

export async function PUT(req, { params }) {
  try {
    await connectDB();

    const { id } = params;

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "شناسه مقاله نامعتبر است" },
        { status: 400 }
      );
    }

    const existingArticle = await Article.findById(id);

    if (!existingArticle) {
      return NextResponse.json(
        { success: false, message: "مقاله یافت نشد" },
        { status: 404 }
      );
    }

    const formData = await req.formData();

    let title = normalizeMultilangField(
      safeJsonParse(formData.get("title"), existingArticle.title || { fa: "", en: "", ku: "" })
    );

    let summary = normalizeMultilangField(
      safeJsonParse(formData.get("summary"), existingArticle.summary || { fa: "", en: "", ku: "" })
    );

    let category = normalizeMultilangField(
      safeJsonParse(formData.get("category"), existingArticle.category || { fa: "", en: "", ku: "" })
    );

    let slug = normalizeMultilangField(
      safeJsonParse(formData.get("slug"), existingArticle.slug || { fa: "", en: "", ku: "" })
    );

    let metaTitle = normalizeMultilangField(
      safeJsonParse(formData.get("metaTitle"), existingArticle.metaTitle || { fa: "", en: "", ku: "" })
    );

    let metaDescription = normalizeMultilangField(
      safeJsonParse(formData.get("metaDescription"), existingArticle.metaDescription || { fa: "", en: "", ku: "" })
    );

    let focusKeyword = normalizeMultilangField(
      safeJsonParse(formData.get("focusKeyword"), existingArticle.focusKeyword || { fa: "", en: "", ku: "" })
    );

    const tags = normalizeTags(
      safeJsonParse(formData.get("tags"), existingArticle.tags || { fa: [], en: [], ku: [] })
    );

    const rawBlocks = safeJsonParse(formData.get("blocks"), existingArticle.blocks || []);

    const featured =
      formData.get("featured") !== null
        ? formData.get("featured") === "true"
        : existingArticle.featured || false;

    const status = formData.get("status") || existingArticle.status || "published";
    const language = formData.get("language") || existingArticle.language || "multi";
    const seoScore = Number(
      formData.get("seoScore") ?? existingArticle.seoScore ?? 0
    );
    const wordCount = Number(
      formData.get("wordCount") ?? existingArticle.wordCount ?? 0
    );
    const readabilityScore = Number(
      formData.get("readabilityScore") ?? existingArticle.readabilityScore ?? 0
    );

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

    let poster = existingArticle.poster || "";
    const posterFile = formData.get("poster");

    if (posterFile && typeof posterFile === "object" && posterFile.size > 0) {
      poster = await saveUpload(posterFile, "uploads/articles/posters");
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

        if (block?._id) {
          normalizedBlock._id = block._id;
        }

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
          } else {
            const oldBlock = (existingArticle.blocks || []).find(
              (b) =>
                String(b._id || "") === String(block._id || "") ||
                String(b.id || "") === String(block.id || "")
            );

            if (oldBlock) {
              normalizedBlock.value = oldBlock.value;
              normalizedBlock.data = oldBlock.data || {};
            }
          }
        }

        return normalizedBlock;
      })
    );

    existingArticle.title = title;
    existingArticle.summary = summary;
    existingArticle.category = category;
    existingArticle.tags = tags;
    existingArticle.slug = slug;
    existingArticle.metaTitle = metaTitle;
    existingArticle.metaDescription = metaDescription;
    existingArticle.focusKeyword = focusKeyword;
    existingArticle.blocks = blocks;
    existingArticle.poster = poster;
    existingArticle.featured = featured;
    existingArticle.status = status;
    existingArticle.language = language;
    existingArticle.seoScore = seoScore;
    existingArticle.wordCount = wordCount;
    existingArticle.readabilityScore = readabilityScore;

    existingArticle.languages = {
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
        blocks: existingArticle.languages?.en?.blocks || [],
      },
      ku: {
        title: title.ku,
        summary: summary.ku,
        category: category.ku,
        metaTitle: metaTitle.ku,
        metaDescription: metaDescription.ku,
        blocks: existingArticle.languages?.ku?.blocks || [],
      },
    };

    await existingArticle.save();

    return NextResponse.json({
      success: true,
      message: "مقاله با موفقیت ویرایش شد",
      article: existingArticle,
    });
  } catch (error) {
    console.error("EDIT ARTICLE ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "خطا در ویرایش مقاله",
      },
      { status: 500 }
    );
  }
}
