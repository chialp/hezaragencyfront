"use client";

import { useState } from "react";
import {
  DollarSign,
  CreditCard,
  Clock,
  CheckCircle,
  Users,
  Shield,
  Award,
  TrendingUp,
  BookOpen,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQSectionClient = ({ faqData = [], ctaInfo = {}, headerInfo = {} }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState(0);

  // داده‌های پیش‌فرض
  const safeFaqData = faqData.length > 0 ? faqData : [];
  const safeCtaInfo = ctaInfo || {};
  const safeHeaderInfo = headerInfo || {};

  // آیکون‌های دسته‌بندی‌ها
  const categoryIcons = [
    <DollarSign className="w-5 h-5" />,
    <CreditCard className="w-5 h-5" />,
    <Clock className="w-5 h-5" />,
    <Shield className="w-5 h-5" />,
    <Award className="w-5 h-5" />,
    <Users className="w-5 h-5" />,
  ];

  // آیکون‌های ویژگی‌های CTA
  const featureIcons = [
    <Clock className="w-4 h-4" />,
    <CheckCircle className="w-4 h-4" />,
    <Shield className="w-4 h-4" />,
    <TrendingUp className="w-4 h-4" />,
  ];

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const currentCategory =
    safeFaqData.length > 0 ? safeFaqData[activeCategory] : null;

  if (safeFaqData.length === 0) {
    return (
      <section className="min-h-[600px] py-12 bg-white flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <p className="text-gray-600 text-lg">
            در حال حاضر سوالات متداول در دسترس نیست.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className=" h-auto  mt-[20rem] lg:mt-[5rem] py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-5">
            <BookOpen className="w-4 h-4" />
            سوالات متداول
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            سوالات <span className="text-blue-700">متداول</span> خدمات طراحی
            سایت
          </h2>

          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            {safeHeaderInfo.subtitle ||
              "پاسخ به رایج‌ترین سوالات درباره خدمات ما"}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Categories Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 sticky top-6">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">
                دسته‌بندی‌ها
              </h3>
              <div className="space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
                {/* Custom scrollbar styling */}
                <style jsx>{`
                  div::-webkit-scrollbar {
                    width: 6px;
                  }
                  div::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 10px;
                  }
                  div::-webkit-scrollbar-thumb {
                    background: #888;
                    border-radius: 10px;
                  }
                  div::-webkit-scrollbar-thumb:hover {
                    background: #555;
                  }
                `}</style>
                {safeFaqData.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveCategory(index);
                      setOpenIndex(null);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-right transition-all duration-200 ${
                      activeCategory === index
                        ? "bg-blue-600 text-white shadow-lg"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    {categoryIcons[index] || <DollarSign className="w-5 h-5" />}
                    <span className="font-medium text-sm md:text-base">
                      {category.category || "دسته‌بندی"}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:w-3/4">
            {/* Category Header */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-2 mb-6 border border-blue-200">
              <div className="flex items-center gap-3 p-4">
                <div className="p-3 rounded-xl bg-blue-600 text-white">
                  {categoryIcons[activeCategory] || (
                    <DollarSign className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-xl">
                    {currentCategory?.category || "دسته‌بندی"}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {currentCategory?.questions?.length || 0} سوال در این
                    دسته‌بندی
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Items Container */}
            <div className="space-y-4 mb-8">
              {currentCategory?.questions?.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleIndex(index)}
                      className="flex items-center justify-between w-full p-5 focus:outline-none text-right hover:bg-gray-50 transition-colors duration-200"
                      aria-label={
                        isOpen
                          ? `بستن سوال: ${item.question}`
                          : `باز کردن سوال: ${item.question}`
                      }
                    >
                      <h2 className="font-semibold text-gray-900 text-base md:text-lg leading-relaxed pr-4 flex-1 text-right">
                        {item.question || "سوال"}
                      </h2>
                      <div
                        className={`flex-shrink-0 p-2 rounded-full transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 bg-blue-100 text-blue-600"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-5 pt-0">
                            <div className="border-t border-gray-200 pt-5">
                              <p className="text-gray-600 leading-relaxed text-justify whitespace-pre-line">
                                {item.answer || "پاسخ سوال"}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSectionClient;