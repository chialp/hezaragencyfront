"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

// ایمپورت استاتیک طبق درخواست شما
import Profile from "./ProfileAuthor";

// ایمپورت‌های داینامیک برای سبک‌سازی لود اولیه
const Header = dynamic(() => import("./HeaderAuthor"));
const Navigation = dynamic(() => import("./Navigation"));

const ArticleList = dynamic(() => import("./ArticleList"), {
  loading: () => (
    <div className="p-10 animate-pulse bg-gray-100 rounded-lg">
      در حال بارگذاری لیست مقالات...
    </div>
  ),
});

const ArticleEditor = dynamic(() => import("./ArticleEditor"), {
  loading: () => (
    <div className="p-20 animate-pulse bg-gray-200 rounded-xl">
      در حال آماده‌سازی ویرایشگر متن...
    </div>
  ),
});

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("articles");
  const [editingArticle, setEditingArticle] = useState(null);

  const renderContent = () => {
    switch (activeTab) {
      case "articles":
        return (
          <ArticleList
            setEditingArticle={setEditingArticle}
            setActiveTab={setActiveTab}
          />
        );
      case "create":
        return (
          <ArticleEditor
            editingArticle={editingArticle}
            setEditingArticle={setEditingArticle}
            setActiveTab={setActiveTab}
          />
        );
      case "profile":
        return <Profile />;
      default:
        return (
          <ArticleList
            setEditingArticle={setEditingArticle}
            setActiveTab={setActiveTab}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        editingArticle={editingArticle}
      />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {renderContent()}
      </main>
    </div>
  );
}
