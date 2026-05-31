"use client";
import React from "react";

export default function Toolbar({ editor, onAddInternalLink, onAddExternalLink }) {
  if (!editor) return null;

  // جلوگیری از drag در toolbar
  const handleDragStart = (e) => {
    e.stopPropagation();
  };

  return (
    <div 
      className="flex gap-2 mb-2 flex-wrap bg-gray-200 p-2 rounded"
      onDragStart={handleDragStart}
      onDrag={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`px-2 py-1 border rounded ${
          editor.isActive("bold") ? "bg-yellow-300" : ""
        }`}
      >
        Bold
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`px-2 py-1 border rounded ${
          editor.isActive("italic") ? "bg-yellow-300" : ""
        }`}
      >
        Italic
      </button>

      {/* ✅ منوی کشویی برای heading ها */}
      <select
        onChange={(e) => {
          const value = e.target.value;
          if (value === "paragraph") {
            editor.chain().focus().setParagraph().run();
          } else {
            const level = parseInt(value.replace("h", ""));
            editor.chain().focus().toggleHeading({ level }).run();
          }
        }}
        value={
          editor.isActive("heading", { level: 1 }) ? "h1" :
          editor.isActive("heading", { level: 2 }) ? "h2" :
          editor.isActive("heading", { level: 3 }) ? "h3" :
          editor.isActive("heading", { level: 4 }) ? "h4" :
          editor.isActive("heading", { level: 5 }) ? "h5" :
          editor.isActive("heading", { level: 6 }) ? "h6" : "paragraph"
        }
        className="px-2 py-1 border rounded bg-white text-black"
        onDragStart={handleDragStart}
      >
        <option value="paragraph">Paragraph</option>
        <option value="h1">Heading 1 (H1)</option>
        <option value="h2">Heading 2 (H2)</option>
        <option value="h3">Heading 3 (H3)</option>
        <option value="h4">Heading 4 (H4)</option>
        <option value="h5">Heading 5 (H5)</option>
        <option value="h6">Heading 6 (H6)</option>
      </select>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`px-2 py-1 border rounded ${
          editor.isActive("bulletList") ? "bg-yellow-300" : ""
        }`}
      >
        لیست
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`px-2 py-1 border rounded ${
          editor.isActive("orderedList") ? "bg-yellow-300" : ""
        }`}
      >
        لیست شماره‌دار
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`px-2 py-1 border rounded ${
          editor.isActive("blockquote") ? "bg-yellow-300" : ""
        }`}
      >
        نقل قول
      </button>

      <input
        type="color"
        onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
        className="w-8 h-8 p-0 border-0"
        onDragStart={handleDragStart}
      />

      <button
        type="button"
        onClick={onAddInternalLink}
        className="px-2 py-1 border rounded bg-blue-100"
      >
        لینک داخلی
      </button>

      <button
        type="button"
        onClick={onAddExternalLink}
        className="px-2 py-1 border rounded bg-green-100"
      >
        لینک خارجی
      </button>
    </div>
  );
}