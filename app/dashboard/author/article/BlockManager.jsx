"use client";
import React, { useState, useEffect, useCallback } from "react";
import { v4 as uuid } from "uuid";
import { 
  Image, 
  Video, 
  Type, 
  GripVertical, 
  Trash2, 
  Plus,
  Upload,
  FileText,
  Languages,
  AlertCircle,
  CheckCircle,
  HelpCircle // ✅ آیکون جدید برای FAQ
} from "lucide-react";
import TextEditor from "./TextEditor";
import FAQBlock from "./FAQBlock"; // ✅ ایمپورت کامپوننت جدید

export default function BlockManager({ 
  blocks, 
  setBlocks, 
  updateBlock, 
  removeBlock, 
  onDragStart, 
  onDragOver, 
  currentLanguage = "fa",
  loading = false 
}) {
  const [activeLanguage, setActiveLanguage] = useState(currentLanguage);

  // همگام‌سازی با تغییر زبان اصلی
  useEffect(() => {
    setActiveLanguage(currentLanguage);
  }, [currentLanguage]);

  const addBlock = (type) => {
    let newBlock = { 
      id: uuid(), 
      type, 
    };

    if (type === "text") {
      newBlock.data = {
        fa: "",
        en: "",
        ku: ""
      };
    } else if (type === "faq") {
      newBlock.data = {
        fa: { items: [] },
        en: { items: [] },
        ku: { items: [] }
      };
    } else {
      newBlock.data = {
        fa: null,
        en: null,
        ku: null
      };
    }

    setBlocks((prev) => [...prev, newBlock]);
  };

  const getBlockIcon = (type) => {
    switch (type) {
      case 'text': return <Type className="h-4 w-4" />;
      case 'image': return <Image className="h-4 w-4" />;
      case 'video': return <Video className="h-4 w-4" />;
      case 'faq': return <HelpCircle className="h-4 w-4" />; // ✅ آیکون FAQ
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const getBlockColor = (type) => {
    switch (type) {
      case 'text': return 'bg-blue-50 border-blue-200 text-blue-700';
      case 'image': return 'bg-green-50 border-green-200 text-green-700';
      case 'video': return 'bg-purple-50 border-purple-200 text-purple-700';
      case 'faq': return 'bg-orange-50 border-orange-200 text-orange-700'; // ✅ رنگ FAQ
      default: return 'bg-gray-50 border-gray-200 text-gray-700';
    }
  };

  const getBlockTitle = (type) => {
    switch (type) {
      case 'text': return 'بلوک متن';
      case 'image': return 'بلوک تصویر';
      case 'video': return 'بلوک ویدیو';
      case 'faq': return 'پرسش و پاسخ (FAQ)'; // ✅ عنوان FAQ
      default: return 'بلوک';
    }
  };

  // 🔥 تابع به‌روزرسانی بلوک - اصلاح شده
  const handleUpdateBlock = useCallback((blockId, content, language = activeLanguage) => {
  setBlocks(prev => prev.map(block => {
    if (block.id === blockId) {
      if (block.type === "text") {
        return {
          ...block,
          data: {
            ...block.data,
            [language]: content
          }
        };
      } else if (block.type === "faq") {
        // ✅ برای بلوک FAQ
        return {
          ...block,
          data: {
            ...block.data,
            [language]: content[language] || content // اگر content مستقیم داده شده
          }
        };
      } else if (block.type === "image" || block.type === "video") {
        return {
          ...block,
          file: content instanceof File ? content : null,
          url: typeof content === 'string' ? content : null,
          data: {
            ...block.data,
            ...(typeof content === 'string' ? {
              fa: content,
              en: content,
              ku: content
            } : {})
          }
        };
      }
    }
    return block;
  }));
}, [activeLanguage, setBlocks]);

  // هندلرهای درگ
  const handleHeaderDragStart = (e, index) => {
    e.stopPropagation();
    onDragStart(index);
  };

  const handleHeaderDragOver = (e, index) => {
    e.stopPropagation();
    e.preventDefault();
    onDragOver(e, index);
  };

  const handleContentDragStart = (e) => {
    e.stopPropagation();
  };

  // هندلر آپلود فایل
  const handleFileUpload = (e, blockId) => {
    const file = e.target.files[0];
    if (file) {
      handleUpdateBlock(blockId, file);
    }
  };

  // بررسی محتوای بلوک
  const getBlockContentStatus = (block) => {
    if (block.type === "text") {
      const hasFa = block.data?.fa && block.data.fa.length > 10;
      const hasEn = block.data?.en && block.data.en.length > 10;
      const hasKu = block.data?.ku && block.data.ku.length > 10;
      
      return { hasFa, hasEn, hasKu };
    } else if (block.type === "faq") {
      const hasFa = block.data?.fa?.items?.length > 0;
      const hasEn = block.data?.en?.items?.length > 0;
      const hasKu = block.data?.ku?.items?.length > 0;
      
      return { hasFa, hasEn, hasKu };
    } else if (block.type === "image" || block.type === "video") {
      const hasFile = block.file instanceof File;
      const hasUrl = block.url || block.data?.fa;
      return { 
        hasFa: hasFile || hasUrl,
        hasEn: hasFile || hasUrl,
        hasKu: hasFile || hasUrl
      };
    }
    return { hasFa: false, hasEn: false, hasKu: false };
  };

  // کامپوننت‌های دکمه اضافه کردن
  const AddBlockButton = ({ type, icon, label, color }) => (
    <button 
      onClick={() => addBlock(type)} 
      disabled={loading}
      className={`
        flex items-center gap-2 px-4 py-3 rounded-lg border-2 border-dashed transition-all duration-200
        hover:scale-105 hover:shadow-md active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
        ${color} group
      `}
    >
      <div className="p-2 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <span className="font-medium text-sm">{label}</span>
    </button>
  );

  // کامپوننت انتخاب زبان برای ویرایش
  const LanguageSelector = () => (
    <div className="flex items-center gap-2 bg-white p-2 rounded-lg border shadow-sm">
      <Languages className="h-4 w-4 text-gray-600" />
      <span className="text-sm text-gray-600">ویرایش به زبان:</span>
      <select 
        value={activeLanguage} 
        onChange={(e) => setActiveLanguage(e.target.value)}
        disabled={loading}
        className="text-sm text-black border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
      >
        <option value="fa">فارسی</option>
        <option value="en">English</option>
        <option value="ku">کوردی</option>
      </select>
    </div>
  );

  return (
    <div className="mt-8">
      {/* هدر */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6 border border-blue-100">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">مدیریت محتوا</h2>
            <p className="text-gray-600 text-sm">
              بلوک‌های مختلف محتوا را اضافه و مرتب کنید
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <AddBlockButton
              type="text"
              icon={<Type className="h-5 w-5 text-blue-600" />}
              label="افزودن متن"
              color="bg-blue-50 border-blue-300 hover:bg-blue-100 text-blue-700"
            />
            <AddBlockButton
              type="image"
              icon={<Image className="h-5 w-5 text-green-600" />}
              label="افزودن تصویر"
              color="bg-green-50 border-green-300 hover:bg-green-100 text-green-700"
            />
            <AddBlockButton
              type="video"
              icon={<Video className="h-5 w-5 text-purple-600" />}
              label="افزودن ویدیو"
              color="bg-purple-50 border-purple-300 hover:bg-purple-100 text-purple-700"
            />
            <AddBlockButton
              type="faq"
              icon={<HelpCircle className="h-5 w-5 text-orange-600" />}
              label="پرسش و پاسخ"
              color="bg-orange-50 border-orange-300 hover:bg-orange-100 text-orange-700"
            />
          </div>
        </div>

        {/* انتخاب زبان */}
        <div className="mt-4">
          <LanguageSelector />
        </div>
      </div>

      {/* لیست بلوک‌ها */}
      <div className="space-y-4">
        {blocks.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border-2 border-dashed border-gray-300">
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 bg-blue-50 rounded-full">
                <Plus className="h-8 w-8 text-blue-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  هنوز بلوکی اضافه نکرده‌اید
                </h3>
                <p className="text-gray-500 text-sm">
                  برای شروع، یکی از بلوک‌های بالا را انتخاب کنید
                </p>
              </div>
            </div>
          </div>
        ) : (
          blocks.map((block, index) => {
            const contentStatus = getBlockContentStatus(block);
            
            return (
              <div 
                key={block.id} 
                className={`
                  border-2 rounded-2xl transition-all duration-200 hover:shadow-lg
                  ${getBlockColor(block.type)} hover:border-opacity-70
                `}
              >
                {/* هدر بلوک با قابلیت درگ */}
                <div 
                  className={`
                    flex justify-between items-center p-4 rounded-t-2xl cursor-grab
                    active:cursor-grabbing transition-colors
                    ${getBlockColor(block.type).replace('50', '100')}
                  `}
                  draggable
                  onDragStart={(e) => handleHeaderDragStart(e, index)}
                  onDragOver={(e) => handleHeaderDragOver(e, index)}
                  onDrag={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 text-gray-600">
                      <GripVertical className="h-4 w-4" />
                      <div className="flex items-center gap-2">
                        {getBlockIcon(block.type)}
                        <span className="font-medium text-sm">
                          {getBlockTitle(block.type)}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-500 border">
                      #{index + 1}
                    </span>

                    {/* نمایش وضعیت ترجمه‌ها */}
                    {(block.type === "text" || block.type === "faq") && (
                      <div className="flex items-center gap-1">
                        <div className={`w-2 h-2 rounded-full ${contentStatus.hasFa ? 'bg-green-500' : 'bg-gray-300'}`} title="فارسی" />
                        <div className={`w-2 h-2 rounded-full ${contentStatus.hasEn ? 'bg-green-500' : 'bg-gray-300'}`} title="English" />
                        <div className={`w-2 h-2 rounded-full ${contentStatus.hasKu ? 'bg-green-500' : 'bg-gray-300'}`} title="کوردی" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 bg-white px-3 py-1 rounded-full border">
                      برای جابجایی بکشید
                    </span>
                    <button 
                      onClick={() => removeBlock(block.id)} 
                      disabled={loading}
                      className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors disabled:opacity-50"
                      title="حذف بلوک"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                {/* محتوای بلوک */}
                <div 
                  className="bg-white p-4 rounded-b-2xl"
                  onDragStart={handleContentDragStart}
                  onDrag={(e) => e.stopPropagation()}
                >
                  {block.type === "text" && (
                    <div className="space-y-4">
                      {/* هشدار اگر محتوای زبان فعلی خالی است */}
                      {!contentStatus[`has${activeLanguage.toUpperCase()}`] && (
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                          <p className="text-yellow-700 text-sm flex items-center gap-2">
                            <AlertCircle className="h-4 w-4" />
                            ⚠️ محتوای {activeLanguage === 'fa' ? 'فارسی' : activeLanguage === 'en' ? 'English' : 'کوردی'} برای این بلوک نوشته نشده است.
                          </p>
                        </div>
                      )}
                      
                      <TextEditor 
                        block={block} 
                        updateBlock={handleUpdateBlock}
                        language={activeLanguage}
                      />
                    </div>
                  )}
                  
                  {block.type === "faq" && (
                    <FAQBlock
                      block={block}
                      updateBlock={handleUpdateBlock}
                      language={activeLanguage}
                    />
                  )}
                  
                  {(block.type === "image" || block.type === "video") && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-center">
                        <label className={`
                          flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-200
                          hover:border-blue-400 hover:bg-blue-50
                          ${block.file || block.url ? 'border-green-400 bg-green-50' : 'border-gray-300'}
                          ${loading ? 'opacity-50 cursor-not-allowed' : ''}
                        `}>
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            {block.file ? (
                              <>
                                <Upload className="h-8 w-8 text-green-500 mb-2" />
                                <p className="text-sm text-green-600 font-medium">
                                  ✓ فایل انتخاب شده است
                                </p>
                                <p className="text-xs text-green-500 mt-1">
                                  {block.file.name}
                                </p>
                              </>
                            ) : block.url ? (
                              <>
                                {block.type === "image" ? (
                                  <Image className="h-8 w-8 text-blue-500 mb-2" />
                                ) : (
                                  <Video className="h-8 w-8 text-purple-500 mb-2" />
                                )}
                                <p className="text-sm text-blue-600 font-medium">
                                  ✓ {block.type === "image" ? "تصویر" : "ویدئو"} موجود است
                                </p>
                                <p className="text-xs text-blue-500 mt-1 truncate max-w-xs">
                                  {block.url}
                                </p>
                              </>
                            ) : (
                              <>
                                {block.type === "image" ? (
                                  <Image className="h-8 w-8 text-gray-400 mb-2" />
                                ) : (
                                  <Video className="h-8 w-8 text-gray-400 mb-2" />
                                )}
                                <p className="text-sm text-gray-600">
                                  <span className="font-medium">کلیک کنید برای آپلود</span>
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                  {block.type === "image" ? 'PNG, JPG, GIF, WebP' : 'MP4, WebM, MOV'}
                                </p>
                              </>
                            )}
                          </div>
                          <input
                            type="file"
                            accept={block.type === "image" ? "image/*" : "video/*"}
                            onChange={(e) => handleFileUpload(e, block.id)}
                            className="hidden"
                            disabled={loading}
                          />
                        </label>
                      </div>
                      
                      {(block.file || block.url) && (
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => handleUpdateBlock(block.id, null)}
                            disabled={loading}
                            className="text-sm text-red-500 hover:text-red-700 px-3 py-1 border border-red-200 rounded-lg hover:bg-red-50 transition-colors disabled:opacity-50"
                          >
                            حذف فایل
                          </button>
                          {block.file && (
                            <button
                              onClick={() => {
                                const url = URL.createObjectURL(block.file);
                                window.open(url, '_blank');
                              }}
                              disabled={loading}
                              className="text-sm text-blue-500 hover:text-blue-700 px-3 py-1 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors disabled:opacity-50"
                            >
                              پیش‌نمایش
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* دکمه اضافه کردن در پایین */}
      {blocks.length > 0 && (
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex justify-center">
            <div className="flex gap-3 bg-white p-3 rounded-xl border shadow-sm">
              <button
                onClick={() => addBlock("text")}
                disabled={loading}
                className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors disabled:opacity-50"
              >
                <Type className="h-4 w-4" />
                <span className="text-sm">متن</span>
              </button>
              <button
                onClick={() => addBlock("image")}
                disabled={loading}
                className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors disabled:opacity-50"
              >
                <Image className="h-4 w-4" />
                <span className="text-sm">تصویر</span>
              </button>
              <button
                onClick={() => addBlock("video")}
                disabled={loading}
                className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors disabled:opacity-50"
              >
                <Video className="h-4 w-4" />
                <span className="text-sm">ویدیو</span>
              </button>
              <button
                onClick={() => addBlock("faq")}
                disabled={loading}
                className="flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors disabled:opacity-50"
              >
                <HelpCircle className="h-4 w-4" />
                <span className="text-sm">پرسش و پاسخ</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}