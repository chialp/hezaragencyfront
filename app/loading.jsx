"use client";

import React, { useState, useEffect } from "react";

export default function Loading() {
  const [progress, setProgress] = useState(0);

  // شبیه‌سازی پر شدن لودینگ (اختیاری - برای زیبایی بصری)
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[999] bg-[#f0f2f5] flex flex-col items-center justify-center rtl" dir="rtl">
      <div className="relative flex items-center justify-center">
        
        {/* المان متحرک مرکزی - پالس‌های نوری */}
        <div className="absolute w-64 h-64 bg-blue-600/5 rounded-full animate-ping" />
        <div className="absolute w-48 h-48 bg-blue-500/10 rounded-full animate-pulse" />
        
        {/* لوگو یا نماد آژانس هزار (در اینجا به صورت متنی و مدرن) */}
        <div className="relative bg-[#f0f2f5] p-10 rounded-[3rem] shadow-[20px_20px_60px_#ccced0,-20px_-20px_60px_#ffffff] flex flex-col items-center">
          <div className="mb-6 flex gap-1">
            {[...Array(3)].map((_, i) => (
              <span 
                key={i}
                className="w-2 h-8 bg-blue-600 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
          
          <h2 className="text-2xl font-black text-gray-800 tracking-tighter">
            آژانس <span className="text-blue-600">هزار</span>
          </h2>
          
          {/* نمایش درصد لودینگ */}
          <div className="mt-4 flex flex-col items-center">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
              در حال پردازش مسیر
            </span>
            <div className="text-3xl font-black text-gray-900 tabular-nums">
              {progress}%
            </div>
          </div>
        </div>
      </div>

      {/* نوار پیشرفت باریک در پایین صفحه */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-gray-200">
        <div 
          className="h-full bg-blue-600 transition-all duration-300 ease-out shadow-[0_0_15px_rgba(37,99,235,0.5)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* متن متغیر (جملات انگیزشی آژانس) */}
      <p className="absolute bottom-12 text-gray-400 text-sm font-medium animate-pulse">
        فراتر از یک ایده، در حال خلق تجربه...
      </p>

      <style jsx global>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}