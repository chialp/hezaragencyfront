// در کامپوننت Navigation
"use client";
import React from "react";

export default function Navigation({ activeTab, setActiveTab, editingArticle }) {
  const handleCreateClick = () => {
    setActiveTab("create");
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* تب‌های موجود */}
            <button
              onClick={() => setActiveTab("articles")}
              className={`${
                activeTab === "articles"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } inline-flex items-center px-3 py-2 border-b-2 text-sm font-medium`}
            >
              مقالات من
            </button>
            
            <button
              onClick={handleCreateClick}
              className={`${
                activeTab === "create"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } inline-flex items-center px-3 py-2 border-b-2 text-sm font-medium`}
            >
              {editingArticle ? "ویرایش مقاله" : "مقاله جدید"}
            </button>
            
            <button
              onClick={() => setActiveTab("profile")}
              className={`${
                activeTab === "profile"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } inline-flex items-center px-3 py-2 border-b-2 text-sm font-medium`}
            >
              پروفایل
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}