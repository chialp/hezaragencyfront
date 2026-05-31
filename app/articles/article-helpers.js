export const formatDate = (dateString, lang) => {
  if (!dateString) return "تاریخ نامشخص";
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString(
      lang === "fa" ? "fa-IR" : lang === "ku" ? "ar-IQ" : "en-US",
      { year: "numeric", month: "short", day: "numeric" }
    );
  } catch {
    return dateString;
  }
};

export const getLocalizedContent = (article, lang, field) => {
  if (!article) return "";
  const langPriority = [lang, "fa", "en", "ku"];
  for (const currentLang of langPriority) {
    if (article.languages?.[currentLang]?.[field]) {
      return article.languages[currentLang][field];
    }
  }
  if (field === "title" && article.title) return article.title;
  if (field === "summary" && article.summary) return article.summary;
  return "";
};

export const getTags = (article, lang) => {
  const langPriority = [lang, "fa", "en", "ku"];
  for (const currentLang of langPriority) {
    if (article.tags?.[currentLang]) return article.tags[currentLang];
  }
  return Array.isArray(article.tags) ? article.tags : [];
};

export const getReadingTime = (article, lang) => {
  const blocks = getLocalizedContent(article, lang, "blocks") || [];
  if (!blocks.length && article.wordCount) {
    return Math.max(1, Math.ceil(article.wordCount / 200));
  }
  // Simplified for server logic (avoid heavy parsing if not needed)
  return 5; 
};

export const getSlug = (article, lang) => {
  if (!article) return "";
  if (typeof article.slug === "string" && article.slug.trim()) return article.slug.trim();
  if (typeof article.slug === "object" && article.slug !== null) {
    if (article.slug[lang]) return article.slug[lang].trim();
    if (article.slug.fa) return article.slug.fa.trim();
  }
  return article._id || "article";
};