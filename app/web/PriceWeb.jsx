import React from "react";
import {
  CheckCircle,
  Zap,
  Shield,
  ShoppingCart,
  Building,
  CreditCard,
  Users,
  Clock,
  Award,
  CheckSquare,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    id: "company",
    name: "سایت شرکتی",
    price: "180$-260$",
    paymentStages: [
      { percent: "۳۰٪", amount: "$۴۵۰", description: "پیش‌پرداخت (شروع پروژه)" },
      { percent: "۴۰٪", amount: "$۶۰۰", description: " تایید طراحی" },
      { percent: "۳۰٪", amount: "$۴۴۹", description: " تحویل نهایی" },
    ],
    features: [
      "سیستم مدیریت محتوا (CMS)",
      "طراحی UI/UX منحصربفرد",
      "کد نویسی اختصاصی",
      "پشتیبانی ۱۲ ماهه",
      "پنل مدیریت پیشرفته",
      "هاست و دامنه رایگان (یک سال)",
      "بهینه‌سازی SEO پایه",
      "واکنش‌گرا (Responsive)",
      "آمار بازدید",
      "بارگذاری کمتر از ۳ ثانیه",
      "پشتیبانی از موبایل و تبلت",
    ],
    icon: <Building className="w-6 h-6" />,
    color: "bg-blue-600",
    delivery: "۱۵ روز کاری",
  },
  {
    id: "store",
    name: "سایت فروشگاهی",
    price: "320$-1000$",
    paymentStages: [
      { percent: "۳۰٪", amount: "$۱,۲۰۰", description: "پیش‌پرداخت (شروع پروژه)" },
      { percent: "۴۰٪", amount: "$۱,۶۰۰", description: " تایید دمو" },
      { percent: "۳۰٪", amount: "$۱,۱۹۹", description: " تحویل نهایی" },
    ],
    features: [
      "تمام امکانات پکیج شرکتی",
      "طراحی UI/UX منحصربفرد",
      "کد نویسی اختصاصی",
      "سیستم فروش آنلاین پیشرفته",
      "پشتیبانی ۱۲ ماهه",
      "درگاه پرداخت بین‌المللی",
      "مدیریت موجودی و انبار",
      "سیستم حمل و نقل چندگانه",
      "پنل کاربری پیشرفته",
      "سیستم نظرات و امتیازدهی",
      "گزارش‌گیری مالی حرفه‌ای",
      "پشتیبانی از تخفیف‌ها و کدهای تخفیف",
      "سئو پیشرفته فروشگاهی",
      "مدیریت پیشرفته محصولات",
      "نمایش محصولات مرتبط",
      "بارگذاری کمتر از ۲ ثانیه",
      "بهینه‌سازی برای موبایل",
    ],
    icon: <ShoppingCart className="w-6 h-6" />,
    color: "bg-indigo-600",
    popular: true,
    delivery: "۳۰ روز کاری",
  },
  {
    id: "custom",
    name: "پلتفرم اختصاصی",
    price: "400$",
    paymentStages: [
      { percent: "۳۰٪", amount: "$۲,۴۰۰", description: "پیش‌پرداخت (شروع پروژه)" },
      { percent: "۴۰٪", amount: "$۳,۲۰۰", description: " تایید دمو کامل" },
      { percent: "۳۰٪", amount: "$۲,۳۹۹", description: " تحویل نهایی" },
    ],
    features: [
      "تحلیل و مشاوره تخصصی",
      "طراحی UI/UX منحصربفرد",
      "کد نویسی اختصاصی",
      "توسعه کاملاً سفارشی",
      "پشتیبانی مادام‌العمر",
      "هاست اختصاصی پرسرعت",
      "امنیت فوق‌العاده",
      "بهینه‌سازی ۱۰۰٪ سرعت",
      "سیستم چندزبانه پیشرفته",
      "انیمیشن‌های سه‌بعدی",
      "یکپارچه‌سازی با سیستم‌های موجود",
      "هوش مصنوعی و اتوماسیون",
      "اپلیکیشن PWA",
      "گزارش‌های تحلیلی پیشرفته",
      "آپدیت و نگهداری دائمی",
      "قرارداد تضمین کیفیت",
    ],
    icon: <Zap className="w-6 h-6" />,
    color: "bg-slate-900",
    delivery: "۴۵-۶۰ روز کاری",
  },
];

export default function LuxuryMinimalPricing() {
  return (
    <div className="bg-[#fcfcfc] text-slate-900 py-24 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-20 text-right md:text-center md:mx-auto">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-6">
            تعرفه‌های شفاف، <span className="text-blue-600">کیفیت تضمینی</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            پرداخت در ۳ مرحله هوشمند بر اساس پیشرفت پروژه. تمامی قیمت‌ها و امکانات به صورت رسمی در قرارداد ذکر خواهند شد.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`group relative bg-white rounded-[2.5rem] p-8 md:p-10 border transition-all duration-500 ${
                plan.popular 
                ? "border-blue-600 shadow-[0_30px_60px_-15px_rgba(37,99,235,0.15)] scale-[1.02]" 
                : "border-slate-100 hover:border-slate-300 shadow-sm"
              }`}
            >
             

              {/* Icon & Name */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-2xl text-white ${plan.color} shadow-lg shadow-blue-100`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-extrabold tracking-tight">{plan.name}</h3>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="text-5xl font-black text-slate-900 flex items-baseline gap-1">
                  <span className="text-2xl font-medium text-slate-400">$</span>
                  {plan.price.split('-')[0].replace('$', '')}
                  <span className="text-xl font-bold text-slate-400">+</span>
                </div>
                <p className="text-slate-400 font-medium mt-2">{plan.price} (بازه قیمتی کل)</p>
              </div>

              {/* Payment Stages - Integrated into Card */}
              <div className="space-y-3 mb-10 bg-slate-50 p-5 rounded-3xl">
                <p className="text-xs font-black text-slate-400 uppercase tracking-wider mb-2">مراحل پرداخت</p>
                {plan.paymentStages.map((stage, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm">
                    <span className="text-slate-600 font-medium">{stage.description}</span>
                    <span className="font-bold text-slate-900">{stage.amount}</span>
                  </div>
                ))}
              </div>

             

              {/* Full Features List */}
              <div className="space-y-4">
                <p className="text-xs font-black text-slate-400 uppercase tracking-wider">امکانات پکیج</p>
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" />
                    <span className="text-sm text-slate-600 leading-snug font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-50 flex items-center gap-2 text-slate-400">
                <Clock size={16} />
                <span className="text-xs font-bold">مدت زمان: {plan.delivery}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Guarantee Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-slate-200 pt-16">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-blue-600">
              <Shield size={24} />
            </div>
            <h4 className="text-lg font-bold">تضمین کیفیت ۱۰۰٪</h4>
            <p className="text-sm text-slate-500 leading-relaxed">در هر مرحله می‌توانید پیشرفت را ببینید. اگر از کیفیت کار راضی نباشید، پرداخت‌های بعدی انجام نمی‌شود.</p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-blue-600">
              <Users size={24} />
            </div>
            <h4 className="text-lg font-bold">پشتیبانی VIP</h4>
            <p className="text-sm text-slate-500 leading-relaxed">تیم ما در تمامی مراحل همراه شماست و در کمتر از یک ساعت پاسخگوی سوالات فنی و بیزینسی شما خواهیم بود.</p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-blue-600">
              <Clock size={24} />
            </div>
            <h4 className="text-lg font-bold">تحویل دقیق زمانی</h4>
            <p className="text-sm text-slate-500 leading-relaxed">زمان تحویل در قرارداد ثبت شده و در صورت تاخیر غیرموجه، طبق تعهد خسارت پرداخت می‌گردد.</p>
          </div>
        </div>

      </div>
    </div>
  );
}