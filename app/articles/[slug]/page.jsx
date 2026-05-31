// app/articles/[slug]/page.jsx
import Header from "../../servercomponents/HeaderServer";
import ArticleDetail from "./ArticleDetail";
import Footer from "../../components/FooterServer";

// ==================== METADATA ====================
export async function generateMetadata({ params }) {
  const { slug } = await params;   // ✅ درست
  const data = await getArticleData(slug);
  const article = data?.article;

  if (!article) {
    return {
      title: "مقاله یافت نشد | هزار",
      description: "این مقاله در دسترس نیست.",
      robots: { index: false, follow: false },
      alternates: { canonical: `https://hezaragencyback.liara.run/articles/${slug}` },
    };
  }

  const fa = article.languages?.fa || {};
  const title = article.metaTitle?.fa || fa.title || "هزار";
  const description = article.metaDescription?.fa || fa.summary || "";
  const canonicalUrl = `https://hezaragencyback.liara.run/articles/${article.slug?.fa || slug}`;

  return {
    title,
    description,
    keywords: article.tags?.fa?.join(", ") || "",
    robots: {
      index: article.noindex === false,
      follow: article.nofollow === false,
    },
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: "article",
      title,
      description,
      url: canonicalUrl,
      images: [{ url: article.poster, alt: title }],
      locale: "fa_IR",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [article.poster],
    },
  };
}

// ==================== FETCH DATA ====================
async function getArticleData(slug) {
  try {
    const res = await fetch(
      `https://hezaragencyback.liara.run/api/articles/post/${slug}`,
      { cache: "no-store" }
    );

    if (!res.ok) return null;

    const data = await res.json();
    const article = data.data || data.article || data;

    const recentRes = await fetch(
      `https://hezaragencyback.liara.run/api/articles?limit=3`,
      { cache: "no-store" }
    );

    const recentData = await recentRes.json();
    const recentArticles =
      recentData.data ||
      recentData.articles ||
      (Array.isArray(recentData) ? recentData : []);

    return { article, recentArticles };
  } catch (error) {
    console.error("Error fetching article data:", error);
    return null;
  }
}
// ==================== PAGE COMPONENT ====================
export default async function ArticlePage({ params }) {
  const { slug } = await params
  const data = await getArticleData(slug);

  if (!data || !data.article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-2xl font-bold font-sans">مقاله یافت نشد</p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <ArticleDetail article={data.article} recentArticles={data.recentArticles} />
      <Footer variant="article" />
    </>
  );
}
