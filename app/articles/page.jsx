import React from "react";
import { headers } from "next/headers";
import Header from "../servercomponents/HeaderServer";
import Footer from "../components/FooterServer";
import ArticleCard from "./ArticleCard";
import ArticleFilters from "./ArticleFilters";

export async function generateMetadata() {
  const url = "/articles";

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

// تابع کمکی برای استخراج امن محتوا
const getSafeContent = (article, field, lang = "fa") => {
  if (!article) return "";

  const val =
    article?.languages?.[lang]?.[field] ||
    article?.[field]?.[lang] ||
    article?.[field];

  return typeof val === "string" ? val : "";
};

async function fetchArticles() {
  try {
    console.log("--- 🚀 START FETCHING ARTICLES ---");

    const headersList = await headers();
    const host = headersList.get("host");

    if (!host) {
      throw new Error("Host header not found");
    }

    const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

    const apiUrl = `${protocol}://${host}/api/articles`;

    console.log("🌐 API URL:", apiUrl);

    const res = await fetch(apiUrl, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      console.error(`❌ HTTP Error: ${res.status}`);
      return {
        articles: [],
        error: `HTTP ${res.status}`,
        raw: null,
      };
    }

    const rawData = await res.json();

    let finalArticles = [];

    if (Array.isArray(rawData)) {
      finalArticles = rawData;
    } else if (rawData?.articles && Array.isArray(rawData.articles)) {
      finalArticles = rawData.articles;
    } else if (rawData?.data && Array.isArray(rawData.data)) {
      finalArticles = rawData.data;
    }

    console.log(`✅ SUCCESS: Found ${finalArticles.length} articles`);

    return {
      articles: finalArticles,
      error: null,
      raw: rawData,
    };
  } catch (err) {
    console.error("🔥 FETCH CRASHED:", err.message);
    return {
      articles: [],
      error: err.message || "Unknown fetch error",
      raw: null,
    };
  }
}

export default async function ArticlesPage({ searchParams }) {
  const resolvedParams = searchParams || {};
  const search = resolvedParams?.search || "";
  const category = resolvedParams?.category || "all";

  const { articles, error, raw } = await fetchArticles();

  const filtered = articles.filter((art) => {
    const status = (art?.status || "").toLowerCase().trim();
    const isPublished = status === "published";

    const title = getSafeContent(art, "title").toLowerCase();
    const matchesSearch = title.includes(search.toLowerCase());

    // اگر بعداً category واقعی داشتی اینجا فعالش کن
    const articleCategory =
      art?.category?.slug ||
      art?.category ||
      art?.categories?.[0]?.slug ||
      "all";

    const matchesCategory = category === "all" || articleCategory === category;

    return isPublished && matchesSearch && matchesCategory;
  });

  return (
    <>
      <Header />

      <main className="min-h-screen mt-[8rem] pb-20 pt-10">
        <div className="max-w-7xl mx-auto px-4">
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
                  <p>دسته‌بندی انتخاب شده: {category}</p>
                  <p>عبارت جستجو: {search || "ندارد"}</p>
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

              {raw && (
                <div className="bg-slate-800 p-3 rounded mt-4">
                  <p className="text-yellow-300 underline mb-2">
                    ساختار کامل پاسخ API:
                  </p>
                  <pre className="text-[10px] text-gray-400 overflow-auto max-h-64">
                    {JSON.stringify(raw, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          )}

          <div className="text-center mb-12">
            <h1 className="text-4xl font-black text-gray-900 mb-4">
              مجله تخصصی تکنولوژی، طراحی سایت و سئو
            </h1>

            <p className="text-gray-500 mb-8">
              آخرین اخبار و مقالات دنیای تکنولوژی
            </p>

            <ArticleFilters translations={{}} />
          </div>

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
                  key={article?._id?.$oid || article?._id || Math.random()}
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
