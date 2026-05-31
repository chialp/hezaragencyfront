// app/sitemap.js

export const revalidate = 3600; // خود فایل هم هر 1 ساعت رفرش شود

export default async function sitemap() {
  const baseUrl = "https://hezaragency.com";

  let articles = [];

  try {
    const res = await fetch(
      "https://hezaragencyback.liara.run/api/articles",
      {
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) return [];

    const data = await res.json();

    articles =
      data.data ||
      data.articles ||
      (Array.isArray(data) ? data : []);
  } catch (error) {
    console.error("SITEMAP FETCH ERROR:", error);
  }

  // -------------------------
  // صفحات ثابت
  // -------------------------
  const staticPages = [
    { route: "", priority: 1.0, changeFrequency: "daily" },
    { route: "/articles", priority: 0.9, changeFrequency: "daily" },
    { route: "/web", priority: 0.8, changeFrequency: "monthly" },
    { route: "/seo", priority: 0.8, changeFrequency: "monthly" },
    { route: "/3d", priority: 0.8, changeFrequency: "monthly" },
    { route: "/aboutus", priority: 0.6, changeFrequency: "yearly" },
    { route: "/contact", priority: 0.6, changeFrequency: "yearly" },
    { route: "/support", priority: 0.6, changeFrequency: "yearly" },
  ].map((page) => ({
    url: `${baseUrl}${page.route}`,
    lastModified: new Date("2026-01-01"), // ثابت، نه هر بار build
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  // -------------------------
  // صفحات داینامیک مقالات
  // -------------------------
  const articlePages = articles
    .filter(
      (article) =>
        article.status?.toLowerCase() === "published" &&
        article.slug?.fa &&
        !article.noindex
    )
    .map((article) => ({
      url: `${baseUrl}/articles/${article.slug.fa}`,
      lastModified: new Date(
        article.updatedAt || article.createdAt || Date.now()
      ),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return [...staticPages, ...articlePages];
}