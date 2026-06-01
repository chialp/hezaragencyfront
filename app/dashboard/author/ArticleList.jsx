"use client";
import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  FileText,
} from "lucide-react";

export default function ArticleList({ setEditingArticle, setActiveTab }) {
  // همیشه مقدار اولیه را آرایه خالی بگذارید
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  useEffect(() => {
    fetchArticles();
  }, []);

  const getTranslatedContent = (content, field) => {
    if (!content) return "";
    if (typeof content === 'object' && content.fa) return content.fa;
    if (field && typeof field === 'string') {
      const fieldValue = content?.[field];
      if (typeof fieldValue === 'object' && fieldValue.fa) return fieldValue.fa;
    }
    if (typeof content === 'string') return content;
    return "";
  };

  useEffect(() => {
    // گارد امنیتی: اگر articles آرایه نبود، کاری نکن
    if (!Array.isArray(articles)) return;

    let result = articles;

    if (searchTerm) {
      result = result.filter(
        (article) =>
          getTranslatedContent(article, 'title').toLowerCase().includes(searchTerm.toLowerCase()) ||
          getTranslatedContent(article, 'summary').toLowerCase().includes(searchTerm.toLowerCase()) ||
          (article.tags && typeof article.tags === 'object' ? 
            (article.tags.fa || []).join(' ').toLowerCase().includes(searchTerm.toLowerCase()) :
            (article.tags || '').toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (filterCategory) {
      result = result.filter((article) => 
        getTranslatedContent(article, 'category') === filterCategory
      );
    }

    setFilteredArticles(result);
  }, [searchTerm, filterCategory, articles]);

  // --- تغییر اصلی اینجاست ---
  const fetchArticles = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/articles", {
        credentials: "include",
        cache: "no-store" // اضافه کردن عدم کش برای دریافت دیتای تازه
      });

      if (res.ok) {
        const rawData = await res.json();
        console.log("API Response:", rawData); // برای دیباگ در کنسول مرورگر

        let validData = [];

        // بررسی ساختار دیتای دریافتی
        if (Array.isArray(rawData)) {
            validData = rawData;
        } else if (rawData.data && Array.isArray(rawData.data)) {
            // اگر دیتا داخل کلید data بود
            validData = rawData.data;
        } else if (rawData.articles && Array.isArray(rawData.articles)) {
            // اگر دیتا داخل کلید articles بود
            validData = rawData.articles;
        } else {
            console.error("ساختار دیتای دریافتی آرایه نیست:", rawData);
        }

        setArticles(validData);
        setFilteredArticles(validData);
      }
    } catch (error) {
      console.error("خطا در اتصال به سرور:", error);
      setArticles([]); // در صورت خطا آرایه خالی ست شود
      setFilteredArticles([]);
    } finally {
      setLoading(false);
    }
  };

  const deleteArticle = async (id) => {
    if (!confirm("آیا از حذف این مقاله اطمینان دارید؟")) return;

    try {
      const res = await fetch(
        `/api/articles/delete/${id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      if (res.ok) {
        alert("مقاله با موفقیت حذف شد");
        fetchArticles();
      }
    } catch (error) {
      alert("خطا در اتصال به سرور: " + error.message);
    }
  };

  const handleEditArticle = (article) => {
    setEditingArticle(article);
    setActiveTab("create");
  };

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("fa-IR", options);
  };

  // --- اصلاح بخش دسته‌بندی‌ها (جلوگیری از کرش) ---
  const safeArticles = Array.isArray(articles) ? articles : [];
  const categories = [
    ...new Set(safeArticles.map((article) => getTranslatedContent(article, 'category')))
  ].filter(Boolean);

  const getArticleLink = (article) => {
    if (article.slug && typeof article.slug === 'object') {
      const slug = article.slug.fa;
      if (slug) return `/fa/news/${slug}`;
    }
    if (article.slug && typeof article.slug === 'string') {
      return `/fa/news/${article.slug}`;
    }
    return `/fa/news/${article._id}`;
  };

  const getArticleTags = (article) => {
    if (article.tags && typeof article.tags === 'object') {
      return article.tags.fa || [];
    }
    return article.tags || [];
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="bg-white rounded-lg shadow">
        {/* فیلترها */}
        <div className="p-4 border-b">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 sm:space-x-reverse">
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pr-10 py-2 border text-black border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="جستجو در مقالات..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <Filter className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  className="block w-full pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                >
                  <option value="">همه دسته‌بندی‌ها</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="text-sm text-gray-500">
              {/* اطمینان از اینکه filteredArticles آرایه است */}
              {(filteredArticles || []).length} مقاله یافت شد
            </div>
          </div>
        </div>

        {/* جدول مقالات */}
        <div className="overflow-x-auto">
          {(!filteredArticles || filteredArticles.length === 0) ? (
            <div className="text-center py-12">
              <FileText className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">
                مقاله‌ای یافت نشد
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {articles.length === 0
                  ? "هنوز مقاله‌ای ایجاد نکرده‌اید."
                  : "هیچ مقاله‌ای با فیلترهای اعمال شده مطابقت ندارد."}
              </p>
            </div>
          ) : (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">عنوان مقاله</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">دسته‌بندی</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">وضعیت</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">بازدید</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">تاریخ انتشار</th>
                  <th scope="col" className="relative px-6 py-3"><span className="sr-only">عملیات</span></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* اطمینان از اینکه map روی آرایه اجرا می‌شود */}
                {Array.isArray(filteredArticles) && filteredArticles.map((article) => {
                  const articleTitle = getTranslatedContent(article, 'title');
                  const articleSummary = getTranslatedContent(article, 'summary');
                  const articleCategory = getTranslatedContent(article, 'category');
                  const articleTags = getArticleTags(article);
                  
                  return (
                    <tr key={article._id || Math.random()} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {articleTitle}
                            </div>
                            <div className="text-sm text-gray-500 truncate max-w-xs">
                              {articleSummary}
                            </div>
                            {articleTags.length > 0 && (
                              <div className="flex flex-wrap gap-1 mt-1">
                                {articleTags.slice(0, 3).map((tag, index) => (
                                  <span key={index} className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                                    #{tag}
                                  </span>
                                ))}
                                {articleTags.length > 3 && (
                                  <span className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                                    +{articleTags.length - 3}
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {articleCategory}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          article.status === 'published' 
                            ? 'bg-green-100 text-green-800'
                            : article.status === 'draft'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {article.status === 'published' && 'منتشر شده'}
                          {article.status === 'draft' && 'پیش‌نویس'}
                          {article.status === 'archived' && 'آرشیو شده'}
                        </span>
                        {article.featured && (
                          <span className="mr-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            ویژه
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 ml-1 text-gray-400" />
                          {article.views || 0}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(article.createdAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2 space-x-reverse">
                          <button
                            onClick={() => window.open(getArticleLink(article), "_blank")}
                            className="text-blue-600 hover:text-blue-900"
                            title="مشاهده مقاله"
                          >
                            <Eye className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => handleEditArticle(article)}
                            className="text-indigo-600 hover:text-indigo-900"
                            title="ویرایش مقاله"
                          >
                            <Edit className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => deleteArticle(article._id)}
                            className="text-red-600 hover:text-red-900"
                            title="حذف مقاله"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>

        {/* اطلاعات اضافی */}
        {(filteredArticles || []).length > 0 && (
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
            <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
              <div className="mb-2 sm:mb-0">
                نمایش {filteredArticles.length} مقاله از {safeArticles.length} مقاله
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}