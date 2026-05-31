"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect, useCallback, memo } from "react";
import { ChevronDown, Globe, Check } from "lucide-react";

const languages = [
  {
    code: "en",
    label: "English",
    flag: "/media/flags/us.svg",
    native: "English",
    short: "EN"
  },
  { 
    code: "fa", 
    label: "فارسی", 
    flag: "/media/flags/ir.svg", 
    native: "فارسی",
    short: "FA"
  },
  {
    code: "ku",
    label: "کوردی",
    flag: "/media/flags/kurd.png",
    native: "کوردی",
    short: "KU"
  },
];

const LanguageSwitcher = ({ 
  currentLang = "en", 
  isMobile = false,
  articleSlugs = null,
  theme = "dark" // اضافه کردن prop برای تم: "dark" یا "light"
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [lang, setLang] = useState(currentLang);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef(null);

  const currentLanguage = languages.find((l) => l.code === lang) || languages[0];

  // متغیرهای رنگ بر اساس تم
  const isDark = theme === "dark";
  
  const colors = {
    bg: isDark ? "bg-gray-900" : "bg-white",
    bgHover: isDark ? "hover:bg-gray-800" : "hover:bg-gray-100",
    text: isDark ? "text-white" : "text-gray-900",
    textSecondary: isDark ? "text-gray-300" : "text-gray-600",
    border: isDark ? "border-gray-700" : "border-gray-200",
    borderHover: isDark ? "border-gray-600" : "border-gray-300",
    shadow: isDark ? "shadow-lg shadow-black/20" : "shadow-lg shadow-gray-200/50",
    backdrop: isDark ? "bg-black/20" : "bg-white/95",
    accent: isDark ? "text-blue-400" : "text-blue-600",
    accentBg: isDark ? "bg-blue-400/20" : "bg-blue-50",
    accentBorder: isDark ? "border-blue-400/30" : "border-blue-200",
    placeholder: isDark ? "placeholder-gray-400" : "placeholder-gray-500",
    ring: isDark ? "ring-blue-400/30" : "ring-blue-500/30",
    ringOffset: isDark ? "ring-offset-gray-900" : "ring-offset-white",
  };

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // تغییر زبان - نسخه مستقیم و بدون پیچیدگی
  const handleChange = useCallback(
    (selectedLang) => {
      if (selectedLang === lang) {
        setOpen(false);
        return;
      }

      console.log("🔄 Changing language to:", selectedLang);
      console.log("📍 Current path:", pathname);
      console.log("📄 Article slugs:", articleSlugs);

      // استخراج پارامترها از مسیر فعلی
      const pathParts = pathname.split("/").filter(Boolean);
      console.log("📊 Path parts:", pathParts);

      let newPath = "";
      
      // بررسی آیا در صفحه مقاله هستیم (مسیر شامل articles است)
      const isArticlePage = pathname.includes("/articles/");
      
      if (isArticlePage && articleSlugs && articleSlugs[selectedLang]) {
        // اگر در صفحه مقاله هستیم و slug برای زبان جدید داریم
        const newSlug = articleSlugs[selectedLang];
        console.log("🎯 New slug for", selectedLang, ":", newSlug);
        
        // ساخت مسیر جدید
        newPath = `/${selectedLang}/articles/${newSlug}`;
      } else if (isArticlePage) {
        // اگر در صفحه مقاله هستیم اما slug نداریم
        if (pathParts.length >= 3) {
          const currentSlug = pathParts[2];
          newPath = `/${selectedLang}/articles/${currentSlug}`;
        }
      } else {
        // برای صفحات دیگر (غیر مقاله)
        if (pathParts.length > 0 && languages.some(l => l.code === pathParts[0])) {
          // اگر زبان در URL وجود دارد، آن را تغییر دهیم
          pathParts[0] = selectedLang;
        } else {
          // اگر زبان وجود ندارد، اضافه کنیم
          pathParts.unshift(selectedLang);
        }
        newPath = "/" + pathParts.join("/");
      }

      console.log("🚀 Navigating to:", newPath);

      setLang(selectedLang);
      setOpen(false);
      
      // تغییر مسیر
      if (newPath && newPath !== pathname) {
        router.push(newPath);
      } else {
        console.error("⚠️ New path is invalid or same as current!");
      }
    },
    [lang, pathname, router, articleSlugs]
  );

  // همگام‌سازی زبان با URL
  useEffect(() => {
    const pathParts = pathname.split("/").filter(Boolean);
    if (pathParts.length > 0) {
      const urlLang = pathParts[0];
      const validLang = languages.find((l) => l.code === urlLang);
      
      if (validLang && validLang.code !== lang) {
        console.log("🔄 Syncing lang from URL:", validLang.code);
        setLang(validLang.code);
      }
    }
  }, [pathname, lang]);

  // بستن منو با کلیک خارج
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // بستن منو با کلید Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleToggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  // Skeleton loading برای hydration
  if (!mounted) {
    return (
      <div 
        className={`
          relative ${isMobile ? "w-12 h-12" : "w-48 h-12"}
          rounded-xl animate-pulse
          ${isDark ? "bg-gray-800" : "bg-gray-200"}
        `} 
      />
    );
  }

  // رندر پرچم با fallback
  const renderFlag = (language, size = "medium") => {
    const sizeClass = size === "small" ? "w-5 h-5" : size === "large" ? "w-8 h-8" : "w-6 h-6";
    const borderClass = isDark ? "border-gray-600" : "border-gray-300";
    
    return (
      <img
        src={language.flag}
        alt={`${language.label} flag`}
        className={`${sizeClass} rounded-lg object-cover shadow-sm border ${borderClass}`}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 50'%3E%3Crect width='100' height='50' fill='%23${language.code === 'en' ? '3c3b6e' : language.code === 'fa' ? 'da0000' : '006600'}'/%3E%3Ctext x='50' y='30' font-family='Arial' font-size='20' fill='white' text-anchor='middle'%3E${language.short}%3C/text%3E%3C/svg%3E`;
        }}
      />
    );
  };

  // نسخه موبایل
  if (isMobile) {
    return (
      <div ref={dropdownRef} className="relative">
        <button
          onClick={handleToggle}
          className={`
            group flex items-center justify-center w-12 h-12
            ${colors.bg} ${colors.border} ${colors.shadow}
            rounded-xl hover:${colors.bgHover.replace('hover:', '')} 
            hover:${colors.borderHover.replace('hover:', '')}
            focus:outline-none focus:ring-2 ${colors.ring} focus:ring-offset-2
            focus:${colors.ringOffset.replace('focus:', '')}
            transition-all duration-200 ease-out
            hover:shadow-xl active:scale-95
            ${open ? `ring-2 ${colors.ring} ${colors.accentBorder}` : ""}
          `}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-label="تغییر زبان"
        >
          <div className="flex flex-col items-center justify-center gap-1">
            {renderFlag(currentLanguage, "small")}
            <span className={`text-xs font-medium ${colors.textSecondary}`}>
              {currentLanguage.short}
            </span>
          </div>
        </button>

        <div
          className={`
            fixed sm:absolute top-16 sm:top-full sm:left-0 sm:mt-2 
            w-[calc(100vw-2rem)] sm:w-48 ${colors.bg} ${colors.border}
            ${colors.shadow} rounded-xl z-50 overflow-hidden
            transition-all duration-200 ease-out
            ${
              open
                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
            }
          `}
          role="listbox"
          aria-label="منوی انتخاب زبان"
        >
          <div className="p-2 space-y-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleChange(language.code)}
                className={`
                  w-full flex items-center gap-3 px-3 py-3 rounded-lg
                  transition-all duration-150 ease-out
                  ${language.code === lang 
                    ? `${colors.accentBg} ${colors.text} border ${colors.accentBorder}` 
                    : `${colors.text} hover:${colors.bgHover.replace('hover:', '')} ${colors.borderHover}`
                  }
                `}
                role="option"
                aria-selected={language.code === lang}
              >
                {renderFlag(language)}
                <span className="text-sm font-medium flex-1 text-right">
                  {language.native}
                </span>
                {language.code === lang && (
                  <Check className={`w-4 h-4 ${colors.accent} flex-shrink-0`} />
                )}
              </button>
            ))}
          </div>
        </div>

        {open && (
          <div
            className={`fixed inset-0 ${isDark ? "bg-black/30" : "bg-black/10"} backdrop-blur-sm z-40`}
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
        )}
      </div>
    );
  }

  // نسخه دسکتاپ و تبلت (ریسپانسیو)
  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={handleToggle}
        className={`
          group flex items-center justify-between w-full 
          min-w-[140px] max-w-[200px] md:max-w-[220px]
          px-3 sm:px-4 py-2.5 ${colors.bg} ${colors.border} ${colors.shadow}
          rounded-xl md:rounded-2xl hover:${colors.bgHover.replace('hover:', '')}
          hover:${colors.borderHover.replace('hover:', '')}
          focus:outline-none focus:ring-2 ${colors.ring} focus:ring-offset-2
          focus:${colors.ringOffset.replace('focus:', '')}
          transition-all duration-200 ease-out
          hover:shadow-xl active:scale-95
          ${open ? `ring-2 ${colors.ring} ${colors.accentBorder}` : ""}
        `}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="تغییر زبان"
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <Globe className={`w-4 h-4 ${colors.textSecondary} group-hover:${colors.text.replace('hover:', '')} transition-colors`} />
          <div className="flex items-center gap-2">
            {renderFlag(currentLanguage)}
            <span className={`${colors.text} font-medium text-sm whitespace-nowrap hidden sm:block`}>
              {currentLanguage.native}
            </span>
            <span className={`${colors.text} font-medium text-sm whitespace-nowrap sm:hidden`}>
              {currentLanguage.short}
            </span>
          </div>
        </div>
        <ChevronDown
          className={`
            w-4 h-4 ${colors.textSecondary} group-hover:${colors.text.replace('hover:', '')} 
            transition-all duration-200 flex-shrink-0
            ${open ? "rotate-180" : ""}
          `}
        />
      </button>

      <div
        className={`
          absolute top-full mt-2 w-full min-w-[180px] sm:min-w-[200px]
          ${colors.bg} ${colors.border} ${colors.shadow} rounded-xl md:rounded-2xl 
          z-50 overflow-hidden transition-all duration-200 ease-out
          ${
            open
              ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }
        `}
        role="listbox"
        aria-label="منوی انتخاب زبان"
      >
        <div className={`p-3 border-b ${colors.border}`}>
          <div className={`text-sm font-semibold ${colors.text} flex items-center gap-2`}>
            <Globe className={`w-4 h-4 ${colors.textSecondary}`} />
            انتخاب زبان
          </div>
        </div>
        <div className="p-2 space-y-1">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleChange(language.code)}
              className={`
                w-full flex items-center gap-3 px-3 py-3 rounded-lg
                transition-all duration-150 ease-out
                ${language.code === lang 
                  ? `${colors.accentBg} ${colors.text} border ${colors.accentBorder}` 
                  : `${colors.text} hover:${colors.bgHover.replace('hover:', '')} ${colors.borderHover}`
                }
              `}
              role="option"
              aria-selected={language.code === lang}
            >
              {renderFlag(language, "large")}
              <div className="flex-1 text-right">
                <div className="font-medium text-sm">
                  {language.native}
                </div>
                <div className={`text-xs ${colors.textSecondary}`}>
                  {language.label}
                </div>
              </div>
              {language.code === lang && (
                <Check className={`w-4 h-4 ${colors.accent} flex-shrink-0`} />
              )}
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div
          className={`fixed inset-0 ${isDark ? "bg-black/30" : "bg-black/10"} backdrop-blur-sm z-40`}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default memo(LanguageSwitcher);