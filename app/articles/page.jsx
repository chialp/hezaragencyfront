import React from "react";
import Header from "../servercomponents/HeaderServer";
import Footer from "../components/FooterServer";
import ArticleCard from "./ArticleCard";
import ArticleFilters from "./ArticleFilters";
export async function generateMetadata() {
  const url = "https://hezaragencyback.liara.run/articles";

  return {
    title: "مجله تکنولوژی هزار | اخبار و مقالات تخصصی وب و سئو",
    description:
      "جدیدترین مقالات تخصصی طراحی سایت، سئو، توسعه وب و تکنولوژی را در مجله هزار بخوانید.",
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "مجله تکنولوژی هزار",
      description: "آخرین مقالات تخصصی در حوزه طراحی سایت، سئو و توسعه وب",
      url: url,
      siteName: "Hezar Agency",
      locale: "fa_IR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "مجله تکنولوژی هزار",
      description: "مقالات تخصصی طراحی سایت و سئو",
    },
  };
}
// تابع کمکی برای استخراج امن محتوا (مطابق JSON شما: languages.fa.title)
const getSafeContent = (article, field, lang = "fa") => {
  if (!article) return "";
  const val =
    article.languages?.[lang]?.[field] ||
    article[field]?.[lang] ||
    article[field];
  return typeof val === "string" ? val : "";
};

async function fetchArticles() {
  const apiUrl = "https://hezaragencyback.liara.run/api/articles";

  try {
    console.log("--- 🚀 START FETCHING ---");
    const res = await fetch(apiUrl, {
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      console.error(`❌ HTTP Error: ${res.status}`);
      return { articles: [], error: `HTTP ${res.status}`, raw: null };
    }

    const rawData = await res.json();

    // شناسایی ساختار (ممکن است مستقیم آرایه باشد یا داخل کلید articles)
    let finalArticles = [];
    if (Array.isArray(rawData)) {
      finalArticles = rawData;
    } else if (rawData.articles && Array.isArray(rawData.articles)) {
      finalArticles = rawData.articles;
    } else if (rawData.data && Array.isArray(rawData.data)) {
      finalArticles = rawData.data;
    }

    console.log(`✅ SUCCESS: Found ${finalArticles.length} articles`);
    return { articles: finalArticles, error: null, raw: rawData };
  } catch (err) {
    console.error("🔥 FETCH CRASHED:", err.message);
    return { articles: [], error: err.message, raw: null };
  }
}

export default async function ArticlesPage({ searchParams }) {
  const resolvedParams = await searchParams;
  const search = resolvedParams?.search || "";
  const category = resolvedParams?.category || "all";

  const { articles, error, raw } = await fetchArticles();

  // فیلتر کردن مقالات بر اساس دیتای واقعی شما
  const filtered = articles.filter((art) => {
    // حذف حساسیت به حروف بزرگ در status
    const status = (art.status || "").toLowerCase().trim();
    const isPublished = status === "published";

    const title = getSafeContent(art, "title").toLowerCase();
    const matchesSearch = title.includes(search.toLowerCase());

    return isPublished && matchesSearch;
  });

  return (
    <>
      <Header />
      <main className="min-h-screen  mt-[8rem] pb-20 pt-10">
        <div className="max-w-7xl mx-auto px-4">
          {/* --- 🛠 پنل عیب‌یابی (Debugger) --- */}
          {(articles.length === 0 || error) && (
            <div className="mb-10 p-6 bg-slate-900 text-white rounded-2xl shadow-2xl overflow-hidden border-2 border-red-500">
              <h2 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                ⚠️ گزارش عیب‌یابی سرور
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono">
                <div className="bg-slate-800 p-3 rounded">
                  <p className="text-blue-300 underline mb-2">وضعیت درخواست:</p>
                  <p>خطای سیستمی: {error || "ندارد"}</p>
                  <p>تعداد کل مقالات خام: {articles.length}</p>
                  <p>تعداد فیلتر شده (Published): {filtered.length}</p>
                </div>
                <div className="bg-slate-800 p-3 rounded">
                  <p className="text-green-300 underline mb-2">
                    نمونه ساختار اولین دیتا:
                  </p>
                  <pre className="text-[10px] text-gray-400 overflow-auto max-h-40">
                    {articles.length > 0
                      ? JSON.stringify(articles[0], null, 2)
                      : "هیچ دیتایی دریافت نشد که نمایش دهیم."}
                  </pre>
                </div>
              </div>
            </div>
          )}

          <div className="text-center mb-12">
            <h1 className="text-4xl font-black text-gray-900 mb-4">
              مجله تخصصی تکنولوژی، طراحی سایت و سئو
            </h1>{" "}
            <p className="text-gray-500 mb-8">
              آخرین اخبار و مقالات دنیای تکنولوژی
            </p>
            <ArticleFilters translations={{}} />
          </div>

          {/* --- 📑 نمایش مقالات --- */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300 shadow-inner">
              <div className="text-5xl mb-4">Empty 🗑️</div>
              <p className="text-gray-400 text-lg font-medium">
                مقاله‌ای با این مشخصات یافت نشد.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((article) => (
                <ArticleCard
                  key={article._id?.$oid || article._id}
                  article={article}
                  lang="fa"
                />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
