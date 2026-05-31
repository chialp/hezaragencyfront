// app/contact/page.jsx
"use client";

import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
  MessageCircle,
  Clock,
  Sparkles,
  Copy,
  Check,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const contactMethods = [
    {
      id: 1,
      icon: Mail,
      title: "ایمیل",
      value: "info@hezaragency.com",
      desc: "برای پروژه‌های شرکتی",
      color: "blue",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      id: 2,
      icon: Phone,
      title: "تماس",
      value: "989910111132+",
      desc: "شنبه تا چهارشنبه",
      color: "indigo",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      id: 3,
      icon: MapPin,
      title: "آدرس",
      value: "سنندج، ایران",
      desc: "ملاقات حضوری با هماهنگی",
      color: "rose",
      gradient: "from-rose-500 to-orange-400",
    },
    {
      id: 4,
      icon: MessageCircle,
      title: "پشتیبانی",
      value: "@hezar_support",
      desc: "پاسخگویی آنلاین",
      color: "emerald",
      gradient: "from-emerald-500 to-teal-400",
    },
  ];

  return (
    <section className="min-h-screen mt-8 bg-gray-50 px-4 py-16 overflow-x-hidden">
      {/* پس‌زمینه جدید و تمیزتر */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        {/* هدر */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow-sm border border-gray-100 mb-6 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-medium text-gray-600">
             هزار همیشه در دسترس شما 
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            شروع یک همکاری{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              هیجان‌انگیز
            </span>
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
            ما اینجا هستیم تا به سوالات شما پاسخ دهیم. یکی از روش‌های زیر را
            انتخاب کنید.
          </p>
        </div>

        {/* --- بخش اصلاح شده: کارت‌های مدرن شبکه‌ای --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {contactMethods.map((method) => (
            <div
              key={method.id}
              className="group relative bg-white rounded-3xl p-6 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden hover:-translate-y-2"
            >
              {/* افکت گرادینت پس‌زمینه هنگام هاور */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              {/* حاشیه رنگی پایین */}
              <div
                className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${method.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
              ></div>

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start mb-8">
                  {/* آیکون با استایل جدید */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-white group-hover:shadow-lg transition-all duration-500`}
                  >
                    <method.icon
                      className={`w-7 h-7 text-gray-400 group-hover:scale-110 transition-transform duration-500`}
                      style={{
                        color: `var(--tw-text-opacity) ${method.color}`,
                      }}
                    />
                    {/* رنگ آیکون داینامیک */}
                    <style jsx>{`
                      .group:hover .w-7 {
                        color: inherit; /* این قسمت با کلاس‌های Tailwind هندل می‌شود اما برای اطمینان */
                      }
                    `}</style>
                    {/* برای سادگی از کلاس text-{color}-600 در پایین استفاده می‌کنیم */}
                    <div
                      className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-${method.color}-100 transition-colors duration-500`}
                    ></div>
                  </div>

                  {/* دکمه کپی */}
                  <button
                    onClick={() => handleCopy(method.value, method.id)}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all active:scale-95"
                    title="کپی کردن"
                  >
                    {copiedIndex === method.id ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </button>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {method.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{method.desc}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <span
                      className={`text-sm font-semibold text-gray-700 truncate max-w-[150px]`}
                    >
                      {method.value}
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 text-gray-300 group-hover:text-${method.color}-500 group-hover:-translate-x-1 transition-all duration-300`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* --- پایان بخش اصلاح شده --- */}

        {/* بخش اطلاعات تکمیلی و نقشه */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* ستون راست: شبکه‌های اجتماعی و ساعت */}
          <div className="lg:col-span-4 space-y-6">
            {/* سوشال مدیا */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-6">شبکه‌های اجتماعی</h4>
              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: Instagram,
                    name: "Instagram",
                    id: "@hezar_agency",
                    color: "pink",
                    link: "https://instagram.com/hezaragency",
                  },
                  {
                    icon: MessageCircle,
                    name: "Telegram",
                    id: "@hezar_support",
                    color: "sky",
                    link: "https://t.me/hezaragency",
                  },
                  {
                    icon: MessageCircle,
                    name: "WhatsApp",
                    id: "+98 991 011 1132",
                    color: "emerald",
                    link: "https://wa.me/989910111132",
                  },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-2xl hover:bg-gray-50 transition-colors group"
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor:
                          social.color === "pink"
                            ? "#fdf2f8"
                            : social.color === "sky"
                              ? "#f0f9ff"
                              : "#ecfdf5",
                      }}
                    >
                      <social.icon
                        className="w-5 h-5"
                        style={{
                          color:
                            social.color === "pink"
                              ? "#db2777"
                              : social.color === "sky"
                                ? "#0284c7"
                                : "#059669",
                        }}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">
                        {social.name}
                      </p>
                      <p
                        className="text-xs text-gray-400 font-mono text-left"
                        dir="ltr"
                      >
                        {social.id}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* نقشه */}
          <div className="lg:col-span-8 h-full min-h-[400px]">
            <div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 h-full">
              <div className="rounded-2xl overflow-hidden h-full relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3227.147!2d46.9829076!3d35.306845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfa!2sir!4v1700000000000!5m2!1sfa!2sir&q=35.306845,46.982907"
                  width="100%"
                  height="100%"
                  className="border-0 filter grayscale hover:grayscale-0 transition-all duration-700"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>

                {/* کارت آدرس روی نقشه */}
                <div className="absolute bottom-6 right-6 bg-white p-4 rounded-2xl shadow-lg max-w-xs transition-transform transform translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 text-sm">
                        دفتر مرکزی
                      </h5>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                        سنندج تکیه و چمن ساختمان آرین ، طبقه ۵
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
