"use client";
import React from "react";

export default function ArticleForm({
  title,
  setTitle,
  summary,
  setSummary,
  category,
  setCategory,
  tags,
  setTags,
  slug,
  setSlug,
  metaTitle,
  setMetaTitle,
  metaDescription,
  setMetaDescription,
  focusKeyword,
  setFocusKeyword,
  generateSlug,
  featured,
  setFeatured,
  status,
  setStatus,
  currentLang,
  languageName
}) {

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
    if (!slug) setSlug(generateSlug(value));
  };

  // متن‌های چندزبانه
  const texts = {
    fa: {
      seoTitle: "تنظیمات سئو",
      contentTitle: "محتوای مقاله",
      focusKeyword: "کلمه کلیدی تمرکز *",
      focusKeywordPlaceholder: "کلمه کلیدی اصلی مقاله",
      slug: "Slug *",
      slugPlaceholder: "آدرس URL",
      metaTitle: "عنوان سئو *",
      metaTitlePlaceholder: "عنوان برای نتایج جستجو (حداکثر ۶۰ کاراکتر)",
      metaDescription: "توضیحات متا",
      metaDescriptionPlaceholder: "توضیحات برای نتایج جستجو (حداکثر ۱۶۰ کاراکتر)",
      articleTitle: "عنوان مقاله *",
      articleTitlePlaceholder: "عنوان مقاله",
      summary: "خلاصه مقاله",
      summaryPlaceholder: "خلاصه مقاله",
      category: "دسته‌بندی",
      categoryPlaceholder: "دسته‌بندی",
      tags: "تگ‌ها",
      tagsPlaceholder: "تگ‌ها (با کاما جدا)",
      settingsTitle: "تنظیمات مقاله",
      featured: "مقاله ویژه",
      status: "وضعیت",
      statusOptions: {
        published: "منتشر شده",
        draft: "پیش‌نویس",
        archived: "آرشیو شده"
      },
      characters: "کاراکتر"
    },
    en: {
      seoTitle: "SEO Settings",
      contentTitle: "Article Content",
      focusKeyword: "Focus Keyword *",
      focusKeywordPlaceholder: "Main article keyword",
      slug: "Slug *",
      slugPlaceholder: "URL address",
      metaTitle: "SEO Title *",
      metaTitlePlaceholder: "Title for search results (max 60 characters)",
      metaDescription: "Meta Description",
      metaDescriptionPlaceholder: "Description for search results (max 160 characters)",
      articleTitle: "Article Title *",
      articleTitlePlaceholder: "Article title",
      summary: "Article Summary",
      summaryPlaceholder: "Article summary",
      category: "Category",
      categoryPlaceholder: "Category",
      tags: "Tags",
      tagsPlaceholder: "Tags (separated by comma)",
      settingsTitle: "Article Settings",
      featured: "Featured Article",
      status: "Status",
      statusOptions: {
        published: "Published",
        draft: "Draft",
        archived: "Archived"
      },
      characters: "characters"
    },
    ku: {
      seoTitle: "ڕێکخستنەکانی SEO",
      contentTitle: "ناوەڕۆکی بابەت",
      focusKeyword: "کلیل وشەی خوو *",
      focusKeywordPlaceholder: "کلیل وشەی سەرەکی بابەت",
      slug: "Slug *",
      slugPlaceholder: "ناونیشانی URL",
      metaTitle: "ناونیشانی SEO *",
      metaTitlePlaceholder: "ناونیشان بۆ ئەنجامەکانی گەڕان (کەمتر لە ٦٠ پیت)",
      metaDescription: "ڕوانگەی مێتا",
      metaDescriptionPlaceholder: "ڕوانگە بۆ ئەنجامەکانی گەڕان (کەمتر لە ١٦٠ پیت)",
      articleTitle: "ناونیشانی بابەت *",
      articleTitlePlaceholder: "ناونیشانی بابەت",
      summary: "پوختی بابەت",
      summaryPlaceholder: "پوختی بابەت",
      category: "پۆل",
      categoryPlaceholder: "پۆل",
      tags: "تاگەکان",
      tagsPlaceholder: "تاگەکان (جیاکراوە بە کۆما)",
      settingsTitle: "ڕێکخستنەکانی بابەت",
      featured: "بابەتی تایبەت",
      status: "بار",
      statusOptions: {
        published: "بڵاوکراوە",
        draft: "پێش نووس",
        archived: "ئەرشیف کرا"
      },
      characters: "پیت"
    }
  };

  const t = texts[currentLang];

  return (
    <div className="grid lg:grid-cols-2 gap-8 mb-8">
      {/* بخش سئو */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold border-b pb-2">{t.seoTitle}</h2>
        
        <div>
          <label className="block text-sm font-medium mb-1">{t.focusKeyword}</label>
          <input
            value={focusKeyword}
            onChange={(e) => setFocusKeyword(e.target.value)}
            placeholder={t.focusKeywordPlaceholder}
            className="border p-2 w-full rounded focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">{t.slug}</label>
          <input
            value={slug}
            onChange={(e) => setSlug(generateSlug(e.target.value))}
            placeholder={t.slugPlaceholder}
            className="border p-2 w-full rounded focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">{t.metaTitle}</label>
          <input
            value={metaTitle}
            onChange={(e) => setMetaTitle(e.target.value)}
            placeholder={t.metaTitlePlaceholder}
            maxLength={60}
            className="border p-2 w-full rounded focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
          />
          <div className="text-xs text-gray-500 text-left mt-1">
            {metaTitle.length}/60 {t.characters}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">{t.metaDescription}</label>
          <textarea
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
            placeholder={t.metaDescriptionPlaceholder}
            maxLength={160}
            rows={3}
            className="border text-black p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="text-xs text-gray-500 text-left mt-1">
            {metaDescription.length}/160 {t.characters}
          </div>
        </div>
      </div>

      {/* بخش محتوا و تنظیمات */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold border-b pb-2">{t.contentTitle}</h2>

        <div>
          <label className="block text-sm font-medium mb-1">{t.articleTitle}</label>
          <input
            value={title}
            onChange={handleTitleChange}
            placeholder={t.articleTitlePlaceholder}
            className="border p-2 w-full rounded focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">{t.summary}</label>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder={t.summaryPlaceholder}
            rows={3}
            className="border p-2 text-black w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">{t.category}</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder={t.categoryPlaceholder}
              className="border p-2 w-full rounded focus:outline-none focus:ring-2 text-black focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t.tags}</label>
            <input
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder={t.tagsPlaceholder}
              className="border p-2 w-full rounded focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* تنظیمات مقاله */}
        <div className="mt-6 pt-4 border-t">
          <h3 className="text-lg font-semibold mb-4 text-black">{t.settingsTitle}</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="flex text-black items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                  className="rounded border-gray-300  text-blue-600  focus:ring-blue-500"
                />
                <span className="text-sm font-medium">{t.featured}</span>
              </label>
            </div>
            
            <div>
              <label className="block text-blue-600 text-sm font-medium mb-1">{t.status}:</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="border p-2 w-full text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="published">{t.statusOptions.published}</option>
                <option value="draft">{t.statusOptions.draft}</option>
                <option value="archived">{t.statusOptions.archived}</option>
              </select>
            </div>
          </div>
        </div>

        {/* نمایش زبان جاری */}
        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <div className="text-sm text-blue-700">
            <strong>زبان جاری:</strong> {languageName}
          </div>
          <div className="text-xs text-blue-600 mt-1">
            در حال ویرایش محتوای {languageName} مقاله
          </div>
        </div>
      </div>
    </div>
  );
}