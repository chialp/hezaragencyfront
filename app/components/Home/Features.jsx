"use client";

import { useState } from "react";
import {
  Check,
  Building2,
  Store,
  Palette,
  AlertCircle,
  CreditCard,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

// کامپوننت فرعی برای هر کارت قیمت (جهت تمیز شدن کد اصلی)
const PricingCard = ({ pkg, pkgKey, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative flex flex-col h-full p-6 sm:p-8 bg-white rounded-3xl transition-all duration-300 border ${
        isHovered
          ? "border-blue-500 shadow-2xl scale-[1.02] z-10"
          : "border-gray-100 shadow-sm"
      }`}
    >
      {/* هدر کارت */}
      <div className="mb-6">
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-blue-50 text-blue-600`}
        >
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {pkg.title || pkgKey}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed min-h-[40px]">
          {pkg.description || "توضیحات مختصر پکیج"}
        </p>
      </div>

      {/* قیمت */}
      <div className="mb-8 pb-8 border-b border-gray-100">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-extrabold text-gray-900">
            {pkg.price}
          </span>
        </div>
        <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full mt-2 inline-block">
          پرداخت ریالی یا دلاری
        </span>
      </div>

      {/* لیست ویژگی‌ها */}
      <div className="grid grid-cols-2 md:grid-cols-1 items-center space-y-4 mb-8">
        {(pkg.features || []).map((feature, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div className="mt-1 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 text-blue-600" />
            </div>
            <span className="text-sm text-gray-600 font-medium">{feature}</span>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 w-full justify-center items-center">
        <Link
          href="/contact"
          className={`w-[85%] mb-1   py-3 px-4 rounded-xl font-bold text-center transition-all duration-300 flex items-center justify-center gap-2 ${
            isHovered
              ? "bg-blue-600 text-white"
              : "bg-gray-50 text-gray-900 hover:bg-gray-100"
          }`}
        >
          برای اطلاعات بیشتر تماس بگیرید <ArrowLeft className="w-4 h-4" />
        </Link>
      </div>
      {/* دکمه */}
    </div>
  );
};

const PricingServicesClient = ({ packages = {}, pageContent = {} }) => {
  const safePackages = packages || {};
  const safeContent = pageContent || {};

  const packageIcons = {
    شرکتی: <Building2 className="w-6 h-6" />,
    فروشگاهی: <Store className="w-6 h-6" />,
    سفارشی: <Palette className="w-6 h-6" />,
  };

  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans">
      {/* بخش هدر ساده و متمرکز */}
      <div className="pt-20 pb-16 px-4 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6">
          <CreditCard className="w-4 h-4" />
          <span>{safeContent.header?.title || "تعرفه‌ها"}</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
          {safeContent.header?.mainTitle || "سرمایه‌گذاری روی آینده کسب‌وکار"}
        </h2>

        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          {safeContent.header?.subtitle ||
            "انتخاب هوشمندانه برای رشد کسب و کار شما"}
        </p>

        {/* باکس توجه مینیمال */}
        {safeContent.header?.notice && (
          <div className="mt-8 mx-auto max-w-2xl bg-amber-50 text-amber-800 px-4 py-3 rounded-xl flex items-center justify-center gap-2 text-sm border border-amber-100">
            <AlertCircle className="w-4 h-4" />
            <span>{safeContent.header.notice.content}</span>
          </div>
        )}
      </div>

      {/* بخش کارت‌ها */}
      <div className="px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(safePackages).map(([key, pkg]) => (
              <PricingCard
                key={key}
                pkg={pkg}
                pkgKey={key}
                icon={packageIcons[key] || <Building2 />}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingServicesClient;
