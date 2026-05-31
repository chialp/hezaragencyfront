"use client";

import { useState, useTransition } from "react";
import { Search, X, Loader2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function ArticleFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // برای مدیریت وضعیت لودینگ در سمت کلاینت
  const [isPending, startTransition] = useTransition();

  // مقدار اولیه اینپوت از URL خوانده می‌شود
  const [search, setSearch] = useState(searchParams.get("search") || "");

  // تابع اصلی برای آپدیت کردن URL
  const updateSearch = (value) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    // استفاده از startTransition باعث می‌شود UI فریز نشود
    startTransition(() => {
      router.push(`/articles?${params.toString()}`, { scroll: false });
    });
  };

  // ایجاد تاخیر (Debounce) برای جلوگیری از ارسال درخواست‌های زیاد به سرور
  const debouncedSearch = useDebouncedCallback((value) => {
    updateSearch(value);
  }, 600);

  const onSearchChange = (e) => {
    const val = e.target.value;
    setSearch(val);
    debouncedSearch(val);
  };

  const resetSearch = () => {
    setSearch("");
    startTransition(() => {
      router.push("/articles");
    });
  };

  return (
    <div className="mx-auto mb-10 w-full max-w-4xl px-4">
      <div className={`rounded-[30px] bg-[#E0E5EC] p-4 shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] transition-all ${isPending ? 'opacity-70' : ''}`}>
        
        <div className="relative flex items-center">
          
          {/* نمایش آیکون لودینگ در هنگام پردازش، در غیر این صورت آیکون ذره‌بین */}
          <div className="absolute right-4">
            {isPending ? (
              <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />
            ) : (
              <Search className="w-5 h-5 text-gray-400" />
            )}
          </div>

          <input
            type="text"
            value={search}
            onChange={onSearchChange}
            placeholder="جستجو در بین مقالات و تگ‌ها..."
            className="w-full rounded-2xl bg-[#E0E5EC] py-4 pr-12 pl-12 text-gray-600 focus:outline-none shadow-[inset_6px_6px_12px_#b8b9be,inset_-6px_-6px_12px_#ffffff] placeholder:text-gray-400"
          />

          {/* دکمه پاکسازی جستجو */}
          {search && (
            <button 
              onClick={resetSearch}
              className="absolute left-4 p-2 rounded-full hover:bg-gray-200 transition-colors text-red-400"
              title="پاکسازی"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* متن راهنمای وضعیت لودینگ (اختیاری) */}
        {isPending && (
          <p className="text-[10px] text-blue-500 mt-2 text-center animate-pulse">
            در حال جستجو...
          </p>
        )}
      </div>
    </div>
  );
}