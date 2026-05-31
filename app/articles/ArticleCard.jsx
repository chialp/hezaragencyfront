import Link from "next/link";
import { Calendar,  ChevronLeft, BookOpen } from "lucide-react";

// تابع ایمن‌سازی دیتا (رفع خطای Objects are not valid)
const getSafe = (data, field, lang = "fa") => {
  if (!data) return "";

  // 1. اگر مستقیماً رشته بود
  if (typeof data === "string") return data;

  // 2. تلاش برای خواندن از ساختار languages.fa.field
  if (data.languages?.[lang]?.[field]) return data.languages[lang][field];

  // 3. تلاش برای خواندن از ساختار field.fa (مثل slug یا meta)
  if (data[field]?.fa) return data[field].fa;
  if (data[field]?.[lang]) return data[field][lang];

  // 4. اگر خود فیلد ارسال شده و آبجکت است (مثلا title={fa: "..."})
  if (typeof data === "object" && data[lang]) return data[lang];
  if (typeof data === "object" && data.fa) return data.fa;

  return "";
};

const ArticleCard = ({
  article,
  lang = "fa",
  apiBaseUrl = "https://hezaragencyback.liara.run",
}) => {
  // استخراج امن دیتا
  const title = getSafe(article, "title", lang) || "بدون عنوان";
  const summary = getSafe(article, "summary", lang);
  const rawSlug = getSafe(article, "slug", lang) || article._id;
  const slug = typeof rawSlug === "string" ? rawSlug : JSON.stringify(rawSlug); // محکم کاری نهایی

  // مدیریت تاریخ
  const date = article.createdAt
    ? new Date(article.createdAt).toLocaleDateString("fa-IR")
    : "";

  // مدیریت تصویر
  const posterPath = article.poster || "";
  const imageUrl = posterPath.startsWith("http")
    ? posterPath
    : `${apiBaseUrl}${posterPath.startsWith("/") ? "" : "/"}${posterPath}`;

  return (
    <div className="h-full p-4">
      <Link
        href={`/articles/${slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-[30px] bg-[#E0E5EC] text-gray-700 transition-all duration-300
        /* استایل پایه نئومورفیسم */
        shadow-[9px_9px_16px_rgb(163,177,198,0.5),-9px_-9px_16px_rgba(255,255,255,0.5)]
        /* افکت هاور: کارت کمی بالا می‌آید */
        hover:-translate-y-2 hover:shadow-[12px_12px_20px_rgb(163,177,198,0.6),-12px_-12px_20px_rgba(255,255,255,0.6)]"
      >
        {/* قاب عکس: فرورفتگی ظریف (Pressed Look) */}
        <div className="m-3 overflow-hidden rounded-[25px] border-4 border-[#E0E5EC] shadow-[inset_3px_3px_6px_#b8b9be,inset_-3px_-3px_6px_#ffffff]">
          <div className="relative aspect-video w-full overflow-hidden bg-gray-200">
            {article.poster ? (
              <img
                src={imageUrl}
                alt={title}
                width={600}
                height={340}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-gray-400">
                <BookOpen className="h-10 w-10 opacity-50" />
              </div>
            )}

            {/* برچسب دسته‌بندی شیشه‌ای */}
            {article.category && typeof article.category === "string" && (
              <div className="absolute top-3 right-3 rounded-xl bg-[#E0E5EC]/80 backdrop-blur-md px-3 py-1 text-xs font-bold text-blue-600 shadow-sm">
                {article.category}
              </div>
            )}
          </div>
        </div>

        {/* بدنه کارت */}
        <div className="flex flex-grow flex-col px-6 pt-2 pb-6">
          <div className="mb-4 flex items-center justify-between text-[11px] font-medium text-gray-500">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-blue-500" />
              <span>{date}</span>
            </div>
           
          </div>

          <h3 className="mb-3 text-lg font-black leading-tight text-gray-800 transition-colors group-hover:text-blue-700 line-clamp-2">
            {title}
          </h3>

          <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-gray-500 text-justify">
            {summary}
          </p>

          {/* دکمه پایین */}
          <div className="mt-auto pt-4 flex justify-end">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E0E5EC] text-blue-500 
             shadow-[5px_5px_10px_#b8b9be,-5px_-5px_10px_#ffffff] 
             transition-all group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.2)]"
            >
              <ChevronLeft className="h-5 w-5" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
