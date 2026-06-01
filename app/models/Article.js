import mongoose from "mongoose";

const BlockSchema = new mongoose.Schema({
  id: { type: String },
  type: {
    type: String,
    enum: ["text", "image", "video", "slider", "quote", "code", "faq"],
    required: true,
  },
  value: {
    fa: mongoose.Schema.Types.Mixed,
    en: mongoose.Schema.Types.Mixed,
    ku: mongoose.Schema.Types.Mixed,
  },
  data: { type: mongoose.Schema.Types.Mixed },
});

const LanguageContentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  summary: String,
  blocks: { type: [BlockSchema], default: [] },
});

const BlogSchema = new mongoose.Schema(
  {
    languages: {
      fa: { type: LanguageContentSchema, required: true },
      en: { type: LanguageContentSchema, default: null },
      ku: { type: LanguageContentSchema, default: null },
    },

    poster: {
      type: String,
      required: [true, "پوستر مقاله الزامی است"],
    },

    category: {
      fa: String,
      en: String,
      ku: String,
    },

    tags: {
      fa: [String],
      en: [String],
      ku: [String],
    },

    featured: { type: Boolean, default: false },
    status: { type: String, default: "published" },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    views: { type: Number, default: 0 },

    slug: {
      fa: String,
      en: String,
      ku: String,
    },

    metaTitle: {
      fa: String,
      en: String,
      ku: String,
    },

    metaDescription: {
      fa: String,
      en: String,
      ku: String,
    },

    focusKeyword: {
      fa: String,
      en: String,
      ku: String,
    },

    seoScore: { type: Number, default: 0 },
    wordCount: { type: Number, default: 0 },
    readabilityScore: { type: Number, default: 0 },
    canonicalUrl: String,
    noindex: { type: Boolean, default: false },
    nofollow: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Article || mongoose.model("Article", BlogSchema, "Article");
