"use client";

import React from "react";
import Link from "next/link";
import { MoveRight, Home, Search, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f0f2f5] flex items-center justify-center p-6 rtl" dir="rtl">
      <div className="max-w-2xl w-full text-center">
        {/* بخش بصری اصلی */}
        <div className="relative mb-12">
          <h1 className="text-[12rem] md:text-[18rem] font-black text-white leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Compass className="w-20 h-20 text-blue-600 animate-spin-slow mb-4" />
            <span className="text-2xl md:text-4xl font-black text-gray-900">
              مسیر رو گم کردی؟
            </span>
          </div>
        </div>

        {/* محتوای متنی */}
        <div className="space-y-6">
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-lg mx-auto">
            در میان <span className="font-bold text-blue-600">هزار</span> راه و ایده‌ی مختلف، ظاهراً این یکی به بن‌بست رسیده! نگران نباش، ما راه برگشت رو برات باز گذاشتیم.
          </p>

          {/* دکمه‌های هدایتگر */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <Link
              href="/"
              className="group flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all w-full sm:w-auto"
            >
              <Home className="w-5 h-5" />
              برگشت به خانه
            </Link>
            
            <Link
              href="/articles"
              className="group flex items-center gap-3 bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all w-full sm:w-auto"
            >
              <Search className="w-5 h-5" />
              مطالعه مقالات آموزشی
            </Link>
          </div>
        </div>

        {/* فوتر کوچک اختصاصی آژانس هزار */}
        <div className="mt-20 opacity-50 flex items-center justify-center gap-2 text-sm font-medium text-gray-400">
          <span>آژانس خلاقیت هزار</span>
          <div className="w-1 h-1 bg-gray-400 rounded-full" />
          <span>فراتر از یک مسیر</span>
        </div>
      </div>

      {/* استایل انیمیشن سفارشی */}
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}