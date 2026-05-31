"use client";
import React, { useState } from "react";
import { Plus, Trash2, ChevronDown, ChevronUp, GripVertical } from "lucide-react";
import { v4 as uuid } from "uuid";

export default function FAQBlock({ block, updateBlock, language = "fa" }) {
  const [expandedItems, setExpandedItems] = useState({});

  // دریافت آیتم‌های FAQ با ساختار صحیح
  const getFAQItems = () => {
    // اگر data وجود دارد و برای زبان فعلی items دارد
    if (block.data?.[language]?.items) {
      return block.data[language].items;
    }
    
    // اگر data.value قدیمی استفاده شده
    if (block.value && Array.isArray(block.value)) {
      return block.value;
    }
    
    // اگر هیچ کدام، آرایه خالی برگردان
    return [];
  };

  const faqItems = getFAQItems();

  const toggleItem = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const addFAQItem = () => {
    const newItem = {
      id: uuid(),
      question: "",
      answer: ""
    };
    
    const updatedItems = [...faqItems, newItem];
    
    // ساختار جدید داده
    const newData = {
      ...block.data,
      [language]: {
        items: updatedItems
      }
    };
    
    // به‌روزرسانی بلوک
    updateBlock(block.id, newData, language);
    
    // آیتم جدید را باز کن
    setExpandedItems(prev => ({
      ...prev,
      [updatedItems.length - 1]: true
    }));
  };

  const updateFAQItem = (index, field, value) => {
    const updatedItems = [...faqItems];
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value
    };
    
    const newData = {
      ...block.data,
      [language]: {
        items: updatedItems
      }
    };
    
    updateBlock(block.id, newData, language);
  };

  const removeFAQItem = (index) => {
    const updatedItems = faqItems.filter((_, i) => i !== index);
    
    const newData = {
      ...block.data,
      [language]: {
        items: updatedItems
      }
    };
    
    updateBlock(block.id, newData, language);
    
    // اگر آیتم حذف شده باز بود، ببندش
    if (expandedItems[index]) {
      const newExpanded = { ...expandedItems };
      delete newExpanded[index];
      setExpandedItems(newExpanded);
    }
  };

  const moveItem = (index, direction) => {
    if (
      (direction === 'up' && index === 0) || 
      (direction === 'down' && index === faqItems.length - 1)
    ) return;

    const newIndex = direction === 'up' ? index - 1 : index + 1;
    const updatedItems = [...faqItems];
    const [movedItem] = updatedItems.splice(index, 1);
    updatedItems.splice(newIndex, 0, movedItem);

    const newData = {
      ...block.data,
      [language]: {
        items: updatedItems
      }
    };
    
    updateBlock(block.id, newData, language);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">پرسش و پاسخ (FAQ)</h3>
        <button
          onClick={addFAQItem}
          className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>افزودن سوال جدید</span>
        </button>
      </div>

      {faqItems.length === 0 ? (
        <div className="text-center py-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
          <p className="text-gray-500">هیچ سوالی اضافه نشده است. اولین سوال را اضافه کنید.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <div
              key={item.id || index}
              className="border rounded-lg bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* هدر سوال */}
              <div
                className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer"
                onClick={() => toggleItem(index)}
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className="text-gray-400 cursor-grab"
                    onMouseDown={(e) => e.stopPropagation()}
                  >
                    <GripVertical className="h-5 w-5" />
                  </div>
                  <span className="font-medium text-gray-700">
                    سوال {index + 1}: {item.question || "(بدون عنوان)"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      moveItem(index, 'up');
                    }}
                    disabled={index === 0}
                    className="p-1 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <ChevronUp className="h-4 w-4" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      moveItem(index, 'down');
                    }}
                    disabled={index === faqItems.length - 1}
                    className="p-1 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFAQItem(index);
                    }}
                    className="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                  <div className="mr-2">
                    {expandedItems[index] ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </div>

              {/* محتوای سوال و جواب */}
              {expandedItems[index] && (
                <div className="p-4 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      سوال
                    </label>
                    <input
                      type="text"
                      value={item.question || ""}
                      onChange={(e) => updateFAQItem(index, "question", e.target.value)}
                      placeholder="متن سوال را وارد کنید"
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      پاسخ
                    </label>
                    <textarea
                      value={item.answer || ""}
                      onChange={(e) => updateFAQItem(index, "answer", e.target.value)}
                      placeholder="متن پاسخ را وارد کنید"
                      rows={4}
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}