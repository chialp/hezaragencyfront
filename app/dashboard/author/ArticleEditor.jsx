"use client";
import React, { useState, useCallback, useEffect, useRef } from "react";
import {
  Save,
  X,
  Globe,
  Upload,
  Image,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import ArticleForm from "./article/ArticleForm";
import BlockManager from "./article/BlockManager";

export default function ArticleEditor({
  editingArticle,
  setEditingArticle,
  setActiveTab,
}) {
  const [currentLang, setCurrentLang] = useState("fa");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // stateهای چندزبانه
  const [title, setTitle] = useState({ fa: "", en: "", ku: "" });
  const [summary, setSummary] = useState({ fa: "", en: "", ku: "" });
  const [category, setCategory] = useState({ fa: "", en: "", ku: "" });
  const [tags, setTags] = useState({ fa: [], en: [], ku: [] });
  const [slug, setSlug] = useState({ fa: "", en: "", ku: "" });
  const [metaTitle, setMetaTitle] = useState({ fa: "", en: "", ku: "" });
  const [metaDescription, setMetaDescription] = useState({
    fa: "",
    en: "",
    ku: "",
  });
  const [focusKeyword, setFocusKeyword] = useState({ fa: "", en: "", ku: "" });

  const [blocks, setBlocks] = useState([]);
  const [draggingIndex, setDraggingIndex] = useState(null);

  const [poster, setPoster] = useState("");
  const [posterFile, setPosterFile] = useState(null);
  const [featured, setFeatured] = useState(false);
  const [status, setStatus] = useState("published");

  const fileInputRef = useRef(null);

  // مقداردهی اولیه برای حالت ویرایش
  useEffect(() => {
    if (editingArticle) {
      console.log("📝 Editing article:", editingArticle);

      // مقداردهی فیلدهای چندزبانه
      setTitle({
        fa: editingArticle.languages?.fa?.title || editingArticle.title || "",
        en: editingArticle.languages?.en?.title || "",
        ku: editingArticle.languages?.ku?.title || "",
      });

      setSummary({
        fa:
          editingArticle.languages?.fa?.summary || editingArticle.summary || "",
        en: editingArticle.languages?.en?.summary || "",
        ku: editingArticle.languages?.ku?.summary || "",
      });

      setCategory({
        fa:
          editingArticle.languages?.fa?.category ||
          editingArticle.category ||
          "",
        en: editingArticle.languages?.en?.category || "",
        ku: editingArticle.languages?.ku?.category || "",
      });

      // مدیریت تگ‌ها - تبدیل آرایه به رشته با کاما
      const processTags = (tagObj) => {
        if (Array.isArray(tagObj)) {
          return tagObj.join(", ");
        } else if (typeof tagObj === "object") {
          return {
            fa: (tagObj.fa || []).join(", "),
            en: (tagObj.en || []).join(", "),
            ku: (tagObj.ku || []).join(", "),
          };
        }
        return "";
      };

      const tagData = processTags(editingArticle.tags);
      setTags(
        typeof tagData === "object"
          ? tagData
          : {
              fa: tagData,
              en: "",
              ku: "",
            }
      );

      setSlug({
        fa: editingArticle.slug?.fa || editingArticle.slug || "",
        en: editingArticle.slug?.en || "",
        ku: editingArticle.slug?.ku || "",
      });

      setMetaTitle({
        fa:
          editingArticle.metaTitle?.fa ||
          editingArticle.languages?.fa?.metaTitle ||
          "",
        en:
          editingArticle.metaTitle?.en ||
          editingArticle.languages?.en?.metaTitle ||
          "",
        ku:
          editingArticle.metaTitle?.ku ||
          editingArticle.languages?.ku?.metaTitle ||
          "",
      });

      setMetaDescription({
        fa:
          editingArticle.metaDescription?.fa ||
          editingArticle.languages?.fa?.metaDescription ||
          "",
        en:
          editingArticle.metaDescription?.en ||
          editingArticle.languages?.en?.metaDescription ||
          "",
        ku:
          editingArticle.metaDescription?.ku ||
          editingArticle.languages?.ku?.metaDescription ||
          "",
      });

      setFocusKeyword({
        fa: editingArticle.focusKeyword?.fa || "",
        en: editingArticle.focusKeyword?.en || "",
        ku: editingArticle.focusKeyword?.ku || "",
      });

      // بلوک‌ها
      const articleBlocks =
        editingArticle.languages?.fa?.blocks || editingArticle.blocks || [];
      setBlocks(articleBlocks);

      // تنظیمات
      setPoster(editingArticle.poster || "");
      setFeatured(editingArticle.featured || false);
      setStatus(editingArticle.status || "published");

      // ریست کردن ارور
      setError("");
      setSuccess("");
    } else {
      resetForm();
    }
  }, [editingArticle]);

  const resetForm = () => {
    setTitle({ fa: "", en: "", ku: "" });
    setSummary({ fa: "", en: "", ku: "" });
    setCategory({ fa: "", en: "", ku: "" });
    setTags({ fa: [], en: [], ku: [] });
    setSlug({ fa: "", en: "", ku: "" });
    setMetaTitle({ fa: "", en: "", ku: "" });
    setMetaDescription({ fa: "", en: "", ku: "" });
    setFocusKeyword({ fa: "", en: "", ku: "" });
    setBlocks([]);
    setPoster("");
    setPosterFile(null);
    setFeatured(false);
    setStatus("published");
    setCurrentLang("fa");
    setEditingArticle(null);
    setError("");
    setSuccess("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleCancel = () => {
    resetForm();
    setActiveTab("articles");
  };

  // تابع‌های مدیریت state برای هر زبان
  const setTitleForLang = (lang, value) => {
    setTitle((prev) => ({ ...prev, [lang]: value }));
  };

  const setSummaryForLang = (lang, value) => {
    setSummary((prev) => ({ ...prev, [lang]: value }));
  };

  const setCategoryForLang = (lang, value) => {
    setCategory((prev) => ({ ...prev, [lang]: value }));
  };

  const setTagsForLang = (lang, value) => {
    // تبدیل رشته به آرایه برای ذخیره
    const tagsArray = value
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
    setTags((prev) => ({ ...prev, [lang]: tagsArray }));

    // همچنین برای نمایش در فرم
    const displayTags = (prev) => ({ ...prev, [lang]: value });
    return displayTags;
  };

  const setSlugForLang = (lang, value) => {
    setSlug((prev) => ({ ...prev, [lang]: value }));
  };

  const setMetaTitleForLang = (lang, value) => {
    setMetaTitle((prev) => ({ ...prev, [lang]: value }));
  };

  const setMetaDescriptionForLang = (lang, value) => {
    setMetaDescription((prev) => ({ ...prev, [lang]: value }));
  };

  const setFocusKeywordForLang = (lang, value) => {
    setFocusKeyword((prev) => ({ ...prev, [lang]: value }));
  };

  const generateSlug = (value, lang) => {
    const slug = value
      .trim()
      .normalize("NFKD") // نرمالایز کردن حروف
      .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, "") // حذف اعراب
      .replace(/[\s]+/g, "-")
      .replace(/[^a-zA-Z0-9\u0600-\u06FF\-]/g, "")
      .replace(/\-+/g, "-")
      .toLowerCase();

    setSlugForLang(lang, slug);
    return slug;
  };

  // مدیریت آپلود پوستر
  const handlePosterUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setError("");

      // بررسی نوع فایل
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/jpg",
        "image/webp",
        "image/gif",
      ];
      if (!allowedTypes.includes(file.type)) {
        setError("فرمت فایل باید یکی از موارد زیر باشد: JPG, PNG, WebP, GIF");
        return;
      }

      // بررسی حجم فایل (5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError("حجم فایل باید کمتر از 5 مگابایت باشد");
        return;
      }

      setPosterFile(file);

      // ایجاد پیش‌نمایش
      const reader = new FileReader();
      reader.onload = (e) => {
        setPoster(e.target.result);
      };
      reader.readAsDataURL(file);

      setSuccess("پوستر با موفقیت انتخاب شد");
      setTimeout(() => setSuccess(""), 3000);
    }
  };

  const removePoster = () => {
    setPoster("");
    setPosterFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const updateBlock = useCallback((id, value) => {
    setBlocks((prev) => prev.map((b) => (b.id === id ? { ...b, value } : b)));
  }, []);

  const removeBlock = (id) => {
    setBlocks((prev) => prev.filter((b) => b.id !== id));
  };

  const onDragStart = (index) => setDraggingIndex(index);

  const onDragOver = (e, index) => {
    e.preventDefault();
    if (draggingIndex === null || draggingIndex === index) return;

    const arr = [...blocks];
    const dragged = arr[draggingIndex];
    arr.splice(draggingIndex, 1);
    arr.splice(index, 0, dragged);

    setDraggingIndex(index);
    setBlocks(arr);
  };

  const validateForm = () => {
    if (!title.fa.trim()) return "عنوان فارسی مقاله ضروری است";
    if (!slug.fa.trim()) return "SLUG فارسی ضروری است";
    if (slug.fa.length < 3) return "SLUG فارسی باید حداقل ۳ کاراکتر باشد";
    if (!metaTitle.fa.trim()) return "عنوان سئو فارسی ضروری است";
    if (!focusKeyword.fa.trim()) return "کلمه کلیدی تمرکز فارسی ضروری است";
    if (!posterFile && !poster && !editingArticle)
      return "پوستر مقاله الزامی است";

    // بررسی فرمت slug
    const slugRegex = /^[a-z0-9\u0600-\u06FF\-]+$/;
    if (!slugRegex.test(slug.fa)) {
      return "SLUG فارسی باید فقط شامل حروف فارسی، انگلیسی، اعداد و خط تیره باشد";
    }

    return null;
  };

  const submitArticle = async () => {
    setError("");
    setSuccess("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();

      console.log("🔄 شروع آماده‌سازی فرم دیتا...");
      console.log("📝 تعداد بلوک‌ها:", blocks.length);

      // 🔥 داده‌های چندزبانه
      formData.append("title", JSON.stringify(title));
      formData.append("summary", JSON.stringify(summary));
      formData.append("category", JSON.stringify(category));

      // تگ‌ها
      const tagsData = {
        fa: Array.isArray(tags.fa)
          ? tags.fa
          : tags.fa
          ? tags.fa
              .split(",")
              .map((t) => t.trim())
              .filter(Boolean)
          : [],
        en: Array.isArray(tags.en)
          ? tags.en
          : tags.en
          ? tags.en
              .split(",")
              .map((t) => t.trim())
              .filter(Boolean)
          : [],
        ku: Array.isArray(tags.ku)
          ? tags.ku
          : tags.ku
          ? tags.ku
              .split(",")
              .map((t) => t.trim())
              .filter(Boolean)
          : [],
      };
      formData.append("tags", JSON.stringify(tagsData));

      formData.append("focusKeyword", JSON.stringify(focusKeyword));
      formData.append("slug", JSON.stringify(slug));
      formData.append("metaTitle", JSON.stringify(metaTitle));
      formData.append("metaDescription", JSON.stringify(metaDescription));

      // تنظیمات
      formData.append("featured", featured);
      formData.append("status", status);
      formData.append("language", "multi");
      formData.append("seoScore", "85");
      formData.append("wordCount", "0");
      formData.append("readabilityScore", "80");

      // 🔥 آپلود پوستر
      if (posterFile) {
        console.log(`📸 اضافه کردن پوستر: ${posterFile.name}`);
        formData.append("poster", posterFile);
      } else if (editingArticle && !posterFile) {
        // در حالت ویرایش اگر پوستر جدیدی انتخاب نشده، از پوستر قبلی استفاده می‌کنیم
        console.log("📸 استفاده از پوستر قبلی");
      }

      // 🔥 پردازش بلوک‌ها
      const blocksForServer = blocks.map((b) => {
        const blockData = {
          id: b.id || Date.now() + Math.random(),
          type: b.type,
          value: b.value,
          data: b.data || {},
        };

        if (b._id) {
          blockData._id = b._id;
        }

        // اگر بلوک فایل دارد، علامت‌گذاری کن
        if ((b.type === "image" || b.type === "video") && b.file) {
          blockData.value = "FILE_UPLOAD";
          blockData.data = { ...blockData.data, file: "FILE_UPLOAD" };
        }

        return blockData;
      });

      formData.append("blocks", JSON.stringify(blocksForServer));

      // 🔥 اضافه کردن فایل‌های بلوک‌ها
      const blockFiles = blocks.filter((b) => {
        if (b.type === "image" || b.type === "video") {
          return b.file instanceof File;
        }
        return false;
      });


      blockFiles.forEach((block, index) => {
        if (block.file instanceof File) {
          console.log(
            `📁 اضافه کردن فایل بلوک ${index + 1}: ${block.file.name}`
          );
          formData.append("files", block.file);
        }
      });

      let url, method;
      const baseUrl = "https://hezaragencyback.liara.run";

      if (editingArticle) {
        url = `${baseUrl}/api/articles/edit/${editingArticle._id}`;
        method = "PUT";
        console.log(`✏️ حالت ویرایش برای مقاله: ${editingArticle._id}`);
      } else {
        url = `${baseUrl}/api/articles/create`;
        method = "POST";
        console.log("🆕 حالت ایجاد مقاله جدید");
      }

      console.log(`🚀 ارسال درخواست به: ${url}`);
      console.log("📦 داده‌های ارسالی:");
      console.log("- عنوان فارسی:", title.fa);
      console.log("- اسلاگ فارسی:", slug.fa);
      console.log("- تعداد فایل‌ها:", (posterFile ? 1 : 0) + blockFiles.length);

      // 🔥 ارسال درخواست
      const res = await fetch(url, {
        method: method,
        body: formData,
        credentials: "include",
        headers: {
          // هدرها به صورت خودکار توسط fetch تنظیم می‌شوند
        },
      });

      console.log(`📨 پاسخ دریافت شد. وضعیت: ${res.status}`);

      const responseText = await res.text();
      console.log("📨 پاسخ خام:", responseText.substring(0, 500));

      let data;
      try {
        data = JSON.parse(responseText);
      } catch (e) {
        console.error("❌ خطا در تجزیه JSON پاسخ:", e);
        throw new Error("پاسخ سرور نامعتبر است");
      }

      if (!res.ok) {
        console.error("❌ خطای سرور:", data);
        throw new Error(
          data.message || data.error || `خطای سرور: ${res.status}`
        );
      }

      console.log("✅ موفقیت:", data);

      if (data.success) {
        setSuccess(
          editingArticle
            ? "مقاله با موفقیت ویرایش شد 🎉"
            : "مقاله با موفقیت ایجاد شد 🎉"
        );

        setTimeout(() => {
          resetForm();
          setActiveTab("articles");
        }, 2000);
      } else {
        throw new Error(data.message || "عملیات ناموفق بود");
      }
    } catch (err) {
      console.error("💥 خطا در ارسال:", err);
      setError("خطا: " + (err.message || "خطای ناشناخته"));
    } finally {
      setLoading(false);
    }
  };
  // نام زبان‌ها برای نمایش
  const languageNames = {
    fa: "فارسی",
    en: "English",
    ku: "کوردی",
  };

  // تبدیل tags object به string برای نمایش در فرم
  const getTagsString = (lang) => {
    if (Array.isArray(tags[lang])) {
      return tags[lang].join(", ");
    }
    return tags[lang] || "";
  };

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="bg-white rounded-lg shadow p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">
            {editingArticle ? `ویرایش مقاله: ${title.fa}` : "ایجاد مقاله جدید"}
          </h2>
          <div className="flex space-x-2 space-x-reverse">
            <button
              onClick={handleCancel}
              className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              <X className="h-4 w-4 ml-1" />
              {editingArticle ? "انصراف" : "بازگشت"}
            </button>
            <button
              onClick={submitArticle}
              disabled={loading}
              className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white ml-1"></div>
                  در حال پردازش...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 ml-1" />
                  {editingArticle ? "ذخیره تغییرات" : "انتشار مقاله"}
                </>
              )}
            </button>
          </div>
        </div>

        {/* پیام‌های خطا و موفقیت */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center text-red-800">
              <AlertCircle className="h-5 w-5 ml-2" />
              <span className="font-medium">{error}</span>
            </div>
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center text-green-800">
              <CheckCircle className="h-5 w-5 ml-2" />
              <span className="font-medium">{success}</span>
            </div>
          </div>
        )}

        {/* بخش پوستر */}
        <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Image className="h-5 w-5" />
            پوستر مقاله
          </h3>

          <div className="flex flex-col md:flex-row gap-6">
            {/* پیش‌نمایش پوستر */}
            <div className="flex-shrink-0">
              {poster ? (
                <div className="relative">
                  <img
                    src={poster}
                    alt="پوستر مقاله"
                    className="w-48 h-32 object-cover rounded-lg border border-gray-300"
                  />
                  <button
                    onClick={removePoster}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                    disabled={loading}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <div className="w-48 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-white">
                  <div className="text-center text-gray-500">
                    <Image className="h-8 w-8 mx-auto mb-2" />
                    <span className="text-sm">بدون پوستر</span>
                  </div>
                </div>
              )}
            </div>

            {/* آپلود پوستر */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                آپلود پوستر مقاله
              </label>
              <div className="flex items-center gap-4">
                <label
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer transition-colors ${
                    loading
                      ? "bg-blue-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
                >
                  <Upload className="h-4 w-4" />
                  انتخاب فایل
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handlePosterUpload}
                    className="hidden"
                    disabled={loading}
                  />
                </label>
                <span className="text-sm text-gray-500">
                  {posterFile
                    ? posterFile.name
                    : editingArticle && poster
                    ? "پوستر فعلی استفاده می‌شود"
                    : "فایلی انتخاب نشده"}
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                فرمت‌های مجاز: JPG, PNG, WebP, GIF • حداکثر حجم: 5MB
              </p>
            </div>
          </div>
        </div>

        {/* Language Selector */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Globe className="h-5 w-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">
              انتخاب زبان برای محتوا:
            </span>
          </div>
          <div className="flex gap-2">
            {Object.entries(languageNames).map(([lang, name]) => (
              <button
                key={lang}
                onClick={() => setCurrentLang(lang)}
                disabled={loading}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  currentLang === lang
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* Article Form */}
        <div className="mb-6">
          <ArticleForm
            // مقادیر برای زبان جاری
            title={title[currentLang]}
            setTitle={(value) => setTitleForLang(currentLang, value)}
            summary={summary[currentLang]}
            setSummary={(value) => setSummaryForLang(currentLang, value)}
            category={category[currentLang]}
            setCategory={(value) => setCategoryForLang(currentLang, value)}
            tags={getTagsString(currentLang)}
            setTags={(value) => setTagsForLang(currentLang, value)}
            slug={slug[currentLang]}
            setSlug={(value) => setSlugForLang(currentLang, value)}
            metaTitle={metaTitle[currentLang]}
            setMetaTitle={(value) => setMetaTitleForLang(currentLang, value)}
            metaDescription={metaDescription[currentLang]}
            setMetaDescription={(value) =>
              setMetaDescriptionForLang(currentLang, value)
            }
            focusKeyword={focusKeyword[currentLang]}
            setFocusKeyword={(value) =>
              setFocusKeywordForLang(currentLang, value)
            }
            generateSlug={(value) => generateSlug(value, currentLang)}
            // تنظیمات
            featured={featured}
            setFeatured={setFeatured}
            status={status}
            setStatus={setStatus}
            // اطلاعات زبان
            currentLang={currentLang}
            languageName={languageNames[currentLang]}
            // loading state
            loading={loading}
          />
        </div>

        {/* Block Manager */}
        <div className="mb-8">
          <BlockManager
            blocks={blocks}
            setBlocks={setBlocks}
            updateBlock={updateBlock}
            removeBlock={removeBlock}
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            currentLang={currentLang}
            loading={loading}
          />
        </div>

        {/* نمایش خلاصه همه زبان‌ها */}
        <div className="mt-8 p-4 bg-gray-50 text-black rounded-lg">
          <h3 className="text-lg font-semibold mb-3">
            خلاصه محتوای همه زبان‌ها
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(languageNames).map(([lang, name]) => (
              <div key={lang} className="bg-white p-3 rounded border">
                <h4 className="font-medium text-sm mb-2">{name}</h4>
                <p className="text-xs text-gray-600 mb-1">
                  <strong>عنوان:</strong> {title[lang] || "---"}
                </p>
                <p className="text-xs text-gray-600 mb-1">
                  <strong>SLUG:</strong> {slug[lang] || "---"}
                </p>
                <p className="text-xs text-gray-600">
                  <strong>خلاصه:</strong>{" "}
                  {summary[lang]
                    ? `${summary[lang].substring(0, 50)}...`
                    : "---"}
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  <strong>تعداد بلوک‌ها:</strong> {blocks.length}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* اطلاعات دیباگ (فقط در حالت توسعه) */}
        {process.env.NODE_ENV === "development" && (
          <div className="mt-8 p-4 bg-gray-900 text-white rounded-lg text-xs font-mono">
            <h4 className="font-bold mb-2">اطلاعات دیباگ:</h4>
            <div className="space-y-1">
              <div>وضعیت: {loading ? "در حال بارگذاری..." : "آماده"}</div>
              <div>
                زبان فعلی: {currentLang} ({languageNames[currentLang]})
              </div>
              <div>عنوان فارسی: {title.fa}</div>
              <div>SLUG فارسی: {slug.fa}</div>
              <div>تعداد بلوک‌ها: {blocks.length}</div>
              <div>
                پوستر:{" "}
                {posterFile ? "فایل جدید" : poster ? "آدرس موجود" : "ندارد"}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
