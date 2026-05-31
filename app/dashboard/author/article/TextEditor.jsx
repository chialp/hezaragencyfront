"use client";
import React, { useState, useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Color } from "@tiptap/extension-color";
import { TextStyle } from "@tiptap/extension-text-style";
import Link from "@tiptap/extension-link";
import Toolbar from "./Toolbar";

export default function TextEditor({ block, updateBlock, language = "fa" }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // دریافت محتوای زبان فعلی
  const getCurrentContent = () => {
    if (block.data && block.data[language]) {
      return block.data[language];
    }
    return block.value || "";
  };

  const editor = useEditor({
    extensions: [
      StarterKit, 
      TextStyle, 
      Color, 
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-blue-600 underline",
        },
      })
    ],
    content: getCurrentContent(),
    onUpdate: ({ editor }) => {
      const newContent = editor.getHTML();
      // ذخیره محتوا با مشخص کردن زبان
      updateBlock(block.id, newContent, language);
    },
    editorProps: {
      attributes: {
        class: "border p-2 w-full min-h-[100px] text-black bg-white rounded prose prose-sm max-w-none focus:outline-none focus:ring-2 focus:ring-blue-500",
      },
    },
    immediatelyRender: false,
    shouldRerenderOnTransaction: () => false,
  }, [mounted, language]);

  const handleAddInternalLink = () => {
    const url = prompt("لینک داخلی (مثال: /blog/post-1):");
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  const handleAddExternalLink = () => {
    const url = prompt("لینک خارجی (مثال: https://example.com):");
    if (url) {
      editor.chain().focus().setLink({ href: url, target: "_blank", rel: "noopener noreferrer" }).run();
    }
  };

  // جلوگیری از drag در ویرایشگر
  const handleEditorDragStart = (e) => {
    e.stopPropagation();
  };

  // وقتی زبان تغییر می‌کند، محتوا را به روز کن
  useEffect(() => {
    if (editor && mounted) {
      editor.commands.setContent(getCurrentContent());
    }
  }, [language, editor, mounted]);

  if (!mounted || !editor) {
    return (
      <div className="border p-2 w-full min-h-[100px] text-black bg-white rounded">
        در حال بارگذاری ویرایشگر...
      </div>
    );
  }

  return (
    <div 
      onDragStart={handleEditorDragStart}
      onDrag={(e) => e.stopPropagation()}
    >
      <Toolbar 
        editor={editor} 
        onAddInternalLink={handleAddInternalLink}
        onAddExternalLink={handleAddExternalLink}
      />
      <EditorContent 
        editor={editor} 
        onDragStart={handleEditorDragStart}
      />
    </div>
  );
}