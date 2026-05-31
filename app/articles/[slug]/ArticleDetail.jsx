import {
  Clock,
  Calendar,
  Eye,
  TrendingUp,
  ChevronLeft,
  MessageCircle,
  Layers,
  Code,
  Headset,
  Bookmark,
} from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Client Components (لود داینامیک)
const ScrollProgressBar = dynamic(() => import("./ScrollProgressBar"));
const TocNav = dynamic(() => import("./TocNav"));

// تابع کمکی مسیر تصویر
const getImageUrl = (url, apiBaseUrl = "https://hezaragencyback.liara.run") => {
  if (!url) return "/placeholder.jpg";
  return url.startsWith("http") ? url : `${apiBaseUrl}${url.startsWith("/") ? "" : "/"}${url}`;
};

// اجزای ثابت
const TextBlock = ({ data }) => (
  <div
    className="prose prose-blue max-w-none mb-10 text-gray-700 leading-[2.2] prose-headings:font-black prose-headings:text-gray-900 prose-h2:text-2xl prose-h2:border-r-4 prose-h2:border-blue-600 prose-h2:pr-4 prose-h2:mt-12 prose-h3:text-xl prose-p:text-lg prose-p:mb-6"
    dangerouslySetInnerHTML={{ __html: data?.fa || data || "" }}
  />
);

const ImageBlock = ({ data }) => {
  const url = getImageUrl(data?.url || data);
  const altText = data?.alt || "محتوای مقاله";
  if (!url) return null;
  return (
    <figure className="my-6 sm:my-12 overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-100 shadow-lg sm:shadow-xl">
      <img 
        src={url} 
        alt={altText} 
        className="w-full h-auto max-h-[300px] sm:max-h-[500px] object-cover"
        loading="lazy"
        decoding="async"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
      />
    </figure>
  );
};

// ✅ کامپوننت جدید برای بلوک FAQ
const FAQBlock = ({ data }) => {
  // داده‌های FAQ می‌توانند در ساختارهای مختلفی باشند
  let items = [];
  
  if (data?.fa?.items) {
    items = data.fa.items;
  } else if (data?.items) {
    items = data.items;
  } else if (Array.isArray(data)) {
    items = data;
  }

  if (!items || items.length === 0) return null;

  return (
    <div className="my-8 sm:my-16 p-6 sm:p-8 bg-gradient-to-br from-blue-50 to-indigo-50/30 rounded-3xl sm:rounded-[2.5rem] border border-blue-100">
      <h2 className="text-xl sm:text-2xl font-black mb-6 sm:mb-8 flex items-center gap-3 text-gray-900">
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" /> 
        <span>سوالات متداول</span>
      </h2>
      <div className="space-y-3 sm:space-y-4">
        {items.map((item, idx) => (
          <details 
            key={idx} 
            className="group bg-white rounded-xl sm:rounded-2xl border border-blue-100 overflow-hidden hover:border-blue-200 transition-colors"
          >
            <summary className="p-4 sm:p-5 font-bold text-gray-800 cursor-pointer list-none flex justify-between items-center text-sm sm:text-base hover:text-blue-600">
              <span className="text-sm sm:text-base flex-1">{item.question || "سوال"}</span>
              <span className="transition-transform duration-300 group-open:rotate-45 text-lg sm:text-xl text-blue-600">+</span>
            </summary>
            <div className="px-4 sm:px-5 pb-5 sm:pb-6 text-gray-600 border-t border-blue-50 pt-4 sm:pt-5 text-sm sm:text-base leading-relaxed">
              {item.answer || "پاسخ"}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};

// کامپوننت مجزا برای بخش آخرین مطالب
const RecentArticlesSidebar = ({ recentArticles, getImageUrl }) => (
  <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-100">
    <h4 className="font-black text-gray-900 flex items-center gap-2 mb-8 text-sm sm:text-base">
      <div className="p-1.5 bg-blue-50 rounded-lg">
        <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
      </div>
      آخرین مطالب آموزشی
    </h4>
    <div className="space-y-6">
      {recentArticles.slice(0, 3).map((item, idx) => (
        <Link key={idx} href={`/articles/${item.slug?.fa || item.slug}`} className="group block">
          <div className="flex gap-3 sm:gap-4 items-center">
            <img
              src={getImageUrl(item.poster)}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl object-cover"
              alt={item.languages?.fa?.title || item.title || "مقاله آموزشی"}
              loading="lazy"
              sizes="(max-width: 640px) 56px, 64px"
            />
            <div className="flex-1 min-w-0">
              <h5 className="text-xs sm:text-[11px] font-bold text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors">
                {item.languages?.fa?.title || item.title}
              </h5>
              <div className="flex items-center gap-1 mt-1 opacity-40 text-[9px] sm:text-[9px]">
                <Clock className="w-3 h-3" /> ۵ دقیقه
              </div>
            </div>
          </div>
        </Link>
      ))}
      <Link href="/blog" className="group w-full flex items-center justify-between p-3 rounded-2xl bg-gray-50 hover:bg-blue-600 transition-all">
        <span className="text-xs sm:text-[11px] font-black text-gray-600 group-hover:text-white">مشاهده همه</span>
        <ChevronLeft className="w-4 h-4 text-gray-400 group-hover:text-white" />
      </Link>
    </div>
  </div>
);

export default function ArticleDetail({ article, recentArticles = [] }) {
  const title = article?.languages?.fa?.title || article?.title || "";
  const blocks = article?.languages?.fa?.blocks || [];
  const createdAt = article?.createdAt?.$date || article?.createdAt || new Date();
  const views = article?.views || 0;
  const poster = getImageUrl(article?.poster);

  const tocItems = blocks
    .map((block, index) => {
      if (block.type === "text") {
        const html = block.data?.fa || block.data || "";
        const match = html.match(/<(h[23])[^>]*>(.*?)<\/h[23]>/i);
        if (match) return { id: index, text: match[2].replace(/<[^>]*>/g, "").trim() };
      }
      return null;
    })
    .filter(Boolean);

  return (
    <div className="rtl font-sans bg-[#f0f2f5] pb-20 text-right mt-[3rem]" dir="rtl">
      <ScrollProgressBar />

      <div className="max-w-[1440px] mx-auto px-4 md:px-6 grid lg:grid-cols-12 gap-8 sm:gap-10 pt-12 sm:pt-16">
        {/* سایدبار TOC - فقط در دسکتاپ */}
        <aside className="hidden xl:block xl:col-span-2 sticky top-24 h-fit">
          <TocNav items={tocItems} />
        </aside>

        {/* محتوای اصلی */}
        <main className="lg:col-span-8 xl:col-span-7 bg-white p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[3rem] shadow-sm">
          <header className="mb-8 sm:mb-12">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-tight mb-6 sm:mb-8">
              {title}
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-[12px] text-gray-400 mb-8 sm:mb-10">
              <span className="flex items-center gap-1 bg-gray-50 px-3 py-1.5 rounded-lg">
                <Calendar className="w-3.5 h-3.5" /> {new Date(createdAt).toLocaleDateString("fa-IR")}
              </span>
              
            </div>

            {/* پوستر مقاله */}
            {poster && (
              <figure className="my-6 sm:my-8 overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-100 shadow-lg sm:shadow-xl">
                <img 
                  src={poster} 
                  alt={title} 
                  className="w-full h-auto max-h-[300px] sm:max-h-[500px] object-cover"
                  loading="eager"
                  decoding="async"
                  sizes="(max-width: 640px) 100vw, 80vw"
                />
              </figure>
            )}
          </header>

          <article>
            {blocks.map((block, i) => (
              <div key={i} id={`block-${i}`}>
                {block.type === "text" && <TextBlock data={block.data} />}
                {block.type === "image" && <ImageBlock data={block.data} />}
                {/* ✅ اضافه کردن پشتیبانی از بلوک FAQ */}
                {block.type === "faq" && <FAQBlock data={block.data} />}
              </div>
            ))}
          </article>
        </main>

        {/* سایدبار خدمات - فقط در دسکتاپ */}
        <aside className="hidden lg:block lg:col-span-4 xl:col-span-3 sticky top-24 h-fit space-y-8">
          {/* خدمات */}
          <div className="bg-[#f0f2f5] p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] shadow-[20px_20px_60px_#ccced0,-20px_-20px_60px_#ffffff]">
            <h4 className="font-black text-gray-800 flex items-center gap-2 mb-6 sm:mb-8 text-sm">
              <Bookmark className="w-4 h-4 text-blue-600" /> خدمات ما
            </h4>
            <div className="space-y-4 sm:space-y-5">
              {[
                { title: "سایت سه بعدی", icon: <Layers /> },
                { title: "طراحی سایت", icon: <Code /> },
                { title: "پشتیبانی سایت", icon: <Headset /> },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#f0f2f5] shadow-[6px_6px_12px_#d1d3d5,-6px_-6px_12px_#ffffff] hover:shadow-inner transition-all cursor-pointer group">
                  <div className="text-blue-600 group-hover:scale-110 transition-transform">
                    {s.icon}
                  </div>
                  <span className="text-xs sm:text-[13px] font-bold text-gray-700">{s.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* آخرین مطالب (دسکتاپ) */}
          <RecentArticlesSidebar recentArticles={recentArticles} getImageUrl={getImageUrl} />
        </aside>
      </div>

      {/* بخش آخرین مطالب برای موبایل - در انتهای صفحه */}
      <div className="lg:hidden mt-10 px-4 md:px-6 max-w-[1440px] mx-auto">
        <RecentArticlesSidebar recentArticles={recentArticles} getImageUrl={getImageUrl} />
      </div>
    </div>
  );
}